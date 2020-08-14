import React from 'react';

function UserDescription(props) {
    debugger
    return (
        <div>
            <div className='Description'>
                <ul>
                    <li>Name: {props.userData.fullName}</li>
                    <li>About Me: {props.userData.aboutMe}</li>
                    {/*<li>City: {props.userDescription.city}</li>*/}
                    {/*<li>Education: {props.userDescription.education}</li>*/}
                </ul>
            </div>
        </div>
    );
}

export default UserDescription;
