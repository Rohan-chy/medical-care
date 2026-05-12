import { DataCardGrid } from './resuable/DataCardGrid';
import { Icons } from '@/shared/icons';

interface Props {
  data: any[];
  admin?: boolean;
}

export function ExperienceTable({ data, admin }: Props) {
  return (
    <DataCardGrid
      title="Experience"
      data={data}
      showDocument={true}
      admin={admin}
      fields={[
        {
          label: 'Institute',
          key: 'instituteName',
          icon: <Icons.Hospital size={14} className="text-muted-foreground" />,
        },
        {
          label: 'Join Date',
          key: 'joinDate',
          icon: <Icons.Calendar size={14} className="text-muted-foreground" />,
        },
        {
          label: 'Completion',
          key: 'completionDate',
          icon: <Icons.Calendar size={14} className="text-muted-foreground" />,
        },
        {
          label: 'Remarks',
          key: 'remarks',
          icon: (
            <Icons.MessageSquare size={14} className="text-muted-foreground" />
          ),
        },
      ]}
    />
  );
}
