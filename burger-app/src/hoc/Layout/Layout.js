import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    SideDrawerToggleHandler = () => {
       this.setState((prevState) => {
        return {showSideDrawer: !prevState.showSideDrawer}
        })
    }

    SideDrawerCloseHandler = () => {
        this.setState({showSideDrawer: false})
    }
    
    render() {
        return (
            <Aux>
                <Toolbar toggle={this.SideDrawerToggleHandler} />
                <SideDrawer open={this.state.showSideDrawer} closed={this.SideDrawerCloseHandler}/>
                <main className="Content">
                    {this.props.children}
                </main>
            </Aux>
        )
    }
};

export default Layout;