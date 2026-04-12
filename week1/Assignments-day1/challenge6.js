// write a function that receives an array as arg and return their sum
function ArgAsPara(marks)

{
    let sum=0;
    for(let i=0;i<marks.length;i++)
    {
        sum=sum+marks[i];
    }
    return sum;


}
let marks=[1,2,3,4,5,6];
let result= ArgAsPara(marks)
console.log(result);
