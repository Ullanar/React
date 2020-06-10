import React from 'react';

function UserDescription(props) {
    return (
        <div>
            <div className='Description'>
                <ul>
                    <li>Name: {props.userDescription.name}</li>
                    <li>Age: {props.userDescription.age}</li>
                    <li>City: {props.userDescription.city}</li>
                    <li>Education: {props.userDescription.education}</li>
                </ul>
            </div>
        </div>
    );
}

export default UserDescription;
