console.log(this);

var user = {
    firstName: "juhi",
    courseCount: 4,
    getCourseCount: function(){
        console.log("LINE 7", this); 
        function sayHello(){
         console.log("Hello");
        console.log("LINE 10");
      
        }
     sayHello()
        },    
    };

    user.getCourseCount();





    