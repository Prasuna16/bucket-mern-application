import React from 'react'
import axios from 'axios'
import { Redirect } from 'react-router';

class DeleteTodo extends React.Component {
    constructor() {
        super();
        this.state = {
            deleted: false,
        }
    }
    componentDidMount() {
        axios.get('http://localhost:8080/delete-todo/' + this.props.match.params.id)
            .then(res => {
                this.setState({
                    deleted: true,
                })
            });
    }
    render() {
        if (this.state.deleted) {
            return (
                <Redirect to="/todos" />
            )
        }
        return (
            <div>
                Loading...
            </div>
        )
    }
}

export default DeleteTodo