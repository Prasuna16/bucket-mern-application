import React from 'react'
import { Link, Redirect } from 'react-router-dom';
import Header from './header';
import axios from 'axios'

class Signup extends React.Component {
    constructor() {
        super();
        this.state = {
            email: null,
            password: null,
            name: null,
            submitted: false,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleName = this.handleName.bind(this);
        this.handleMail = this.handleMail.bind(this);
    }
    handleMail(e) {
        this.setState({
            email: e.target.value,
        })
    }
    handlePassword(e) {
        this.setState({
            password: e.target.value,
        })
    }
    handleName(e) {
        this.setState({
            name: e.target.value,
        })
    }
    handleSubmit(e) {
        e.preventDefault();
        const user = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
        }
        axios.post('http://localhost:8080/adduser/', user)
            .then(res => {
                console.log(res);
                this.setState({
                    email: null,
                    password: null,
                    name: null,
                    submitted: true,
                })
                this.props.handleSuccessfulAuth(res);
            })
    }
    render() {
        if (this.state.submitted) {
            return (
                <Redirect to="/" />
            )
        }
        return (
            <div>
                <Header />
                <form className="box">
                    <h1>Register</h1>
                    <input type="email" name="" placeholder="Email" onChange={this.handleMail} />
                    <input type="text" name="" placeholder="Username" onChange={this.handleName} />
                    <input type="password" name="" placeholder="Password" onChange={this.handlePassword} />
                    <button type="submit" name="" onClick={this.handleSubmit} className="bttn" >Sign up</button>
                    <p>Already have an account? <Link to="/login">Login</Link></p>
                </form>
            </div>
        )
    }
}

export default Signup