
//import something from somelibary
import {Component} from 'react';




export  class App2 extends Component {// Exporting as Named Export
    //1. Property
    x={  //Declerattion
        name:'',
        surname:'',
        addr:'',
    }
   
   
    //2. constructor
    constructor(){
        super();
            //To initialize the data members i.e properties
        this.x.name='Naznin';
        this.state = {
            fullname:'Anil DOllor'
        }
    
    }

    //3. Method
    render(){
        console.log(this);
        console.log('state ',this.state.fullname);
        console.log(this.props.name.name);
        console.log(this.props.name.surname);
        console.log(this.props.name.addr);
        return <h1>App2 compoent {this.x.name} {this.props.name.name} {this.props.name.surname} {this.props.name.addr}</h1>
    }
    
}