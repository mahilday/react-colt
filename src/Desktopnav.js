import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { HomeRounded, ExploreRounded, InfoRounded, AccountCircleRounded, PersonAddRounded } from '@material-ui/icons'
import { IconButton } from '@material-ui/core'

class Desktopnav extends Component{
    render(){
        return (
          <ul className="d-flex p-4 list-unstyled ulanime col-6 col-sm-7 text-right">
            <li className="col">
              <Link className="text-white" to="/">
                Home
              </Link>
            </li>
            <li className="col">
              <Link className="text-white" to="/">
                Explore
              </Link>
            </li>
            <li className="col">
              <Link className="text-white" to="/">
                <PersonAddRounded className="mx-3" />
                Register
              </Link>
            </li>
            <li className="col">
              <Link className="text-white" to="/">
                <AccountCircleRounded className="mx-2" />
                Sign-in
              </Link>
            </li>
          </ul>
        );
    }
}

export default Desktopnav;