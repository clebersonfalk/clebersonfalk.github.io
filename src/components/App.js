import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import me from './../images/me.jpg';
import './App.css';
import Home from './Home';
import About from './About';
import Contact from './Contact';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <header className="App-header">
                        <div className="logo-container">
                            <img src={me} className="App-logo" alt="logo" />
                        </div>
                        <h1 className="App-title">Cleberson Falk</h1>
                        <h2 className="App-subtitle">DESENVOLVEDOR WEB</h2>
                    </header>

                    <nav className="App-nav">
                        <ul>
                            <li><Link to="/">Início</Link></li>
                            <li><Link to="/about">Sobre</Link></li>
                            <li><Link to="/contact">Contato</Link></li>
                        </ul>
                    </nav>

                    <Route exact path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/contact" component={Contact}/>

                    <footer className="App-footer">
                        <div className="container">
                            <a href="https://github.com/clebersonfalk/clebersonfalk.github.io">Código Fonte</a>
                        </div>
                    </footer>
                </div>
            </Router>
        );
    }
}

/* eslint no-eval: 0 */
eval(atob("Y29uc29sZS5sb2coJyVjICAgICAgJywgJ2ZvbnQtc2l6ZTogMjAwcHg7IGJhY2tncm91bmQ6IHVybChodHRwczovL2kuZ2lwaHkuY29tL21lZGlhLzNvcmlOTHgzZFVxRmdWaTg2SS9naXBoeS53ZWJwKSA1MCUgNTAlIG5vLXJlcGVhdDsnKTs="));

export default App;
