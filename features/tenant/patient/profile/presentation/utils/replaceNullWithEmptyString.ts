export const replaceNullWithEmptyString = (obj: any): any => {
  if (obj === null) return '';

  if (Array.isArray(obj)) {
    return obj.map(replaceNullWithEmptyString);
  }

  if (typeof obj === 'object' && obj !== null) {
    return Object.fromEntries(
      Object.entries(obj).map(([key, value]) => [
        key,
        replaceNullWithEmptyString(value),
      ])
    );
  }

  return obj;
};
