//Трансформация строки формата "AaaAaaAaa" в "ааа-ааа-ааа"
export const transformClass = (str: string): string => {
  return str.replace(/(?!^)([A-Z])/g, '-$1').toLowerCase();
};
