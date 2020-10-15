import React from 'react'
import Header from './header'
import AOS from 'aos'
import "aos/dist/aos.css";

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
                            <a href="google.com" className="btn">Create a new note</a>
                        </div>
                    </section>
                </main>
            </div>
        )
    }
}

export default Home;