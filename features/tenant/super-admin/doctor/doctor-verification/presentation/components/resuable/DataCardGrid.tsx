'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import { CustomButton } from '@/components/extended/extended-button';
import { Icons } from '@/shared/icons';

interface FieldConfig {
  label: string;
  key?: string;
  icon?: React.ReactNode;
  render?: (item: any) => React.ReactNode;
}

interface Props {
  data: any[];
  title?: string;
  fields: FieldConfig[];
  showDocument?: boolean;
  admin?: boolean;
}

export function DataCardGrid({
  data,
  title,
  fields,
  showDocument = true,
  admin = false,
}: Props) {
  const [previewImage, setPreviewImage] = useState<string | undefined>();

  if (!data || data.length === 0) return null;

  return (
    <>
      {/* Title */}
      {title && (
        <div
          className="px-5 py-2 font-semibold rounded-t-lg text-[var(--primary-foreground)]"
          style={{ background: 'var(--primary)' }}
        >
          {title}
        </div>
      )}

      {/* Grid */}
      <div
        className={cn(
          'grid gap-6 md:grid-cols-2',
          admin ? 'xl:grid-cols-2' : 'xl:grid-cols-3'
        )}
      >
        {data.map((item, index) => {
          const hasImage = showDocument && item.baseAddress && item.documentUrl;

          const imageUrl = hasImage
            ? `http://${item.baseAddress}${item.documentUrl}`
            : undefined;

          return (
            <Card
              key={index}
              className="shadow-sm hover:shadow-md transition border bg-[var(--card)] text-[var(--card-foreground)]"
            >
              <CardContent className="space-y-4 text-sm">
                {fields.map((field, i) => {
                  const value = field.render
                    ? field.render(item)
                    : item[field.key!] || '—';

                  const isLongText =
                    field.key === 'researchOutcome' || field.key === 'remarks';

                  return (
                    <div
                      key={i}
                      className={cn(
                        'gap-2',
                        isLongText
                          ? 'flex flex-col'
                          : 'flex justify-between items-start'
                      )}
                    >
                      {/* Label */}
                      <span className="flex items-center gap-1 text-[var(--muted-foreground)]">
                        {field.icon}
                        {field.label}
                      </span>

                      {/* Value */}
                      <span
                        className={cn(
                          'font-medium text-[var(--foreground)]',
                          isLongText
                            ? 'text-left leading-relaxed whitespace-pre-wrap'
                            : 'text-right max-w-[65%] break-words'
                        )}
                      >
                        {value}
                      </span>
                    </div>
                  );
                })}

                {/* Document */}
                {hasImage && (
                  <div className="space-y-2">
                    <span className="text-[var(--muted-foreground)]">
                      Document
                    </span>

                    <div className="relative w-full h-32 border rounded-md overflow-hidden">
                      <img
                        src={imageUrl}
                        className="w-full h-full object-cover"
                        alt="document"
                      />

                      <CustomButton
                        size="icon"
                        icon={<Icons.Maximize2 size={16} />}
                        className="absolute bottom-2 right-2 text-white"
                        onClick={() => setPreviewImage(imageUrl)}
                      />
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Preview Dialog */}
      <Dialog
        open={!!previewImage}
        onOpenChange={() => setPreviewImage(undefined)}
      >
        <DialogContent className="max-w-5xl">
          <DialogTitle>Preview Document</DialogTitle>

          {previewImage && (
            <img
              src={previewImage}
              className="w-full max-h-[80vh] object-contain"
              alt="preview"
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
