function range(start,end,step=1){
    let array = [];
    if(step>0){
        for(let i=start;i<=end;i+=step){
        array.push(i);
        }

    }
    else{
        for(let i=start;i>=end;i+=step){
        array.push(i);
        }    
    }
    return array;

}

function sum(num){
    let total=0;
    for(let number of num){
        total+=number;
    }
    return total;
}

console.log(range(1,10));
console.log(range(5,2,-1));
console.log(sum(range(1,10)));