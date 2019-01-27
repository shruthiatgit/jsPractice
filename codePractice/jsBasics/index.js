console.log('Hello!')
function Circle(radius){
    console.log('this',this)
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}
const anotherCircle = new Circle(1);