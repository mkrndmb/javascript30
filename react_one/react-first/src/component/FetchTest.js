
import React from 'react';
// import ReactDOM from 'react-dom';


export class FetchTest extends React.Component {
    constructor(props) {
        super(props)
       

        this.state = {
            
        loading:true,
        person:null
            
        };

    }

   async componentDidMount(){
        try{const response=await fetch('https://api.randomuser.me/')
        const data=await response.json()
   
        this.setState({
            person:data.results[0],
            loading:false
        })
    }
        catch(err){
            console.log("fucked:",err)
        }
        // console.log(data.results[0]);
    }

  
    render() {
        

        return (

            <div>
               <hr/>
               
                {this.state.loading || !this.state.person ? <h1>Loading...</h1> : 
                <div><h1>Name: {this.state.person.name.first} {this.state.person.name.last}</h1>
                <img src={this.state.person.picture.large} alt="fuck"/>
                </div>
                }

            </div>
        )


    }
}