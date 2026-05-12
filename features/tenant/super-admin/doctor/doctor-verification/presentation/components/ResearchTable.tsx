import { DataCardGrid } from './resuable/DataCardGrid';
import { Icons } from '@/shared/icons';

interface Props {
  data: any[];
  admin?: boolean;
}

export function ResearchTable({ data, admin }: Props) {
  return (
    <DataCardGrid
      title="Research"
      data={data}
      showDocument={true}
      admin={admin}
      fields={[
        {
          label: 'Research Title',
          key: 'researchTitle',
          icon: <Icons.Book size={14} className="text-muted-foreground" />,
        },
        {
          label: 'Year',
          key: 'yearOfCompletion',
          icon: <Icons.Calendar size={14} className="text-muted-foreground" />,
        },
        {
          label: 'Outcome',
          key: 'researchOutcome',
          icon: (
            <Icons.CheckCircle size={14} className="text-muted-foreground" />
          ),
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
