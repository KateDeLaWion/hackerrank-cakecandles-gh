
let n=4;
let ar=[3,2,1,3];
let tallest=[];

for (let i=0; i<n; i++){
    num=ar[i];
    let shorter=0;

    for (let j=0; j<n; j++){
        if (num < ar[j]){
            shorter += 1;
        }
    }
    if (shorter == 0){
        tallest.push(num);
    }
}
let numTallest = tallest.length;
console.log(numTallest);
