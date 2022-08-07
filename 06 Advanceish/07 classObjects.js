import User from "./06 classjs";

// const User = require("./06 classjs.js");


const juhi = new User("juhi", "juhinagpure143@gmail.com")

console.log(juhi.getInfo());
juhi.enrollCourse("React Bootcamp");
juhi.enrollCourse("Angular Bootcamp");

console.log(juhi.getCourseList());

let courses = juhi.getCourseList()


courses.forEach(c => console.log(c));