let ar = [2,4,1,6,8,3];

let pSum = [...ar]
// let sum = ar[0]
// pSum.push(ar[0])
for(let i =1; i < ar.length ; i++){
    // console.log(ar[i - 1])
    pSum[i] += pSum[i - 1]

}

console.log("pSum:", pSum)