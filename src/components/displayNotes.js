import React from 'react'
import Header from './header'
import NoteElement from './noteElement'
import axios from 'axios'
import { Link } from 'react-router-dom';

class DisplayNotes extends React.Component {
    constructor() {
        super();
        this.empty = true;
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
            if (note.user_id !== this.props.match.params.user) return null;
            this.empty = false;
            return <NoteElement key={note._id} note={note} />
        })
    }
    render() {
        return (
            <div>
                {this.props.match.params.user ? <Header user={this.props.match.params.user} /> : <Header />}
                <center><Link to={"/createnote/" + this.props.match.params.user}><button className="bttn" style={{fontSize: "20px", fontFamily: "Helvetica", fontWeight: "bold", marginTop: "0px", marginBottom: "0px", padding: "6px 18px" }}>+ADD A NEW NOTE</button></Link></center>
                <br />
                <ul className="notes-all">
                    {this.notesList()}
                    {this.empty && <img src={require('./empty.png')} style={{width: "450px", height: "350px"}} alt="" />}
                </ul>
            </div>
        )
    }
}

export default DisplayNotes