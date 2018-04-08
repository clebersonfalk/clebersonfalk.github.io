import React, { Component } from 'react';

class Social extends Component {
    render() {
        return (
            <div className="social">
                <h3 className="hr"><span className="hr">SOCIAL</span></h3>
                <ul className="social-horizontal">
                    <li><a href="mailto:cleberson.falk@gmail.com"><span className="fa fa-envelope"></span></a></li>
                    <li><a href="https://github.com/clebersonfalk"><span className="fa fa-github"></span></a></li>
                    <li><a href="https://twitter.com/ClebersonFalk"><span className="fa fa-twitter"></span></a></li>
                    <li><a href="https://plus.google.com/u/0/+ClebersonFalk"><span className="fa fa-google"></span></a></li>
                    <li><a href="https://www.linkedin.com/in/cleberson-falk/"><span className="fa fa-linkedin"></span></a></li>
                </ul>
            </div>
        );
    }
}

export default Social;