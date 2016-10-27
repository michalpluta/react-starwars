import React from 'react';
import User from './User' 
import {getPeople} from '../requests/Req'  

export default class Users extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            users: []
        }
    }

    componentDidMount(){
        getPeople().then((results) => {
            this.setState({
                users: results.data.results
            })
        })
    }

    render(){

        return(
            <div>
                <h2> Star Wars Characters:</h2>
                {this.state.users.map((user) => {

                    let id = user.url.split('/')[5];

                    return <User name={user.name} id={id} key={user.name} />
                })}                
            </div> 
        );
    }
}


export default Users