import React, { Component } from 'react';
import PropTypes, { number } from 'prop-types'
import classes from './Person.css';
import Aux from '../../../hoc/Auxyliary';
import withClass from '../../../hoc/withClass';
import AuthContext from '../../../constext/auth-context';

class Person extends Component {
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext; // taking data from React.createContext.Provider as an object

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
    
    componentDidMount() {
        // this.inputElement.focus();
        this.inputElementRef.current.focus();
        console.log(this.context.authendicated);
    }
    
    render() {
        console.log('[Person.js] render');
        return (
            <Aux>
                {this.context.authendicated ? <p>Authendicated!</p> : <p>please log in</p>}
    
                <p
                    onClick={this.props.click}>
                    I'm a Person and I am {this.props.name}and I am {this.props.age} years old!
                </p>
                <p>{this.props.children}</p>
                <input
                    type="text"
                    // ref={(inputEl) => {this.inputElement = inputEl}}
                    ref={this.inputElementRef}
                    onChange={this.props.change}
                    value={this.props.name}
                />
            </Aux>
        );
    }
};

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    change: PropTypes.func //usefull when u code with others it declate whih type of should values be
};

export default withClass(Person, classes.Person);