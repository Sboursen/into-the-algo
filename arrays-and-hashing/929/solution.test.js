import numUniqueEmails from './solution';

describe('numUniqueEmails', () => {
  it('should return true if the two strings are isomorphic', () => {
    const emails = ['test.email+alex@leetcode.com', 'test.e.mail+bob.cathy@leetcode.com', 'testemail+david@lee.tcode.com'];

    const result = numUniqueEmails(emails);

    expect(result).toBe(2);
  });

  it('should return false if the two strings are not isomorphic', () => {
    const emails = ['a@leetcode.com', 'b@leetcode.com', 'c@leetcode.com'];

    const result = numUniqueEmails(emails);

    expect(result).toBe(3);
  });
});
