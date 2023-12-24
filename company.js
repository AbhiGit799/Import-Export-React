//Default export
//Only one default export inside one file. Rest will be named export


// export default class Employee
// {
//   admin() {
//     console.log("Hello Admin!!");
//   }

//   manager() {
//     console.log("Hello Manager!!");
//   }
// }


// class Employee
// {
//   admin() {
//     console.log("Hello Admin!!");
//   }

//   manager() {
//     console.log("Hello Manager!!");
//   }
// }
// export default Employee;


// export default function Project()
// {
//     console.log("Hello from Project()");
// }

// function Project()
// {
//     console.log("Hello from Project()");
// }
// export default Project;



// export variable.
//export default var age = 20;  //Uncaught SyntaxError: Unexpected token 'var
// var age = 20;
// export default age;



//Named export

// export class Student
// {
//     show()
//     {
//         console.log("Student called.");
//     }
// }


// class Student
// {
//     show()
//     {
//         console.log("Student called.");
//     }
// }
// export {Student};  //syntax for named export.



// export class Teacher
// {
//     teachEng()
//     {
//         console.log("Teach English called.");
//     }
// }


// export function fun1()
// {
//     console.log("Hello from fun1()");
// }

// export function fun2()
// {
//     console.log("Hello from fun2()");
// }




// function fun1()
// {
//     console.log("Hello from fun1()");
// }

// function fun2()
// {
//     console.log("Hello from fun2()");
// }

// export {fun1,fun2};




// export let engmark = 75;  // give error in case of default export



// class Animal
// {
//     dog()
//     {
//         console.log("Hello Animal Dog!!");
//     }

// }

// function display()
// {
//     console.log("Hello from display()");
// }

// let sstmark = 85;

// export {Animal,display,sstmark};  //2 ways, either we can make one of all default and rest as named



// console.log("\n");

// export default class ABC
// {
//     abc()
//     {
//         console.log("Hello from ABC");
//     }
// }

// export function def()
// {
//     console.log("Hello from DEF");
// }

// export let ht=15;





// console.log("\n");

// class GHI
// {
//     ghi()
//     {
//         console.log("Hello from GHI");
//     }
// }

// function lmn()
// {
//     console.log("Hello from lmn()");
// }

// let wt = 28;

// export {lmn,wt};
//export default GHI;  // separate line.





// console.log("\n");



class OPQ
{
    opq()
    {
        console.log("Hello from OPQ!!");
    }
} 

function rst()
{
    console.log("Hello from RST()");
}

let we = 32;

export {OPQ,rst,we};

//console.log("\n");

//only one default , it may be class OR function OR variable.



export default function proj(){
    console.log("Proj called !!");
}



