import React, { Component } from 'react';

class App extends Component {

    state = { displayBio: false };

    /*constructor(){
        super();

        this.state = { displayBio: false };

        //console.log('Component this', this);

        this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
    }*/

    toggleDisplayBio = () => {
        //console.log('readMore this', this);
        this.setState({ displayBio: !this.state.displayBio });
    }

    render(){

        return(
            <div>
                <h1>Hello!</h1>
                <p>My name is Gustavo. I'm a computer scientist.</p>
                <p>I'm always looking forward to working on challenging projects.</p>
                {
                    this.state.displayBio ? (
                        <div>
                            <p>I live in Sao Paulo, adjusting to new habits.</p>
                            <p>My favourite language is Java, learning JavaScript and React right now.</p>
                            <p>My hobbies are: drawing, writing, coding, and gaming.</p>
                            <button onClick={this.toggleDisplayBio}>Show less</button>
                        </div>
                    ) : (
                        <div>
                            <button onClick={this.toggleDisplayBio}>Read More</button>
                        </div>
                    )
                }
            </div>
        )
    }
}

export default App;