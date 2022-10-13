export default function groupAnagrams(strs: string[]): string[][] {
  const numberOfLetters = 26;
  let result: string[][] = [[]];

  const generatePrimes = (): number[] => {
    const primes: number[] = [2];
    const addIfPrime = (number: number): void => {
      for (let i = 0; i < primes.length; i += 1) {
        const p = primes[i];
        if (number % p === 0) {
          return;
        }
      }
      primes.push(number);
    };

    let i = 3;
    while (primes.length < numberOfLetters) {
      addIfPrime(i);
      i += 1;
    }

    return primes;
  };

  const primes = generatePrimes();

  const letterToPrime: { [key: string]: number } = {};
  const aCharCode = 'a'.charCodeAt(0);
  for (let i = 0; i < numberOfLetters; i += 1) {
    letterToPrime[String.fromCharCode(aCharCode + i)] = primes[i];
  }

  const wordToNumber: { [key: number]: string[] } = {};

  for (let i = 0; i < strs.length; i += 1) {
    const str = strs[i];
    const number = str
      .split('')
      .reduce((product, char) => product * letterToPrime[char], 1);
    wordToNumber[number] = wordToNumber[number] ?? [];
    wordToNumber[number].push(str);
  }

  result = Array.from(Object.values(wordToNumber));
  return result;
}
