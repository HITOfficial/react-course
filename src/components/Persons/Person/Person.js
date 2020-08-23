import React, { Component } from 'react';
import classes from './Person.css';

class Person extends Component {
    // static getDerivedStateFromProps(props, state) {
    //     console.log('[Persons.js] getDerivedStateFromProps');
    //     return state;
    // }

    // componentWillReceiveProps(props) {
    //     console.log('persons.js component will rec props', props)
    // }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Persons.js] should comp update')
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, PrevState) {
        console.log('p.js get shot of states')
    }

    componentDidUpdate() {
        console.log('person.js compdidupdate')
    }
    
    render() {
        console.log('[Person.js] render');
        return (
            <div className={classes.Person}>
                <p
                    onClick={this.props.click}>
                    I'm a Person and I am {this.props.name}and I am {this.props.age} years old!
                </p>
                <p>{this.props.children}</p>
                <input
                    type="text"
                    onChange={this.props.change}
                    value={this.props.name}/>
            </div>
        )
    }
};


export default Person;