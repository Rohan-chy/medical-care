'use client';

import React from 'react';
import { CaretSortIcon, CheckIcon, Cross2Icon } from '@radix-ui/react-icons';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import { Primitive } from '@radix-ui/react-primitive';
import { useControllableState } from '@radix-ui/react-use-controllable-state';

import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command';

export interface MultiSelectOptionItem {
  value: string;
  label?: React.ReactNode;
}

interface MultiSelectContextValue {
  value: string[];
  open: boolean;

  setOpen(open: boolean): void;

  onSelect(value: string, item: MultiSelectOptionItem): void;

  onDeselect(value: string, item: MultiSelectOptionItem): void;

  onSearch?(keyword: string | undefined): void;

  filter?: boolean | ((keyword: string, current: string) => boolean);

  disabled?: boolean;

  maxCount?: number;

  itemCache: Map<string, MultiSelectOptionItem>;
}

const MultiSelectContext = React.createContext<
  MultiSelectContextValue | undefined
>(undefined);

const useMultiSelect = () => {
  const context = React.useContext(MultiSelectContext);

  if (!context) {
    throw new Error('useMultiSelect must be used within MultiSelect');
  }

  return context;
};

type MultiSelectProps = React.ComponentPropsWithoutRef<
  typeof PopoverPrimitive.Root
> & {
  value?: string[];
  onValueChange?(value: string[], items: MultiSelectOptionItem[]): void;

  onSelect?(value: string, item: MultiSelectOptionItem): void;

  onDeselect?(value: string, item: MultiSelectOptionItem): void;

  defaultValue?: string[];

  onSearch?(keyword: string | undefined): void;

  filter?: boolean | ((keyword: string, current: string) => boolean);

  disabled?: boolean;

  maxCount?: number;
};

const MultiSelect: React.FC<MultiSelectProps> = ({
  value: valueProp,
  onValueChange: onValueChangeProp,
  onDeselect: onDeselectProp,
  onSelect: onSelectProp,
  defaultValue,
  open: openProp,
  onOpenChange,
  defaultOpen,
  onSearch,
  filter,
  disabled,
  maxCount,
  ...popoverProps
}) => {
  const itemCache = React.useRef(
    new Map<string, MultiSelectOptionItem>()
  ).current;

  const handleValueChange = React.useCallback(
    (state: string[]) => {
      if (onValueChangeProp) {
        const items = state
          ?.map((value) => itemCache.get(value))
          .filter(Boolean) as MultiSelectOptionItem[];

        onValueChangeProp(state, items);
      }
    },
    [onValueChangeProp, itemCache]
  );

  const [value, setValue] = useControllableState<string[]>({
    prop: valueProp,
    defaultProp: defaultValue ?? [],
    onChange: handleValueChange,
  });

  const [open, setOpen] = useControllableState<boolean>({
    prop: openProp,
    defaultProp: defaultOpen ?? false,
    onChange: onOpenChange,
  });

  const handleSelect = React.useCallback(
    (value: string, item: MultiSelectOptionItem) => {
      setValue((prev) => {
        if (prev?.includes(value)) return prev;

        onSelectProp?.(value, item);

        return prev ? [...prev, value] : [value];
      });
    },
    [onSelectProp, setValue]
  );

  const handleDeselect = React.useCallback(
    (value: string, item: MultiSelectOptionItem) => {
      setValue((prev) => {
        if (!prev || !prev.includes(value)) return prev;

        onDeselectProp?.(value, item);

        return prev.filter((v) => v !== value);
      });
    },
    [onDeselectProp, setValue]
  );

  const contextValue = React.useMemo(
    () => ({
      value: value || [],
      open: open || false,
      setOpen,
      onSearch,
      filter,
      disabled,
      maxCount,
      onSelect: handleSelect,
      onDeselect: handleDeselect,
      itemCache,
    }),
    [
      value,
      open,
      setOpen,
      onSearch,
      filter,
      disabled,
      maxCount,
      handleSelect,
      handleDeselect,
      itemCache,
    ]
  );

  return (
    <MultiSelectContext.Provider value={contextValue}>
      <PopoverPrimitive.Root
        {...popoverProps}
        open={open}
        onOpenChange={setOpen}
      />
    </MultiSelectContext.Provider>
  );
};

MultiSelect.displayName = 'MultiSelect';

