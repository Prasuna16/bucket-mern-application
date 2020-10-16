import React from 'react'
import Header from './header'
import axios from 'axios'
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';

class EditNote extends React.Component {
    constructor() {
        super();
        this.state = {
            user_id: null,
            heading: null,
            description: null,
            dueDate: null,
            isDone: false,
            submitted: false,
            notFound: false,
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
        const newNote = {
            user_id: this.props.match.params.user,
            heading: this.state.heading,
            description: this.state.description,
            dueDate: this.state.dueDate,
            isDone: false,
        }
        axios.post('http://localhost:8080/edit-note/' + this.props.match.params.id, newNote)
            .then(res => {
                this.setState({
                    user_id: null,
                    heading: null,
                    description: null,
                    dueDate: null,
                    isDone: false,
                    submitted: true,
                });
            });
    }
    componentDidMount() {
        axios.get('http://localhost:8080/getnotes/')
            .then(response => {
                var notes = response.data
                var flag = false
                for (let i = 0; i < notes.length; i++) {
                    if (notes[i]._id === this.props.match.params.id) {
                        flag = true;
                        this.setState({
                            heading: notes[i].heading,
                            description: notes[i].description,
                        })
                    }
                }
                if (!flag) {
                    this.setState({
                        notFound: true
                    })
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }
    render() {
        if (this.state.notFound || this.state.submitted) {
            return (
                <Redirect to={"/notes/" + this.props.match.params.user} />
            )
        }
        return (
            <div>
                {this.props.match.params.user ? <Header user={this.props.match.params.user} /> : <Header />}
                <form className="todo-box">
                    <h1 style={{lineHeight: "1px"}}>EDIT NOTE</h1><Link to={"/notes/" + this.props.match.params.user}><span style={{fontSize: "15px", fontFamily: "Helvetica", fontWeight: "bold", textDecoration: "underline"}}>Click here to view all notes</span></Link>
                    <h4>Note Heading</h4>
                    <input type="text" name="" className="todo-heading" onChange={this.onHeadingChange} value={this.state.heading} />
                    <h4>Description</h4>
                    <textarea name="" className="todo-area" cols="30" rows="10" onChange={this.onDescChange} value={this.state.description} ></textarea>
                    <button type="submit" className="todo-add-btn" onClick={this.handleSubmit}> Edit Note </button>
                </form>
                <br /><br />
            </div>
        )
    }
}

export default EditNote