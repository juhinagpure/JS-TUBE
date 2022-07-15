// show user a button ifcatedit he is authenticated,
// other wise show him option to Login/Signup

var authenticated = true;

// if(authenticated){
//     console.log("show signout button");
// } else {
//     console.log("show login option");
// }

authenticated ? console.log("SignOut Button") : console.log("LOGIN");