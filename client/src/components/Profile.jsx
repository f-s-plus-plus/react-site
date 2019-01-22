import React from 'react';

//for the profile icon and description
class Profile extends React.Component {

    //link for the profile icon
    sendLink = () => {
        window.location.href = "https://www.britannica.com/biography/Mithradates-VI-Eupator";
    };

    render() {
        return(
        <div className="profile-box">
            <div className="profile-pic" onClick={this.sendLink} />
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