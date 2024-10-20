let ar = [2, 4, 1, 6, 8, 3];


// find sum of index 2 to  4
let range = [2,4]

let sum = 0 

for(let i = 2 ; i <= 4; i++){
    sum+=ar[i]
}

console.log(sum)

//  when we have more then one query, like [[1,4],[2,4], [1,3]] we will use prefix sum

