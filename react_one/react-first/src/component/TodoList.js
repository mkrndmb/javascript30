
import React from 'react';
// import ReactDOM from 'react-dom';


export class TodoList extends React.Component {
    constructor(props) {
        super(props)
       

        this.state = {
        input:'',
        list:[],
        done:true
        };

    }
    handleChange = (e) =>{
        this.setState({
            input:e.target.value
        })
    }
    handleClick = () =>{
        this.setState({
            list:[...this.state.list,this.state.input],
            input:''
        })
    }
    handleClear = () =>{
        this.setState({
            list:[]
        })
    }

    render() {
            function clix(){
                   // console.log("hi",e);
                    this.style.textDecoration="line-through"
            }
            function dblclix(){
                    this.remove()
            }

            let addList=this.state.list.map((item,i)=>{
            return <li key={i} className="cl" style={{listStyle:"none",marginLeft:-35}}>{item}</li>
            })
          const newlist=document.getElementsByClassName('cl')
          let arr=[...newlist]
         // console.log(arr);
          arr.map(e=>e.addEventListener('click',clix))
          arr.map(e=>e.addEventListener('dblclick',dblclix))
          
          
        //    list.forEach(l=>l.addEventListener('click',clix))
            // const list=document.querySelectorAll('listItem')
             // list.forEach((list)=>console.log(list));
              
              //list.addEventListener('click',(e)=>{console.log("hi",e)}))
        return (
            
            <div>
                
                <hr/>
                <h2>To-do List</h2>
                <p>(clk to check task dblclk to delete)</p>
               <div>
                <input onChange={this.handleChange} value={this.state.input} placeholder='what to do today..'/>  
                <button onClick={this.handleClick}>+ Add </button>
                <ul>
                    {/* <li>{this.state.list}</li> */}
                    {addList}
                   
                    
                </ul>
                <div><button onClick={this.handleClear}>Clear</button></div>     
               </div>
                <hr/>   
            </div>
        )


    }
}