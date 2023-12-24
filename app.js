//Default import can be called by using any name

//Import class

// import Employee from "./company.js";

// import Emp from "./company.js";

// let x = new Emp();

// x.admin();
// x.manager();



//Import function

//import Project from "./company.js";

//let y = new Project();
// y.Project(); //y.Project is not a function

//Project();



//import variable;

// import age from "./company.js";
// console.log(`Age = ${age}`);




// Named Import

// import { Student,Teacher } from "./company.js";
// let y = new Student();
// let z = new Teacher();
// y.show();
// z.teachEng();


// console.log("\n");

// import { fun1,fun2 } from "./company.js";
// fun1();
// fun2();





// console.log("\n");

// import {engmark} from "./company.js";         //named variable import
// console.log(engmark);


// console.log("\n");



// import { Animal,display,sstmark } from "./company.js";
// let aobj = new Animal();
// aobj.dog();
// display();
// console.log(sstmark);



// console.log("\n");


//mixed

// import ABC,{def,ht} from "./company.js";  //named export comes inside {}

// let bobj = new ABC();
// bobj.abc();

// def();

// console.log(`Height = ${ht}`);




// console.log("\n");




import * as comp from './company.js';

let cojb = new comp.OPQ();

cojb.opq();

comp.rst();

console.log(comp.we);

console.log("\n");

//let dobj = new comp.default();  //for default export we use default keyword in import

// dobj.abc();


comp.default(); // to call default function when we use * in import statement.

