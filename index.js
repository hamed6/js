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