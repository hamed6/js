// object literals
const drawing={
    length:5,
    width:5,
    location:{
        x:1,
        y:1
    },
    calulate:function(){
        console.log(this.length*this.width);
    }
}

drawing.calulate();
// 2 ways to create an object 1st factories 2nd constructors

// factory function
 function createCir(radius){
    return{
        radius, // it is ES6 feature, it means radius = radius IF key and value are same.
        draw: function(){
            console.log(`factories ${radius}`);
        }
    }
}

createCir(10).draw();

// constructor function
// constructor names start with Capital + no need to write return as NEW will create an object then return 
function Create(val){
    this.val=val;
    this.width=function(){
        console.log('val',this.val);
    }
}

const newCreate = new Create(20);
newCreate.width();

// Value vs Reference types
// value types(primitive): Number, String, Boolean, Symbol, Undefine, Null
// reference types(Fun and Obj and Arr are all object so reference or object): Function, Object, Array

// here x and y are primitives so the value 10 is stored in y and x=10 wont change it.
// while xx is object and value is stored in memory so xx and yy stored reference to that memory address and yy will
// be changed to 20 after changing the value.
let x=10;
let y=x;
x=20;

let xx={value:10};
let yy=xx;
xx.value=20;

// Properties
// Add a property from an object
function propertyTest(){
    first=1,
    second=function(){
        console.log('something');
    }
}
// add 3rd property 
propertyTest.third=3;

// add 4th property by bracket notation
propertyTest['fourth']=4;
// * there are 2 reasons to use bracket notation: 1st the property name is not determined at the time of creation.
// ex 
let fifth='server will send the data';
propertyTest[fifth]
// 2nd reason is that propery name has special character or space in it
// ex
let sixth='center-location';
propertyTest[sixth]

// Remove a property form an object
// there are some cases we dont want to send all information of an obj to user like credential, then we remove it.

delete propertyTest.sixth; 
// OR
delete propertyTest[fifth];