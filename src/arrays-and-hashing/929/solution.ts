export default function numUniqueEmails(emails: string[]): number {
  const uniqueEmails = new Set();
  emails.forEach((email) => {
    let local = email.split('@')[0];
    const domain = email.split('@')[1];
    local = local.split('+')[0].replace(/[.]/g, '');
    uniqueEmails.add(`${local}@${domain}`);
  });
  return uniqueEmails.size;
}
