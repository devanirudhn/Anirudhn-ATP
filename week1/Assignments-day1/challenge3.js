// finding the sum of marks in a given array
let marks=[90,78,65,98]
let sum=0;
let ite;
let smallest=marks[0];
for( ite=0;ite<marks.length;ite++)
{
     sum=sum+marks[ite];
    let smallest=marks[0];
    if(marks[ite]<smallest)
    {
        smallest=marks[ite];
        console.log(smallest);
        
    }
    

}
console.log(sum);

