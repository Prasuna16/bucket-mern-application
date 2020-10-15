import React from 'react'
import Header from './header'
import NoteElement from './noteElement'
import axios from 'axios'
import { Link } from 'react-router-dom';

class DisplayNotes extends React.Component {
    constructor() {
        super();
        this.state = {
            notes: [],
        }
    }
    componentDidMount() {
        axios.get('http://localhost:8080/getnotes/')
            .then(response => {
                this.setState({
                    notes: response.data
                })
            })
            .catch((err) => {
                console.log(err);
            })
    }
    notesList() {
        return this.state.notes.map(note => {
            return <NoteElement key={note._id} note={note} />
        })
    }
    render() {
        return (
            <div>
                <Header />
                <center><Link to="/createnote"><span style={{fontSize: "15px", fontFamily: "Helvetica", fontWeight: "bold", textDecoration: "underline"}}>+ADD A NEW NOTE</span></Link></center>
                <br />
                <ul className="notes-all">
                    {this.notesList()}
                </ul>
            </div>
        )
    }
}

export default DisplayNotes