import React, { Component } from 'react'
import axios from "axios"
import List from "./List"

export default class TodoInput extends Component {
    constructor(props){
        super(props);
        this.state={
            title:"",
            description:"",
            items:[],
            isEditing:false
        }}
        handleChange=(e)=>{
            this.setState({[e.target.name]:e.target.value});
        }

        handleSubmit=(e)=>{
            e.preventDefault();
            let todo={
                title:this.state.title,
                description:this.state.description,
                status:this.state.status
            }
            console.log(todo);
            let todoURL="http://localhost:7000/createTodo";
            axios.post(todoURL,todo)
            .then((res)=>{
                
                const userdata = res.data;
                if(userdata.data!=null && userdata.data!=""){
                    this.componentDidMount();
                    this.setState({title:"",description:""})
                    
                    
                  }
            })
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
    
    render() {
        const {title,description,items,isEditing}=this.state;
        return (

            <div className="card bg-light text-dark">
                <div class="card-body">
        <h1 className="text-left">TODO list</h1>
        <h1 className="text-right">with ReactJS</h1>
            <div className="container">
           
            <button type="button" class="btn btn-success">Create New</button><br/><br/>
            <div className="card bg-light text-dark">
                <div className="card-body">
                <form onSubmit={this.handleSubmit}>
                    <div className="input-group">
                    <input type="text" className="form-control" placeholder="add title"
                    value={title} name="title" onChange={this.handleChange}></input>
                    </div><br></br>
                    
                    <div>
                    <textarea className="form-control" placeholder="decription" rows="3"
                    value={description} name="description" onChange={this.handleChange}></textarea>
                    </div>
                    <button type="submit"  className="btn btn-primary mt-3">ADD ITEM</button>
                </form>
                </div>
                          </div></div></div>
                          
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
                          
                          </div>
        )
    }
}
