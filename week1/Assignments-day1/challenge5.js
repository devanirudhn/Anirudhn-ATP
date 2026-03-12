// write a function that receives thre number args and return the big number
function bigNumber (a,b,c)
{
    if(a>b&&a>c)
{
    return a;
    
}
else if (b>c){
    return b;
    }
    else{
        return c;

        
    }
}
 let result=bigNumber(10,20,30);
 console.log(result);
 