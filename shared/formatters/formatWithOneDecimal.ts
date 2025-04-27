export const formatWithOneDecimal = (num: number) => {
  const rounded = Math.round(num * 10) / 10;
  return rounded.toString().replace(".", ",");
};
