export default function subsets(nums: number[]): number[][] {
  
  const n = nums.length;
  const powerSet: number[][] = [];
  
  const findSet = (index: number, currentSet: number[]): void => {
    if (index >= n) {
      powerSet.push([...currentSet]);
    } else {
      console.log(currentSet)
      const currentNumber = nums[index];
      currentSet.push(currentNumber);
      findSet(index + 1, currentSet);
      
      currentSet.pop();
      findSet(index + 1, currentSet);
    }
  }
  
  findSet(0, []);
  
  return powerSet;

}
