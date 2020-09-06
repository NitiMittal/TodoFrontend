import React, { Component } from 'react'
import axios from "axios"

export default class List extends Component {
    constructor(props){
        super(props);
        this.state={
            items:[],
           
            
        }
       
      
    }
     
  
    componentDidMount() {
        let alltodosURL="http://localhost:7000/getAllTodos";
        axios
                .get(alltodosURL)
                .then((items)=>this.setState({ 'items':items.data.data}))
           .catch(err=>{
            console.log(err);
        });
        
      
      }
      DeleteItem(_id){
        
        if(window.confirm("Are you sure you want to delete this todo item?"))
        {
          axios.delete(`http://localhost:7000/todo/${_id}`, {
      
            "headers": {
              "content-type": "application/json"
            }
          })
          
          .then(res=>{this.componentDidMount();})
          .catch(err => {
              console.log(err);
            });
      }}

    
      render(){
        const { items,isEditing }=this.state
          return (
            
            <div>
            {items.map( (item, key) => {
               return (
               <div>
                  
                  <h4>{ item.title}</h4>
                  <p>{ item.description}</p>
                  <button type="submit" className="btn btn-warning btn-lg">Edit</button>
                  <button type="submit" className="btn btn-danger btn-lg" onClick={()=>this.DeleteItem(item._id)}>Delete</button><br/><br/><br/><br/>
                  </div>
              )
             })}
          </div>
           
          );
        }
                
    }
    