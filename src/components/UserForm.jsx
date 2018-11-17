import React from 'react';
const UserForm = (props) => {
    return ( 
        <form onSubmit={props.getUser}>
            <label>Enter Username of github to fetch number of repo:</label><br /><br />
            <input style={{margin:"0px auto"}} type="text" name="username" /><br /><br />
            <button>Submit</button>
        </form>
     );
}
 
export default UserForm;