export const validateEmail = (email: string): boolean => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

export const validatePhoneNumber = (phone: string): boolean => {
  const re = /^\d{9}$/;
  return re.test(phone);
};
