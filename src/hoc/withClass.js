import React from 'react';

const withClass = (WrappedComponent, className) => {
    return props => (
        <div className={className}>
            <WrappedComponent {... props}/>
            {/* this one from upper, makes: props: is a function and also have properties, and in the wrapped commponent we makes an copy, of our's properties ofc, we could use props={props}  */}
        </div>
    )
}

export default withClass;