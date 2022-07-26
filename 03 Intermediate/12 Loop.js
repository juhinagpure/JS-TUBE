// for(let i = 0; i < 10; i++ ){
//     console.log(i);
// }

const myStates = [
"Rajasthan", 
"Delhi", 
"Tamil Nadu",
1974,
"Assam", 
"Maharashtra",
];

for(let i =0; i<= myStates.length; i++){
 if(typeof myStates[i] !== "string") continue;
 console.log(myStates[i]);
    
}