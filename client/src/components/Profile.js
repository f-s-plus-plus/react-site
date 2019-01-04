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
            <p style={{textAlign: 'center', borderBottom: "4px solid #d76179"}}>
                Who Am I?
            </p>
            <p className="profile-text">
                {this.props.bio}
            </p>
      </div>
    );
  }
}

export default Profile;
