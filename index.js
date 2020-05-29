const targetArr = [1, 2, 3];

const sampleFunc = (value) => {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('Calculating...');
            resolve(value * 2);
        }, 2000);
    })
}

(async () => {
  for await (num of targetArr) {
    const result = await sampleFunc(num);
    console.log(result);
  }
})();