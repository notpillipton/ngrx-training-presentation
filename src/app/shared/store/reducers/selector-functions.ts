// Define functions as constants and export them for use in your selectors
export const is404error = (error: string) => {
  return error === '404';
};
