function miniMaxSum(arr) {
    // Write your code here
    arr.sort((a, b)=>{return a-b;});
    let sum=0;
    arr.forEach( (e) => {
        sum += e;
    });

    console.log((sum - arr[arr.length-1])+" "+(sum-arr[0]));
}

let arr = [501893267, 649027153, 379408215, 452968170, 487530619];

miniMaxSum(arr);