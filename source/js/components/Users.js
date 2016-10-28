import React from 'react';
import User from './User' 
import axios from 'axios';
import {getPeople} from '../requests/Req'  

export default class Users extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            users: []
        }
    }

    componentDidMount(){
        axios.get('http://swapi.co/api/people').then((results) => {
            let all = results.data.results
            // this.setState({
            //     users: results.data.results
            // })
            axios.get('http://swapi.co/api/people/?page=2').then((results) => {
                let all2 = results.data.results
                axios.get('http://swapi.co/api/people/?page=3').then((results) =>{
                    let all3 = results.data.results
                    axios.get('http://swapi.co/api/people/?page=4').then((results) =>{
                        let all4 = results.data.results
                        axios.get('http://swapi.co/api/people/?page=5').then((results) =>{
                            let all5 = results.data.results

                            let con = all.concat(all2, all3, all4, all5);
                            this.setState({
                                users: con
                            })                         
                        })
                    })
                })
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