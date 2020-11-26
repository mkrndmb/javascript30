
import React from 'react';
// import ReactDOM from 'react-dom';


export class Test extends React.Component {
    constructor(props) {
        super(props)
        let x;

        this.state = {
            name: 0,
            count: 0,
            //x:''
        };

    }

    incre = () => {

        this.setState({

            name: this.state.name + 1
        })
    }
    decre = () => {

        this.setState({

            name: this.state.name - 1
        })
    }
    
    startTime = () => {
        //console.log(this.state.count);
       
       this.x=setInterval(()=>{this.setState({
        count:this.state.count + 1

       });
    // if(this.state.count===495){
    //     clearInterval(this.x)}
    }, 1000);
        
    }
    stopTime =() =>{
        clearInterval(this.x);
        // this.setState({
        //     count:this.state.count
        // })
        
    }

    clearTime = () =>{
        this.setState({
            count: 0
        })
        clearInterval(this.x);
    }
    

    render() {
        

        return (

            <div>
                <div>Counter  {this.state.name}</div>

                <button onClick={this.incre}>inre</button> <button onClick={this.decre}>decre</button>
                        <hr/>
                <div> StopWatch  {this.state.count}  </div>

                <button onClick={this.startTime}>Start</button>  <button onClick={this.stopTime}>Stop</button> <button onClick={this.clearTime}>Clear</button>



            </div>
        )


    }
}