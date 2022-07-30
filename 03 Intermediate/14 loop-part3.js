const names = ["youtube", "facebook", "Instagram", "Netflix", "Amazon"]

// for (const n of names) {
//  console.log(n);
// }

const symbols = {
   yt: "youtube",
   ig: "Instagram",
   fb: "Fcacebook",
   lco: "LearnCodeOnline.in" 
}

for(const n in symbols) {
    console.log(`key is ${n} and value is: ${symbols[n]}`);
}


