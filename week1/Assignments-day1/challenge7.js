// write a function that receives an array&search element as args and returns the index of that 
// search element in the array.it should return "not found" when search element not found.

function search(marks,selement)
{
    for(let i=0;i<marks.length;i++)
    {
        if(marks[i]=== selement)
        {  
            return i;
        }
        
        
    }
    return "not found"
}
let marks=[2,4,5,6,7,8,9];
 let result=search(marks,21);
 console.log(result);
 
 
