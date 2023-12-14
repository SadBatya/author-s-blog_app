export const generateDate = () =>
  new Date(Math.random() * 10000000000 + 1999999999)
    .toISOString()
    .substring(0, 16)
    .replace('T', ' ');