const PreventClick = (e: React.MouseEvent | React.TouchEvent) => {
  e.preventDefault();
  e.stopPropagation();
};

const MultiSelectTrigger = React.forwardRef<
  React.ElementRef<typeof Primitive.div>,
  React.ComponentPropsWithoutRef<typeof Primitive.div>
>(({ className, children, ...props }, forwardedRef) => {
  const { disabled, open, setOpen } = useMultiSelect();

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !open) {
      e.preventDefault();
      setOpen(true);
    }
  };

  return (
    <PopoverPrimitive.Trigger ref={forwardedRef as any} asChild>
      <div
        aria-disabled={disabled}
        data-disabled={disabled}
        {...props}
        className={cn(
          'flex min-h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background',
          disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer',
          className
        )}
        onClick={disabled ? PreventClick : props.onClick}
        onTouchStart={disabled ? PreventClick : props.onTouchStart}
        onKeyDown={handleKeyDown}
      >
        {children}

        <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
      </div>
    </PopoverPrimitive.Trigger>
  );
});

MultiSelectTrigger.displayName = 'MultiSelectTrigger';

interface MultiSelectValueProps extends React.ComponentPropsWithoutRef<
  typeof Primitive.div
> {
  placeholder?: string;
  maxDisplay?: number;
  maxItemLength?: number;
}

const MultiSelectValue = React.forwardRef<
  React.ElementRef<typeof Primitive.div>,
  MultiSelectValueProps
>(
  (
    { className, placeholder, maxDisplay, maxItemLength, ...props },
    forwardRef
  ) => {
    const { value, itemCache, onDeselect } = useMultiSelect();

    const renderRemain =
      maxDisplay && value.length > maxDisplay ? value.length - maxDisplay : 0;

    const renderItems = renderRemain ? value.slice(0, maxDisplay) : value;

    if (!value.length) {
      return <span className="text-muted-foreground">{placeholder}</span>;
    }

    return (
      <TooltipProvider delayDuration={300}>
        <div
          className={cn(
            'flex flex-1 flex-wrap gap-1 overflow-hidden',
            className
          )}
          {...props}
          ref={forwardRef}
        >
          {renderItems.map((value) => {
            const item = itemCache.get(value);

            const content = item?.label || value;

            const child =
              maxItemLength &&
              typeof content === 'string' &&
              content.length > maxItemLength
                ? `${content.slice(0, maxItemLength)}...`
                : content;

            const el = (
              <Badge
                variant="secondary"
                key={value}
                className="cursor-pointer gap-1 rounded-full px-2 py-1"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();

                  onDeselect(value, item!);
                }}
              >
                <span>{child}</span>

                <Cross2Icon className="h-3 w-3" />
              </Badge>
            );

            if (child !== content) {
              return (
                <Tooltip key={value}>
                  <TooltipTrigger asChild>{el}</TooltipTrigger>

                  <TooltipContent>{content}</TooltipContent>
                </Tooltip>
              );
            }

            return el;
          })}

          {renderRemain ? (
            <span className="text-xs text-muted-foreground">
              +{renderRemain}
            </span>
          ) : null}
        </div>
      </TooltipProvider>
    );
  }
);

MultiSelectValue.displayName = 'MultiSelectValue';

const MultiSelectSearch = React.forwardRef<
  React.ElementRef<typeof CommandInput>,
  React.ComponentPropsWithoutRef<typeof CommandInput>
>((props, ref) => {
  const { onSearch } = useMultiSelect();

  return <CommandInput ref={ref} {...props} onValueChange={onSearch} />;
});

MultiSelectSearch.displayName = 'MultiSelectSearch';

const MultiSelectList = React.forwardRef<
  React.ElementRef<typeof CommandList>,
  React.ComponentPropsWithoutRef<typeof CommandList>
>(({ className, ...props }, ref) => {
  return (
    <CommandList ref={ref} className={cn('max-h-60', className)} {...props} />
  );
});

MultiSelectList.displayName = 'MultiSelectList';

const MultiSelectContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, children, ...props }, ref) => {
  const context = useMultiSelect();

  if (!context.open) return null;

  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        ref={ref}
        align="start"
        sideOffset={4}
        className={cn(
          'z-50 w-[var(--radix-popper-anchor-width)] rounded-md border bg-popover p-1 text-popover-foreground shadow-md',
          className
        )}
        {...props}
      >
        <Command className="w-full">{children}</Command>
      </PopoverPrimitive.Content>
    </PopoverPrimitive.Portal>
  );
});

