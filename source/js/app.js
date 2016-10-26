import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

export default class App extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            users: []
        }
    }

    componentDidMount(){
        axios.get('http://swapi.co/api/people').then((results) => {
            this.setState({
                users: results.data.results
            })
        })
    }

    render(){

        return(
            <div>
                <h1> Star Wars Characters:</h1>
                {this.state.users.map((user) => {
                    return <User name={user.name} key={user.name} />
                })}                
            </div> 
        );
    }
}

let User = (props) => {
    return(
        <div className="user">
            <div>Name: {props.name}</div>
        </div>
    )     
}


ReactDOM.render(<App />, document.getElementById('app'));

