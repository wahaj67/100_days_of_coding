// enum vehicleType {
//     car,
//     truck,
//     motorcycle
// }
// console.log(vehicleType.car)

// interface student {
//     name :string;
//     age: number;
//     courses : string[];

// }

// let student : student ={
//     name: "alice",
//     age : 22,
//     courses: ["Math", "science", "history"]
// }

// console.log(student)


type shape = {
    kind: "circle"| "rectangle";
    radius?: number
    width?: number
    height?: number
}

let circle: shape = {
    kind: "circle",
    radius : 5
}

let rectangle : shape = {
    kind : "rectangle",
    width: 10,
    height: 20
}

console.log(circle)
console.log(rectangle)