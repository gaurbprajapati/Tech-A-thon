import React from 'react';
import './../resources/authentication.css'
function DefaultLayout(props) {
    return (
        <div className='layout'>
            <div className='header'>
                <h1>Gaurav CV</h1>
            </div>
            <div className='content'>
                {props.children}
            </div>
        </div >
    )
}

export default DefaultLayout