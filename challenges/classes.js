// 1. Copy and paste your prototype in here and refactor into class syntax.

// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.


class CuboidMaker{
    constructor(props){
        this.length = props.length
        this.width = props.width
        this.height = props.height
    }
    getVolume(){
        return this.length * this.width * this.height
    }
    getSurfaceArea(){
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height)
    }
}

class CubeMaker extends CuboidMaker{
    constructor(side){
        super({
            length: side,
            width: side,
            height: side
          })
    }
    // s^3
    getVolume(){
        return Math.pow(this.length, 3)
    }
    getSurfaceArea(){
        return Math.pow(this.length, 2) * 6
    }
}

let cube = new CubeMaker(5)

console.log(cube.getVolume(), cube.getSurfaceArea())
  
  