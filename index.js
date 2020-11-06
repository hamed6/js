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