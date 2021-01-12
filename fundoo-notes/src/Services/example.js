let readline = require('readline-sync')

let arr=[]
for(i=0;i<=10;i++){
let input = readline.question("enter the no");
arr[i]=input;

}
console.log(arr)
//let arr=["1" , "2" , "3 " , "4" ,"5" ,"7","8","9"];

function swipe (l){
    let  temp=0 , temp2=0;
           // let output = console.log("find the no that user want"+arr[i])
              let k=l; 
              if(k != 0){ 
            temp= arr[k];
            temp2=arr[arr.length-(k+1)];
            arr[k]=temp2;
            arr[arr.length-(k+1)]=temp
            //console.log(arr[k]);                    
              }
        console.log(arr);         
}

let k = readline.question("enter the user index wants to swipe ")
swipe(k);
    console.log(arr.length);


   

