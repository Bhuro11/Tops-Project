export const validatePassword = (input) => {
  const regex = /^(?=.*[A-Za-z])(?=.*\d).{7,}$/;
  return regex.test(input);
};
