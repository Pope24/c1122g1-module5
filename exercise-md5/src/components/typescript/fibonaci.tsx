import React from "react";

type Props = {
  num: number;
};

export default function Fibonacci({ num: num }: Props) {
  let countFibonacci = 0;
  const calculateFibonacci: Function = (n: number) => {
    let n1 = 0,
      n2 = 1,
      nextTerm;

    console.log("Fibonacci Series:");

    for (let i = 1; i <= n; i++) {
      countFibonacci += n1;
      nextTerm = n1 + n2;
      n1 = n2;
      n2 = nextTerm;
    }
  };
  calculateFibonacci(num);
  return (
    <div>
      <p>
        Tổng của {num} số fibonacci là: {countFibonacci}
      </p>
    </div>
  );
}
