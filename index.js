class Circle {

    constructor(radius) {
        this.radius = radius
    }
    
    set diameter(diameter) {
        this.radius = diameter / 2
    }

    set circumference(circumference) {
        this.diameter = circumference / Math.PI
    }

    set area(area) {
        this.radius = Math.sqrt(area / Math.PI)
    }

    get diameter() {
        return this.diameter = this.radius * 2
    }

    get circumference() {
        return this.circumference = this.diameter * Math.PI
    }

    get area() {
        return this.area = Math.PI * (this.radius * this.radius)
    }
}

const circle = new Circle(10)

console.log('radius expect 10')
console.log("=>", circle.radius)
console.log('diameter expect 20')
console.log("=>", circle.diameter)
console.log('circle diameter set to 100')
console.log("diameter =>", circle.diameter = 50)
console.log('radius expect 25')
console.log("=>", circle.radius)

