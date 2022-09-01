export const createArray = <T>(length: number, value: T): Array<T> => {
  const arr = new Array<T>(length).fill(value);
  return arr;
};
