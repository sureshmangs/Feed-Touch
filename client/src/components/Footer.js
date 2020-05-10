import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="bg-dark text-center text-white pt-5 pb-5">
                    <p className="mt-5">Made with <i className="fa fa-heart" style={{ color: "#FF5252" }}></i> by <a
                        href="https://github.com/sureshmangs" style={githubLink} target="_blank" rel="noopener noreferrer">Suresh Mangs</a> & <a
                            href="https://github.com/kashyap99saksham" style={githubLink} target="_blank" rel="noopener noreferrer">Saksham Kashyap</a></p>
                </footer>
            </div>
        )
    }
}

const githubLink = {
    textDecoration: 'none',
    color: '#9a9da0'
}

export default Footer