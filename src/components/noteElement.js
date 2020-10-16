import React from 'react'
import 'font-awesome/css/font-awesome.min.css';
import { Link } from "react-router-dom";
var FontAwesome = require('react-fontawesome');

class NoteElement extends React.Component {
    render() {
        return (
            <li className="notes-all">
                <div className="note-each">
                    <div className="note-heading-items">
                        <h4 className="note-head">{this.props.note.heading}</h4>
                        <div>
                            <Link to={"/edit-note/" + this.props.note._id + "/" + this.props.note.user_id}><FontAwesome name='pencil' className="note-edit" style={{color: "gray"}} /></Link>
                            <Link to={"/delete-note/" + this.props.note._id + "/" + this.props.note.user_id}><FontAwesome name='trash' style={{color: "red", marginLeft: "20px"}} className="note-delete" /></Link>
                        </div>
                    </div>
                    <p className="note-description">{this.props.note.description}</p>
                </div>
            </li>
        )
    }
}

export default NoteElement