// const user = ["juhi", 3, "admin"];
// // var role = user[2];
// // var name = user[0];

// var [name, courseCount, role] = user;


// console.log(role);

const myUser = {
name : "juhi",
courseCount : 5,
role: "admin",
};

console.log(myUser.courseCount);

const{ name, courseCount, role} = myUser;
console.log(role);
