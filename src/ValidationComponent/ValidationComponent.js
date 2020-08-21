import React from 'react'

const ValidationComponent = (props) => {
    const resultHandler = (length) => {
        if(length < 4){
            return 'text is to short';
        } else if (length > 8) {
            return 'text is to long';
        } else {
            return 'text is fine';
        }
      }

    return(
        <div>
            {resultHandler(props.length)}
            </div>
    )
}

export {ValidationComponent}