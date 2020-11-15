// ***********************************************************************************************************************
// ***********************************************************************************************************************
// ***********************************************************************************************************************
// ***********************************************************************************************************************
// ES6 

// Function inside an object is called method
const ex1={
    name:'my name',
    walk: function(){
        // this is called method 
        // ES5 style
    },
    walkwalk() {
        // ES6 style
    }
}
// ***********************************************************************************************************************
// binding THIS
// with the bind we can set the value of THIS permaenantly so the value of THIS
// will be argument that we are passing.


const ex2={
    name:'my name',
    walk(){
        console.log(this);
    }
};
ex2.walk()
// so if this called then undefined is return because walk is refereing to the THIS
// of global which is windows and in RESTRICTED js it is undefined.
const walk=ex2.walk;
// solution is 
const walk2=ex2.walk.bind(ex2)

// ***********************************************************************************************************************
// Arrow function
const jobs=[
    {id:1, isActive:true},
    {id:2, isActive:true},
    {id:3, isActive:false},
]
const getAciveJobsFirst=jobs.filter(function(job){return job.isActive});
// VS 
const getAciveJobsSecond=jobs.filter(job=>job.isActive)

// ***********************************************************************************************************************
// Array map
const colors=['green', 'white', 'red'];
const getColor=colors.map(color=>`<li>${color}</li>`) // ${} it is called template literal
console.log(getColor);

// ***********************************************************************************************************************
// object destructuring
const address={
    street:'',
    city:'',
    country:''
}
// old way
const newStreet=address.street;
// vs object destructuring way
const {stree:newStreetName}=address;

// ***********************************************************************************************************************
// spread operator 
const first=[1,2,3]
const second=[4,5,6]

const combined = [...first, ...second]

// and to add an itme in middle and in the end
const combined = [...first,3.5 , ...second,7]
// above can be done on object as well 
// ***********************************************************************************************************************
// calss
class Ex3{
    constructor (name){
        this.name=name;
    }
    walk(){
        console.log('walk by',name);
    }
}
const ex3=new Ex3('Fluffy');

// ***********************************************************************************************************************
//Inheritance
class Ex4 extends Ex3 {
    // we need to pass the name to the parent class by SUPER
    // it means that whenever we have constructor in a child class we need to call the constructor of its parent calss 
    constructor(name, age){
        super(name),
        this.age=age;
    }
    run(){
        console.log('run run');
    }
}
const ex4=new Ex4('new name', 34);

// ***********************************************************************************************************************
// Modules
// check help, setting, module files

// Name and Default exports
// with Default : import import ... from ''
// with Named  : import {} from ''
// check Setting.mjs for exmaples 
// ***********************************************************************************************************************




// ***********************************************************************************************************************

// ***********************************************************************************************************************
// ***********************************************************************************************************************
// ***********************************************************************************************************************
// ***********************************************************************************************************************
// OO programming with JS

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
// ***********************************************************************************************************************
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
// ***********************************************************************************************************************
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
// ***********************************************************************************************************************
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

// ***********************************************************************************************************************
// Enumarating properties
// to get loop over properties for an object FOR IN is used
function enumTask(){
    path=10,
    weight=100
    return (path+weight)
}

for(let key in enumTask){
    // to get key , value 
    console.log(key, enumTask[key]); 
}

// to get all the keys
const findKeys=Object.keys(enumTask);

// to check for existance of property or method
if ('path' in enumTask)
    console.log('path is a key');

// ***********************************************************************************************************************
// Abstract: Hide the details , show the essentials
// In order to implement abstarct in js, Private properties and methods are being used
// so instead of defining a property in an object, it should be defined as a local variable 
// scopes are temporarly while closures are stays within the memory. it means that instead of THIS to define a member, we can use variable LET to keep them in closure but hide them 
// from public interface so by '.' members will not dispaly 
// ex.

function abstractClosure(){
    this.colorPublic={first:'red'};
    let colorPrivate={first:'green'}

    this.publicMethod=function(){
        //do somethign
    }
    let privateMethod=function(){
        //do something
    }
}
const absClo=new abstractClosure();
absClo.colorPublic='something new';
absClo.publicMethod;
// ***********************************************************************************************************************
// Getters and Setters 

function defaultLocation(value){
    // to do defautl location
}

Object.defineProperty(this,'defaultLocation',{ 
    get:function(){
        return defaultLocation;
    },
    set: function(value){
        if(!value || value>2)
            throw new Error('value is not defined')
        defaultLocation=value
    }
});

// ***********************************************************************************************************************
// Exercise
function stopwatch(){
    // f free b busy 
    let duration=0;
    let status='f';
    this.start=function(){
        if(status==='f'){
            startTime=new Date()
            status='b'
        }
        else console.log('it is already started');
    }
    this.stop=function(){
        if (status==='b'){
            status='f';
            stopTime=new Date()
            const sec=(stopTime.getTime() - startTime.getTime() )/ 1000;
            duration+=sec;
            console.log(duration);
        }
        else console.log('it is already stoppped');
        
    }
    this.reset=function(){
        startTime=null, stopTime=null,duration=0;
        status='f';
        
        console.log('restart');
    }
}

Object.defineProperty(this,'duration',{
    get:function(){return duration}
})