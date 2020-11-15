import {Document} from './help.mjs';


export  class Setting extends Document{ 
    constructor(device, security){
        super(device),
        this.security=security,
        console.log('constructor log......');
    }
    fixSecurity(){
        // pass the security param
        console.log('action from settting...');
    }
}

// ***********************************************************************************************************************
// example for Name exports
export function resetFactory(){

}


// example of Default exports
export default class Ema{
    // to be done
}