import React, { useEffect } from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
    const assignedClasses = [];
    
    useEffect(() => {
        console.log('cockpit XXXXXXXXXXXX');
        const timer = setTimeout(() => {
            console.log('cockpit runned')
        }, 1000)
        return () => {
            clearTimeout(timer);
            console.log('data saved')
                }
    }, [props.persons]); // runs every persons changes

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
                className={btnClass}
                onClick={props.toggle}>Switch Name
            </button>
        </div> 
    )
};

export default React.memo(cockpit);