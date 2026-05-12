import { Icons } from '@/shared/icons';

export const RequestsTab = [
  { title: 'Received', value: 'incoming', icon: Icons.ArrowDownLeft },
  { title: 'Sent', value: 'outgoing', icon: Icons.ArrowUpRight },
  // { title: 'Approved', value: 'approved', icon: Icons.CheckCircle },
];

export const ApprovalStatusTab = [
  { title: 'Pending', value: 'pending', icon: Icons.AlertCircle },
  { title: 'Approved', value: 'approved', icon: Icons.CheckCircle },
];
