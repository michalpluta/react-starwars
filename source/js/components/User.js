import React from 'react';
import {Link} from 'react-router'


let User = (props) => {
    return(
        <div className="user">
            <div>Name: <Link to={"/profile/" + props.id}>{props.name}</Link></div>
        </div>
    )     
}

export default User