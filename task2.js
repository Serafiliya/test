const input = [-2, 2, 4, 6, 8, 10, 3, 5, 7, 9, -1, -11];

const func = (arr) => {
    const numbersMultiplesOf2 = arr
        .filter((a) => {
            if (a % 2 === 0) return a;
        })
        .sort((a, b) => b - a);

    const numbersNotMultiplesOf2 = arr
        .filter((a) => {
            if (a % 2 !== 0) return a;
        })
        .sort((a, b) => a - b);

    return (arr = numbersMultiplesOf2.concat(numbersNotMultiplesOf2));
};

console.log(func(input)); // [10, 8, 6, 4, 2, -2, -11, -1, 3, 5, 7, 9]
