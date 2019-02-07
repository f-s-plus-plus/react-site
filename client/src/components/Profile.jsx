import React from 'react';

//for the profile icon and description
class Profile extends React.Component {

    render() {
        return(
        <div className="profile-box">
            <div className="profile-pic" />
            <p className='underline-text'>
                Who Am I?
            </p>
            <p className="profile-text">
                {this.props.bio}
            </p>
            <br />
      </div>
    );
  }
}

export default Profile;
