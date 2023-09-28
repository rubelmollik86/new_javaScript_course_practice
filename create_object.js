// create property templete
// adding constructor
// adding function iside a constructor

function Student(name, age, cgpa, language) {
  this.name = name;
  this.age = age;
  this.cgpa = cgpa;
  this.language = language;

  this.display = function () {
    console.log(this.name);
    console.log(this.age);
    console.log(this.cgpa);
    console.log(this.language);
  };
}

let student1 = new Student("Md Rubel Mollik", 27, 3.39, [
  "Bangla",
  "English",
  "Korean",
]);
let student2 = new Student("Rohim Mollik", 30, 2.39, [
  "Hindi",
  "English",
  "Korean",
]);
let student3 = new Student("korim Mollik", 32, 1.39, [
  "Japanish",
  "English",
  "Korean",
]);


student1.display();

student2.display();

student3.display();