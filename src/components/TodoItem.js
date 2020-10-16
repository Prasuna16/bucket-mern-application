import React from "react"
import 'font-awesome/css/font-awesome.min.css';
import { Link } from "react-router-dom";
var FontAwesome = require('react-fontawesome');

class TodoItem extends React.Component {
    constructor() {
        super();
        this.togglePopup = this.togglePopup.bind(this);
    }
    componentDidUpdate() {
        window.location.reload();
    }
    togglePopup(){
        document.getElementById("popup" + this.props.todo._id).classList.toggle("active");
    }
   render() {
        const completedStyle = {
            fontStyle: "italic",
            color: "#cdcdcd",
            textDecoration: "line-through"
        }
        return (
            <div className="todo-item">
            <div>
                <input 
                    type="checkbox" 
                    checked={this.props.todo.isDone ? this.props.todo.isDone : false} 
                    onChange={() => this.props.handleChange(this.props.todo._id)}
                />
                <span style={this.props.todo.isDone ? completedStyle: null}><button className="button-popup" onClick={this.togglePopup}>{this.props.todo.heading}</button></span>
            </div>
            <div>
                <Link to={"/edit-todo/" + this.props.todo._id + "/" + this.props.todo.user_id}><FontAwesome name='pencil' className="todo-edit" style={{color: "gray"}} /></Link>
                <Link to={"/delete-todo/" + this.props.todo._id + "/" + this.props.todo.user_id}><FontAwesome name='trash' style={{color: "red", marginLeft: "20px"}} className="todo-delete" /></Link>
            </div>
            <div className="popup" id={"popup" + this.props.todo._id}>
                <div className="overlay">
                    <div className="content">
                        <div className="close-btn" onClick={this.togglePopup}>&times;</div>
                            <h1 style={{lineHeight: "70px"}}>{this.props.todo.heading}</h1>
                            {this.props.todo.dueDate && <div style={{lineHeight: "40px"}} ><FontAwesome name='bell' /> Due Date: {this.props.todo.dueDate}</div>}
                            {this.props.todo.description && <p><b>Description: </b>{this.props.todo.description}</p>}
                        </div>
                    </div>
                </div>
            </div>
        );
   }
}

export default TodoItem