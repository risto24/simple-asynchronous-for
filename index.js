const targetArr = ['one', 'two', 'three'];

(async () => {
   for await (num of targetArr) {
     console.log(num);
   }
})();