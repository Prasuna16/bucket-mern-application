import React from 'react'
import Header from './header'
import AOS from 'aos'
import "aos/dist/aos.css";
import { Link } from 'react-router-dom';

class Home extends React.Component {
    componentDidMount () {
        AOS.init({
            offset: 200,
            duration: 1500
        });
    }
    render() {
        return (
            <div>
                <Header />
                <header className="main-header">
                    <h1><span>BUCKET</span></h1>-A TODO LIST AND NOTE MAKING APPLICATION
                    <p>Organize your tasks to make them manageable and make note of your important works</p>
                </header>
                <main className="container">
                    <section className="card" data-aos="fade-left">
                        <img src="./images/notes.jpg" alt="" />
                        <div>
                            <h3>Notes</h3>
                            <p>The most effective note-taking skills involve active rather than passive learning. 
                                Studies have found note taking is most effective when notes are organised 
                                and transformed in some way or when a teacher gives examples of good notes.
                                So, what are you waiting for? Start creating your notes!!
                            </p>
                            <Link to="/login"><a href="google.com" className="btn">Create a new note</a></Link>
                        </div>
                    </section>
                    <section className="card" data-aos="fade-right">
                        <img src="./images/todos.jpg" alt="" />
                        <div>
                            <h3>Todos</h3>
                            <p>One of the most important reasons for keeping a to-do list is the organization. 
                                Organizing your tasks with a list can make everything much more manageable and 
                                make you feel grounded. Seeing a clear outline of your completed and uncompleted 
                                tasks will help you feel organized and stay mentally focused.
                                So, what are you waiting for? Start scheduling!!</p>
                                <Link to="/login"><a href="google.com" className="btn">Create your todo list</a></Link>
                        </div>
                    </section>
                    <section className="card" data-aos="fade-left">
                        <img src="./images/me.jpg" alt="" />
                        <div>
                            <h3>About me</h3>
                            <p>Hey. I'm Prasuna!
                                I'm a 19-year-old student, girl programmer, foodie, and a massive
                                proponent of learning. I try to learn new stuff every day.
                                This application is developed to help every one organise their tasks and make
                                them always remind of those.</p>
                            <a href="https://prasuna16.github.io/" target="_blank" className="btn">See my works</a>
                        </div>
                    </section>
                    <section className="card" data-aos="fade-right">
                        <img src="./images/contact.jpg" alt="" />
                        <div>
                            <h3>Contact me</h3>
                            <p>Say Hello.
                            Looking to start a project? Let's talk. Feel free to also drop in your 
                            stories, queries and feedback. <br />
                            </p>
                            <a href="mailto:prasunap2001@gmail.com" className="btn">Drop a mail</a>
                        </div>
                    </section>
                </main>
            </div>
        )
    }
}

export default Home;