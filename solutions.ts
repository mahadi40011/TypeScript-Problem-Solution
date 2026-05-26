// Solution no 1
const filterEvenNumbers = (array: number[]): number[] => {
  return array.filter((num) => num % 2 === 0);
};
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));

// Solution no 2
const reverseString = (str: string): string => {
  return str.split("").reverse().join("");
};
console.log(reverseString("typescript"));

// Solution no 3
type StringOrNumber = string | number;
const checkType = (input: StringOrNumber): "String" | "Number" => {
  if (typeof input === "string") return "String";
  else return "Number";
};
console.log(checkType("Hello"));

// Solution no 4
const user = { id: 1, name: "John Doe", age: 21 };
const getProperty = <T, K extends keyof T>(obj: T, key: K): T[K] => {
  return obj[key];
};
console.log(getProperty(user, "name"));

// Solution no 5
interface Book {
  title: string;
  author: string;
  publishedYear: number;
}
interface BookWithReadStatus extends Book {
  isRead: boolean;
}
const toggleReadStatus = (input: Book): BookWithReadStatus => {
  return {
    ...input,
    isRead: true,
  };
};
const myBook = {
  title: "TypeScript Guide",
  author: "Jane Doe",
  publishedYear: 2024,
};
console.log(toggleReadStatus(myBook));

// Solution no 6
class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
class Student extends Person {
  grade: string;
  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }
  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}
const student = new Student("Alice", 20, "A");
console.log(student.getDetails());

// Solution no 7
const getIntersection = (arr1: number[], arr2: number[]): number[] => {
  return arr1.filter((num) => arr2.includes(num));
};
console.log(getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));
