import React, { Component } from 'react';

class RegularClass {}

class ComponentClass extends Component{}

const regularClassInstance = new RegularClass();
const componentClassInstance = new ComponentClass();

console.log('regularClassInstance', regularClassInstance);
console.log('componentClassInstance', componentClassInstance);

class App extends Component {
    render(){
        return(
            <div>
                <h1>Hello!</h1>
                <p>My name is Gustavo. I'm a computer scientist.</p>
                <p>I'm always looking forward to working on challenging projects.</p>
            </div>
        )
    }
}

export default App;