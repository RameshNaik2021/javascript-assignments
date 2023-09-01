const students = [
    { age: 19},
    { age: 22},
    { age: 19},
    { age: 24},
    { age: 20},
    { age: 25},
    { age: 26},
    { age: 24},
    { age: 25},
    { age: 24}
  ];
  const average=students.reduce((sum,student)=>sum+student.age,0)/students.length
 
  console.log(average)