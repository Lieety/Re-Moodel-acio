export function isValidMail(mail: string): boolean {
  const emailRegex = /\S+@\S+\.\S+/;
  return emailRegex.test(mail);
}
