import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import './style.css'

class App extends Component {
    render(){
        return(
            <React.Fragment>
                <img src="/images/ironhack-logo.svg"></img>
                <h1>Say hello to ReactJS</h1>
            </React.Fragment>
        )
    }
}


ReactDOM.render(<App />, document.querySelector('#myApp'))