import React,{ Component } from 'react';
import './App.css';

class App extends Component{
  constructor(props){
    super(props)
    this.state={
      name:"",
      password:"",
    }
  }

  valid(item,type)
  {
    let itemValue= item.target.value;
    switch(type)
    {
      case "name":{
        if(itemValue.length<4)
        {
          item.target.style.color="red";
          this.setState({name:itemValue})
        }
        else{
          item.target.style.color="";
          this.setState({name:itemValue})
        }
      }
      case "password":{
        if(itemValue.length<4)
        {
          item.target.style.color="red";
          this.setState({name:itemValue})
        }
        else{
          item.target.style.color="";
          this.setState({name:itemValue})
        }
      }
    }
  }
  submit()
  {
    let obj ={}
    obj.name = this.state.name;
    obj.password = this.state.password;
    console.warn("submit data",obj)
  }

  render(){
    return(
      <div>
        <h1>Reactjs Form Submission</h1>
        <input type="text" placeholder="Enter Name" onChange={(item)=>this.valid(item,"name")}/>
        <br/>
        <input type="password" placeholder="Enter Password" onChange={(item)=> this.valid(item,"password")}/>
        <br/>
        <button onClick={()=>this.submit()}>Submit</button>
      </div>
    );
  }
}

export default App;
