export const lcfirst = (str: string) => {
  return str.charAt(0).toLowerCase() + str.slice(1);
};

export const ucfirst = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
