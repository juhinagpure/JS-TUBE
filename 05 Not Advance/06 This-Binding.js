const Juhi = {
    firstName : "Juhi",
    lastName : "Nagpure",
    role: "Admin",
    courseCount: 3,
    getInfo: function() {
        console.log(`
        First name is ${this.firstName}
        last name is ${this.lastName}
        Her role is ${this.role}
        and she is studying ${this.courseCount} courses
        `);
    },
};

const dj = {
    firstName : "Rock",
    lastName : "DJ",
    role : "Sub-Admin",
    courseCount: 4,
};

// Juhi.getInfo();
// dj.getInfo();

// var djInfo = Juhi.getInfo.bind(dj);
// djInfo();

Juhi.getInfo.call(dj);