import React from 'react'
import { Link } from 'react-router-dom';

class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            name: null,
            email: null,
            session: false,
        }
    }
    componentDidMount() {
        if (this.props.email && !this.state.session) {
            this.setState({
                name: this.state.name,
                email: this.state.email,
                session: true,
            })
        }
    }
    render () {
        return (
            <div className="grid-container">
                <header className="header">
                    <div className="brand">
                        <Link to="/">bucket</Link>
                    </div>
                    {this.state.session ? <div className="header-links"><Link to="/todos">TODOS</Link><Link to="/notes">NOTES</Link></div> : <div className="header-links"><Link to="/login">Login</Link></div>}
                </header>
            </div>
        );
    }
}

export default Header;