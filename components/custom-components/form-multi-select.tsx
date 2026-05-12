'use client';

import * as React from 'react';
import { FieldValues, Path, UseFormReturn } from 'react-hook-form';

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

import {
  MultiSelect,
  MultiSelectContent,
  MultiSelectEmpty,
  MultiSelectList,
  MultiSelectOption,
  MultiSelectOptionGroup,
  MultiSelectSearch,
  MultiSelectTrigger,
  MultiSelectValue,
  renderMultiSelectOptions,
} from '@/components/ui/multi-select';

export interface Options {
  label: string;
  value: string;
  group?: string;
}

const group = (options: Options[]): MultiSelectOptionGroup[] => {
  return options.reduce((acc, item) => {
    const found = acc.find((g) => g.heading === item.group);

    if (found) {
      found.children.push(item);
    } else {
      acc.push({
        heading: item.group,
        children: [item],
      });
    }

    return acc;
  }, [] as MultiSelectOptionGroup[]);
};

interface FormMultiSelectProps<T extends FieldValues> {
  form: UseFormReturn<T>;
  name: Path<T>;

  items: Options[];

  label?: string;

  placeholder?: string;

  isRequired?: boolean;
}

export function FormMultiSelect<T extends FieldValues>({
  form,
  items,
  name,
  placeholder,
  label,
  isRequired,
}: FormMultiSelectProps<T>) {
  const indexRef = React.useRef(0);

  const [loading, setLoading] = React.useState(false);

  const [options, setOptions] = React.useState<MultiSelectOption[]>(() =>
    group(items)
  );

  const [searchKeyword, setSearchKeyword] = React.useState('');

  React.useEffect(() => {
    setOptions(group(items));
  }, [items]);

  const search = async (keyword?: string) => {
    if (!keyword) return group(items);

    const lowerKeyword = keyword.toLowerCase();

    const filtered = items.filter((item) =>
      item.label.toLowerCase().includes(lowerKeyword)
    );

    return filtered.length ? group(filtered) : [];
  };

  const handleSearch = async (keyword: string) => {
    const index = ++indexRef.current;

    setLoading(true);

    setSearchKeyword(keyword);

    const newOptions = await search(keyword);

    if (indexRef.current === index) {
      setOptions(newOptions);
      setLoading(false);
    }
  };

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => {
        const currentValue = field.value || [];

        const selectedValues = Array.isArray(currentValue)
          ? currentValue
          : [currentValue];

        return (
          <FormItem className="space-y-2">
            {label && (
              <FormLabel>
                {label}

                {isRequired && <span className="ml-1 text-red-500">*</span>}
              </FormLabel>
            )}

            <MultiSelect
              value={selectedValues}
              defaultValue={field.value}
              onSearch={handleSearch}
              onValueChange={(value) => {
                field.onChange(value);

                setOptions(group(items));

                setSearchKeyword('');
              }}
            >
              <FormControl>
                <MultiSelectTrigger className="border-black text-xs bg-white">
                  <MultiSelectValue
                    placeholder={placeholder || 'Select items'}
                  />
                </MultiSelectTrigger>
              </FormControl>

              <MultiSelectContent>
                <MultiSelectSearch
                  placeholder="Search..."
                  value={searchKeyword}
                  onValueChange={handleSearch}
                />

                <MultiSelectList>
                  {loading ? null : renderMultiSelectOptions(options)}

                  <MultiSelectEmpty>
                    {loading ? 'Loading...' : 'No results found'}
                  </MultiSelectEmpty>
                </MultiSelectList>
              </MultiSelectContent>
            </MultiSelect>

            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
}
