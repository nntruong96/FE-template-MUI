export const toStringDateTime = (timestamp) => {
  const date = new Date(timestamp * 1000);
  return date.toISOString().split('T')[0] + ' ' + date.toLocaleTimeString();
};

export const toLocaleString = (number = 0) => {
  return Number(number)?.toLocaleString('en-US');
};
