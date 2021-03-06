// 1 -----------------------------
// function log(message){
//     console.log(message);
// }
// var message = "Hello world";
// log(message);
// 2 -----------------------------
// let a;
// a = 1;
// console.log(a);
// a = 'abc';
// console.log(a);
// 3 -----------------------------
// let a: number;
// let b: boolean;
// let c: string;
// let d: any;
// let e: number[] = [1,2,3];
// let f: any[] = [1, true, 'a', false];
// const ColorRed = 0;
// const ColorGreen = 2;
// const ColorBue = 2;
// enum Color { Red = 0, Green = 1, Blue = 2, Purple = 3 };
// let backgroundColor = Color.Red;
// 4 -----------------------------
// let message;
// message = 'abc';
// let endsWithC = (<string>message).endsWith('c');
// let alternativeWay = (message as string).endsWith('c');
// 5 -----------------------------/
/*
Instead declare the function like this:
    let doLog = function(message){
        console.log(message);
    }
You can define it like (with TypeScript):
*/
// let doLog = (message) => { console.log(message); }
// OR let doLog = message => { console.log(message); }
// ENCAPSULATION
// 6 -----------------------------/
// let drawPoint = (x,y, a, b, c, d, e) => {}
// let drawPoint = (point) => {
//     // ...
// }
// drawPoint({
//     x: 1,
//     y: 2
// })
// 7 -----------------------------/
// let drawPoint = (point { x: number, y: number }) => {
//     // ...
// }
// drawPoint({
//     x: 1,
//     y: 2
// })
// 8 -----------------------------/
// interface Point {
//     x: number,
//     y: number
// }
// let drawPoint = (point: Point) => {
//     // ...
// }
// drawPoint({
//     x: 1,
//     y: 2
// })
// Class: group variables (or properties) and function (or methods) that are highly related
// 8 -----------------------------/
// class Point {
//     x: number;
//     y: number;
//     constructor(x?: number, y?: number){
//         this.x = x;
//         this.y = y;
//     }
//     draw () {
//         console.log('X: ' + this.x + ', Y: ' + this.y);
//     }
//     getDistance(another: Point){ 
//         // ...
//     }
//     // setX(x: number){
//     //     this.x = x;
//     // }
//     // setY(y: number){
//     //     this.y = y;
//     // }
//     // setValueForProperties(x: number, y: number){
//     //     this.x = x;
//     //     this.y = y;
//     // }
// }
// let point = new Point();
// // point.setX(1);
// // point.setY(2);
// // point.setValueForProperties(1, 2);
// point.draw();
// 9 -----------------------------/
// class Point{
//     constructor ( private x?: number, private y?: number ){
//         this.x = x;
//         this.y = y;
//     }
//     draw () {
//         console.log('X: ' + this.x + ', Y: ' + this.y);
//     }
// }
// let point = new Point (2, 3);
// point.draw();
// 10. TEST DATA TYPE -----------------------------/
// enum Color {
//     Red,
//     Green,
//     Blue,
//   }
//   let c: Color = Color.Green;
//   console.log(c);
// 11. TEST DATA TYPE -----------------------------/
var Lever;
(function (Lever) {
    Lever[Lever["EASY"] = 0] = "EASY";
    Lever[Lever["MEDIUM"] = 1] = "MEDIUM";
    Lever[Lever["HARD"] = 2] = "HARD";
})(Lever || (Lever = {}));
var myLever = Lever.MEDIUM;
var anotherPeopleLever = Lever.HARD;
console.log(myLever, anotherPeopleLever);