MultiSelectContent.displayName = 'MultiSelectContent';

type MultiSelectItemProps = React.ComponentPropsWithoutRef<typeof CommandItem> &
  Partial<MultiSelectOptionItem>;

const MultiSelectItem = React.forwardRef<
  React.ElementRef<typeof CommandItem>,
  MultiSelectItemProps
>(
  (
    { value, children, label, disabled: disabledProp, className, ...props },
    forwardedRef
  ) => {
    const {
      value: contextValue,
      maxCount,
      onSelect,
      onDeselect,
      itemCache,
    } = useMultiSelect();

    const item = React.useMemo(() => {
      return value
        ? {
            value,
            label:
              label || (typeof children === 'string' ? children : undefined),
          }
        : undefined;
    }, [value, label, children]);

    const selected = Boolean(value && contextValue.includes(value));

    React.useEffect(() => {
      if (value && item) {
        itemCache.set(value, item);
      }
    }, [value, item, itemCache]);

    const disabled = Boolean(
      disabledProp || (!selected && maxCount && contextValue.length >= maxCount)
    );

    const handleClick = () => {
      if (!value || !item) return;

      if (selected) {
        onDeselect(value, item);
      } else {
        onSelect(value, item);
      }
    };

    return (
      <CommandItem
        {...props}
        value={value}
        disabled={disabled}
        ref={forwardedRef}
        className={cn(className)}
        onSelect={!disabled ? handleClick : undefined}
      >
        <span className="truncate">{children || label || value}</span>

        {selected ? <CheckIcon className="ml-auto h-4 w-4" /> : null}
      </CommandItem>
    );
  }
);

MultiSelectItem.displayName = 'MultiSelectItem';

const MultiSelectGroup = React.forwardRef<
  React.ElementRef<typeof CommandGroup>,
  React.ComponentPropsWithoutRef<typeof CommandGroup>
>((props, forwardRef) => {
  return <CommandGroup {...props} ref={forwardRef} />;
});

MultiSelectGroup.displayName = 'MultiSelectGroup';

const MultiSelectSeparator = React.forwardRef<
  React.ElementRef<typeof CommandSeparator>,
  React.ComponentPropsWithoutRef<typeof CommandSeparator>
>((props, forwardRef) => {
  return <CommandSeparator {...props} ref={forwardRef} />;
});

MultiSelectSeparator.displayName = 'MultiSelectSeparator';

const MultiSelectEmpty = React.forwardRef<
  React.ElementRef<typeof CommandEmpty>,
  React.ComponentPropsWithoutRef<typeof CommandEmpty>
>(({ children = 'No results found', ...props }, ref) => {
  return (
    <CommandEmpty ref={ref} {...props}>
      {children}
    </CommandEmpty>
  );
});

MultiSelectEmpty.displayName = 'MultiSelectEmpty';

export interface MultiSelectOptionSeparator {
  type: 'separator';
}

export interface MultiSelectOptionGroup {
  heading?: React.ReactNode;
  value?: string;
  children: MultiSelectOption[];
}

export type MultiSelectOption =
  | Pick<MultiSelectItemProps, 'value' | 'label' | 'disabled'>
  | MultiSelectOptionSeparator
  | MultiSelectOptionGroup;

const renderMultiSelectOptions = (list: MultiSelectOption[]) => {
  return list?.map((option, index) => {
    if ('type' in option) {
      if (option.type === 'separator') {
        return <MultiSelectSeparator key={index} />;
      }

      return null;
    }

    if ('children' in option) {
      return (
        <MultiSelectGroup key={option.value || index} heading={option.heading}>
          {renderMultiSelectOptions(option.children)}
        </MultiSelectGroup>
      );
    }

    return (
      <MultiSelectItem key={option.value} {...option}>
        {option.label}
      </MultiSelectItem>
    );
  });
};

export {
  MultiSelect,
  MultiSelectTrigger,
  MultiSelectValue,
  MultiSelectSearch,
  MultiSelectContent,
  MultiSelectList,
  MultiSelectItem,
  MultiSelectGroup,
  MultiSelectSeparator,
  MultiSelectEmpty,
  renderMultiSelectOptions,
};
