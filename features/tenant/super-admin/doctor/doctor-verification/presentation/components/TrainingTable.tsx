import { DataCardGrid } from './resuable/DataCardGrid';
import { Icons } from '@/shared/icons';

interface Props {
  data: any[];
  admin?: boolean;
}

export function TrainingTable({ data, admin }: Props) {
  return (
    <DataCardGrid
      title="Training"
      data={data}
      showDocument={true}
      admin={admin}
      fields={[
        {
          label: 'Training',
          key: 'trainingTitle',
          icon: <Icons.Book size={14} className="text-muted-foreground" />,
        },
        {
          label: 'Institute',
          key: 'completedFromInstitute',
          icon: <Icons.Hospital size={14} className="text-muted-foreground" />,
        },
        {
          label: 'Duration',
          render: (item) =>
            item.durationInMonths ? `${item.durationInMonths} months` : '—',
          icon: <Icons.Clock size={14} className="text-muted-foreground" />,
        },
        {
          label: 'Year',
          key: 'yearOfCompletion',
          icon: <Icons.Calendar size={14} className="text-muted-foreground" />,
        },
      ]}
    />
  );
}
