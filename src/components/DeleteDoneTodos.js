import React from 'react'
import axios from 'axios'
import { Redirect } from 'react-router';

class DeleteAllTodos extends React.Component {
    constructor() {
        super();
        this.state = {
            deleted: false,
        }
    }
    componentDidMount() {
        axios.get('http://localhost:8080/gettodos/')
            .then(response => {
                var todos = response.data;
                for (let i = 0; i < todos.length; i++) {
                    if (todos[i].user_id !== this.props.match.params.user) {
                        continue;
                    }
                    if (todos[i].isDone) {
                        axios.get('http://localhost:8080/delete-todo/' + todos[i]._id)
                        .then(res => {
                            this.setState({
                                deleted: true,
                            })
                        });
                    }
                }
                this.setState({
                    deleted: true,
                })
            })
            .catch((err) => {
                console.log(err);
            })
    }
    render() {
        if (this.state.deleted) {
            return (
                <Redirect to={"/todos/" + this.props.match.params.user} />
            )
        }
        return (
            <div>
                Loading...
            </div>
        )
    }
}

export default DeleteAllTodos