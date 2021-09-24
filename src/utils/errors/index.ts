export const errorHandler = (e: any): string => {
  return typeof e === "object"
    ? e.description
      ? e.description
      : e.message
      ? e.message
      : JSON.stringify(e)
    : typeof e === "string"
    ? e
    : "UNKNOWN ERROR HAS OCCURED";
};
