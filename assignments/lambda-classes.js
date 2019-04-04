// CODE here for your Lambda Classes

class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }
    
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}

class Instructor extends Person {
    constructor(instructorAttributes) {
        super(instructorAttributes);

        this.specialty = instructorAttributes.specialty;
        this.favLanguage = instructorAttributes.favLanguage;
        this.catchPhrase = instructorAttributes.catchPhrase;
    }

    demo(subject) {
        return `Today we are learning about ${subject}`;
    }

    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`;
    }
}


class Student extends Person {
    constructor(studentAttributes) {
        super(studentAttributes);

        this.previousBackground = studentAttributes.previousBackground;
        this.className = studentAttributes.className;
        this.favSubjects = studentAttributes.favSubjects;
        this.grade = 88;
    }

    listsSubjects(student) {
        return `${this.favSubjects}`;
    }

    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    }

    sprintChallenge(subject) {
        return `${this.name} has begun a sprint challenge on ${subject}`;
    }

    graduate() {

    }
}


class ProjectManager extends Instructor {
    constructor(instructorAttributes) {
        super(instructorAttributes);

        this.gradClassName = instructorAttributes.gradClassName;
        this.favInstructor = instructorAttributes.favInstructor;
    }

    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!`;
    }

    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}




const jim = new Instructor({
    name: 'Jim',
    location: 'Alabama',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Chicken in the corn!`
  });


  const bob = new Student({
    name: 'Bob',
    location: 'Springfield',
    age: 22,
    gender: 'male',
    favLanguage: 'CSS',
    specialty: 'Back-end',
    catchPhrase: `Said the corn can't grow!`
  });

  console.log(jim.grade(bob, "Holla"));