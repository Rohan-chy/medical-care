import { DataCardGrid } from './resuable/DataCardGrid';
import { Icons } from '@/shared/icons';

export function CertificationTable({
  data,
  admin = false,
}: {
  data: any[];
  admin?: boolean;
}) {
  return (
    <DataCardGrid
      title="Certification"
      data={data}
      showDocument={true}
      admin={admin}
      fields={[
        {
          label: 'Certification',
          key: 'certificationDetails',
          icon: <Icons.Award size={14} className="text-muted-foreground" />,
        },
        {
          label: 'Institute',
          key: 'completedFromInstitute',
          icon: <Icons.Hospital size={14} className="text-muted-foreground" />,
        },
        {
          label: 'Year',
          key: 'completionYear',
          icon: <Icons.Calendar size={14} className="text-muted-foreground" />,
        },
      ]}
    />
  );
}
