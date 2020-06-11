import React, { Component } from 'react';
import Menu from './assets/menu.svg'

class Mobilenav extends Component {
    render() {
        return (
            <div>
                <img className="dropdown menu"src = { Menu } alt='menu'/>
            </div>
        );
    }
}

export default Mobilenav;