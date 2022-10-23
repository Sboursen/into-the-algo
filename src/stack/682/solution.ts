export default function calPoints(operations: string[]): number {
  type Operate = (stack: number[], operand?: string) => number[];

  type Operations = { [key: string]: Operate };

  let result: number[] = [];

  const push: Operate = (stack, operand) => [...stack, Number(operand)];

  const sum: Operate = (stack) => [
    ...stack,
    stack[stack.length - 1] + stack[stack.length - 2],
  ];

  const double: Operate = (stack) => [...stack, 2 * stack[stack.length - 1]];

  const invalidate: Operate = (stack) => stack.slice(0, -1);

  const ops: Operations = {
    '+': sum,
    D: double,
    C: invalidate,
  };

  operations.forEach((operation) => {
    if (ops[operation]) result = ops[operation](result);
    else result = push(result, operation);
  });

  return result.reduce((total, number) => total + number, 0);
}
