var User = function(firstName , courseCount){
this.firstName = firstName;
this.courseCount = courseCount;
this.getCourseCount = function(){
    console.log(`course count is: ${this.courseCount}`);
  };
};

User.prototype.getFirstName = function() {
  console.log(`your firstName is : ${this.firstName}`);
};

var Juhi = new User("Juhi",2);
Juhi.getCourseCount();
Juhi.getFirstName();

if (Juhi.hasOwnProperty("firstName")) {

}

// console.log(Juhi);

var sam = new User("Sam", 1);
sam.getCourseCount();
sam.getFirstName();
// console.log(sam);

