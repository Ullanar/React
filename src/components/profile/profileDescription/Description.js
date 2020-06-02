import React from 'react';

function UserDescription(props) {
    return (
        <div>
            <div className='Description'>
                <ul>
                    <li>Name: {props.name}</li>
                    <li>Age: {props.age}</li>
                    <li>City: {props.city}</li>
                    <li>Education: {props.education}</li>
                </ul>
            </div>
        </div>
    );
}

export default UserDescription;