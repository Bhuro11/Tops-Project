export const ValidateForm = (data) => {
  for (const key in data) {
    if (data.hasOwnProperty(key) && data[key] === "") {
      return true;
    }
  }
  return false;
};
