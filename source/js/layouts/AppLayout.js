import React from 'react';
import {Link} from 'react-router'

export default class AppLayout extends React.Component{

    render(){
        return(
            <div>
                <header>
                    <h1> Welcome to the Star Wars page </h1>
                    <hr />
                </header>
                <main>
                    {this.props.children}
                </main>
                <footer>
                    <hr/>
                    Data served from: SWAPI.com
                </footer>
            </div>
        );
    }
}