var User = {
    name: "",
    getUserName: function () {
        console.log(`User nanme is : ${this.name}`);
    },
};

var juhi = Object.create(User);
console.log(juhi);
juhi.name = "Juhi Nagpure";
juhi.getUserName();


var Sam = Object.create(User,{
  name: {value: "Sammy"},
  courseCount: { value: 3 },
});


Sam.getUserName();