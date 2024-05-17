// Creating a polyfill involves writing code that provides modern functionality on older browsers that do not support it natively. Essentially, 
// it's a way to "fill in" missing features with JavaScript, allowing developers to use newer web technologies while maintaining compatibility with older environments.

let name = {
    firstname: "Shwethaa",
    lastname: "S"
  }
  
  let printName = function (hometown, state, country) {
    console.log(this.firstname + " " + this.lastname + " , " + hometown + ", " + state + ", " + country);
  }
  
  let printMyName = printName.bind(name, "Chennai", "Tamil Nadu");
  printMyName( "India");
  
//   Function.prototype.mybind = function(...args){
//     let obj = this,
//       params = args.slice(1);
//     return function (...args2) {
//       obj.apply(args[0], [...params, ...args2]);
//     }
//   }

    Function.prototype.mybind = function(context, ...bindArgs) {
        let func = this;
        return function(...callArgs) {
        return func.apply(context, [...bindArgs, ...callArgs]);
        };
    };
  
  let printMyName2 = printName.mybind(name, "Chennai", "Tamil Nadu","Hello");
  printMyName2( "India","Yes");

//   let printName = function(hometown, state, country, greeting, extra) {
//     console.log(this.firstname + " " + this.lastname + " , " + hometown + ", " + state + ", " + country + ", " + greeting + ", " + extra);
// };

