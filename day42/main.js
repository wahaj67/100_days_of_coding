const persons = {
    name: "Wahaj",
    getName() {
        return this.name;
    },
};
console.log(persons.getName());
const rectangle = {
    width: 20,
    height: 30,
    calculateArea() {
        return this.width * this.height;
    }
};
console.log(rectangle.calculateArea());
const obj = {
    property: "value",
    outerMethod() {
        console.log(this.property);
        const inneMethod = () => {
            console.log(this.property);
        };
        inneMethod();
    }
};
obj.outerMethod();
export {};
