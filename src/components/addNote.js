import React from 'react'
import Header from './header'
import axios from 'axios'
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';

class CreateNote extends React.Component {
    constructor() {
        super();
        this.state = {
            heading: null,
            description: null,
            submitted: false,
        }
        this.onHeadingChange = this.onHeadingChange.bind(this);
        this.onDescChange = this.onDescChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    onHeadingChange(e) {
        this.setState({
            heading: e.target.value
        })
    }
    onDescChange(e) {
        this.setState({
            description: e.target.value
        })
    }
    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state);
        if (!this.state.heading) {
            console.log("error - heading empty");
            return;
        }
        const newNote = {
            heading: this.state.heading,
            description: this.state.description,
        }
        axios.post('http://localhost:8080/addnote', newNote)
            .then(res => {
                console.log(res.data)
                this.setState({
                    heading: null,
                    description: null,
                    submitted: true,
                });
            });
    }
    render() {
        if (this.state.submitted) {
            return (
                <Redirect to="/notes" />
            )
        }
        return (
            <div>
                <Header />
                <form className="note-box">
                    <h1 style={{lineHeight: "1px"}}>CREATE NEW NOTE</h1><Link to="/notes"><span style={{fontSize: "15px", fontFamily: "Helvetica", fontWeight: "bold", textDecoration: "underline"}}>Click here to view all notes</span></Link>
                    <h4>Title of your note</h4>
                    <input type="text" name="" className="note-heading" onChange={this.onHeadingChange} />
                    <h4>Description</h4>
                    <textarea name="" className="note-area" cols="30" rows="10" onChange={this.onDescChange}></textarea>
                    <button type="submit" className="todo-add-btn" onClick={this.handleSubmit}> Add Note </button>
                </form>
            </div>
        )
    }
}

export default CreateNote