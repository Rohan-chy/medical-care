'use client';

import { DataCardGrid } from './resuable/DataCardGrid';
import { Icons } from '@/shared/icons';

interface Relative {
  id: string;
  name: string;
  relation: string;
  contactNumber: string;
}

interface Props {
  data: Relative[];
  admin?: boolean;
}

export function RelativeList({ data, admin }: Props) {
  return (
    <DataCardGrid
      title="Relatives"
      data={data}
      showDocument={false} // no document section
      admin={admin}
      fields={[
        {
          label: 'Name',
          icon: <Icons.User size={14} className="text-muted-foreground" />,
          key: 'name',
        },
        {
          label: 'Relationship',
          icon: <Icons.User size={14} className="text-muted-foreground" />,
          key: 'relationship',
        },
        {
          label: 'Contact Number',
          icon: <Icons.Phone size={14} className="text-muted-foreground" />,
          key: 'contactNumber',
        },
      ]}
    />
  );
}
