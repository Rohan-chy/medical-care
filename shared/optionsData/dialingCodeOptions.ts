type dialingCode = {
  dialingCode: string;
  code: string;
};

export const dialingCodeOptions = (dialingCode: dialingCode[] = []) => [
  { label: 'Select', value: '' },
  ...dialingCode?.map((item) => ({
    label: `( ${item.code} ) ${item.dialingCode}`,
    value: item.dialingCode,
  })),
];
