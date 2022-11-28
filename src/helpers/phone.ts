export const getPrefixFromPhoneNumber = (phone: string): string => {
  if (phone.startsWith("1")) return "1";

  return phone.slice(0, 2);
};
