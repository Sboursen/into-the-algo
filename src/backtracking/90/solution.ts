export default function subsetsWithDup(nums: number[]): number[][] {
  const powerSet: number[][] = [];

  const numsDictionary: { [key: number]: number } = {};
  nums.forEach((element) => {
    if (numsDictionary[element] !== undefined) {
      numsDictionary[element] += 1;
    } else {
      numsDictionary[element] = 1;
    }
  });

  const numsKeys = Object.keys(numsDictionary);
  const n = numsKeys.length;

  const findSet = (
    index: number,
    currentSet: number[],
    dict: { [key: number]: number },
  ) => {
    if (index >= n) {
      powerSet.push([...currentSet]);
    } else {
      const currentNumber = Number(numsKeys[index]);

      if (dict[currentNumber] > 0) {
        const count = dict[currentNumber] - 1;
        const newDict = { ...dict };
        newDict[currentNumber] = count;
        findSet(index, [...currentSet, currentNumber], newDict);
      }

      findSet(index + 1, currentSet, dict);
    }
  };

  findSet(0, [], numsDictionary);

  return powerSet;
}
