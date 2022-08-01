var User = function(firstName , courseCount){
this.firstName = firstName;
this.courseCount = courseCount;
this.getCourseCount = function(){
    console.log(`course count is: ${this.courseCount}`);
  };
};

var Juhi = new User("Juhi",2);
Juhi.getCourseCount()
// console.log(Juhi);

var sam = new User("Sam", 1);

// console.log(sam);
