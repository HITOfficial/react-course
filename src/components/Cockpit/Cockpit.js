import React, { useEffect, useRef, useContext } from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../constext/auth-context';

const cockpit = (props) => {
    const assignedClasses = [];

    const authContext = useContext(AuthContext);
    
    console.log(authContext.authendicated)

    const toggleBtnRef = React.useRef(null);

    useEffect(() => {
        toggleBtnRef.current.click();
        return () => {
            console.log('cockpit removed');
        }
    }, []);

    useEffect(() => {
        console.log('second useEffect');
        return () => {
            console.log('last from second'); // this can clean up all functions 
        };
    });

    let btnClass = '';
    if(props.showPersons){
        btnClass = classes.Red;   
    }

    if(props.persons.length <= 2) {
        assignedClasses.push(classes.red);
    }
    if(props.persons.length <= 1) {
        assignedClasses.push(classes.bold);
    }

    return(
        <div className={classes.Cockpit}>
            <h2>{props.title}</h2>
            <p className={assignedClasses.join(' ')}>This is a paragranpmph</p>
            <button 
                ref={toggleBtnRef}
                className={btnClass}
                onClick={props.toggle}>Switch Name
            </button>
             <button onClick={authContext.login}>Log innnn</button>
        </div> 
    )
};

export default React.memo(cockpit);