const str = 'Flexbe. Frontend. Test. 1234567890.';

const func = (str) => {
    return str.split('').filter((item) => item.charCodeAt(0) % 3 === 0).length;
};

console.log(func(str)); // 9
