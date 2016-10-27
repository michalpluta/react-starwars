import React from 'react';
import {getPerson} from '../requests/Req'

export class UserProfile extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            name: null,
            eyeColor: null,
            height: null
        }
    }

    componentDidMount(){
       getPerson(this.props.params.id).then((results) => {
           this.setState({
               name: results.data.name,
               eyeColor: results.data.eye_color,
               height: results.data.height
           })
       })
    }

    render(){
        return (
            <div>
                <h3>User Profile: {this.state.name}</h3>
                <div>Eye Color: {this.state.eyeColor}</div>
                <div>Height: {this.state.height}cm</div>
            </div>
        );
    }
}

export default UserProfile