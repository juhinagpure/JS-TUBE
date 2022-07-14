// user is only allowed to make a purchase when he is:
//logged in
//email verified
//cardInfo - Valid
// If any one is missing , stop purchase

var isLoggedIn = true;
var isEmailVerified = true;
var cardInfo =  true;

// if(isLoggedIn){
//     console.log("Logged IN Success");
//     if(isEmailVerified){
//         console.log("Email is verified");
//         if(cardInfo){
//             console.log("you can make a purchase");
//         }
//     }
// }

if(isLoggedIn && isEmailVerified && cardInfo) {
    console.log("Allow user to make a purchase");
}else{
    console.log("you are NOT allowed to do that");
}


