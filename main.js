// Write a JavaScript program to create a class called "Person"
//  with properties for name, age and country. 
// Include a method to display the person's details.
//  Create two instances of the 'Person' class and display their details.


class Person{
    constructor(name,age,country){
        this.name=name;
        this.age=age;
        this.country=country;  
    }
    display(){
        console.log(`I am ${this.name},my age is ${this.age},I am from${this.country}`);
    }
}
let a=new Person("john",25,"India");
let b=new Person("anna",26,"India");
a.display();
b.display();
