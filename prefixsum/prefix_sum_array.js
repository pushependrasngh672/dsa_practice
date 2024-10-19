let ar = [2,4,1,6,8,3];
let pSum = [...ar]
for(let i =1; i < ar.length ; i++){
    pSum[i] += pSum[i - 1]

}

console.log("pSum:", pSum)