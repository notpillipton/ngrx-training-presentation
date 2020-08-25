// Define functions as constants and export them for use in your selectors
export const is404error = (error: string): boolean => {
  return (error.indexOf('404') > 0);
};
