import React from 'react'


const Dynamic = (props) => {
    console.log(props)

    return (
        <div> 
        {props.match.params.id}
        </div>
    )
}

export default Dynamic