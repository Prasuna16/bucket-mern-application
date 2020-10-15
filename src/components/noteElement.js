import React from 'react'

class NoteElement extends React.Component {
    render() {
        return (
            <li className="notes-all">
                <div className="note-each">
                    <h4 className="note-head">{this.props.note.heading}</h4>
                    <p className="note-description">{this.props.note.description}</p>
                </div>
            </li>
        )
    }
}

export default NoteElement