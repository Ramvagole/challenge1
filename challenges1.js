function combiningArray(){
    const fruits = ["apple", "banana", "orange"];
    const vegetables = ["carrot", "broccoli", "spinach"];
    console.log([...fruits, ...vegetables]);
}
function cloningObject(){
    const person = { name: "John", age: 30, address: "123 Main St" };
    const PersonCopy={...person};
    console.log(PersonCopy);
}
function mergingObjects(student,course){
    let studentWithCourse={...student,...course};
    console.log(studentWithCourse);
}
function combiningNestedArrays(array1,array2){
    let combinedArray=[...array1,...array2];
    console.log(combinedArray);
}
const student = { name: "Alice", age: 20 };
const course = { courseName: "Math", teacher: "Mr. Smith" };
const array1 = [
    [1, 2],
    [3, 4],
    [5, 6],
  ];
  const array2 = [
    [7, 8],
    [9, 10],
    [11, 12],
  ];
combiningArray();
cloningObject();
mergingObjects(student,course);
combiningNestedArrays(array1,array2);