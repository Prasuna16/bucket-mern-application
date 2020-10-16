import React from 'react'
import axios from 'axios'
import { Redirect } from 'react-router';

class DeleteNote extends React.Component {
    constructor() {
        super();
        this.state = {
            deleted: false,
        }
    }
    componentDidMount() {
        axios.get('http://localhost:8080/delete-note/' + this.props.match.params.id)
            .then(res => {
                this.setState({
                    deleted: true,
                })
            });
    }
    render() {
        if (this.state.deleted) {
            return (
                <Redirect to={"/notes/" + this.props.match.params.user} />
            )
        }
        return (
            <div>
                Loading...
            </div>
        )
    }
}

export default DeleteNote