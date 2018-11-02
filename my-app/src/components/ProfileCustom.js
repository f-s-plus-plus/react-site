import React from 'react';

class ProfileCustom extends React.Component {

sendLink = () => {
  window.location.href = "https://www.britannica.com/biography/Mithradates-VI-Eupator";
}

  render() {
    return(
      <div style={{display: 'flex', flexDirection: "column", alignItems: "center"}}>
        <div className="profile-pic" onClick={this.sendLink}>
        </div>
        <p style={{textAlign: 'center', borderBottom: "4px solid #d76179"}}>
          Who Am I?
        </p>
        <p className="profile-text">
          {this.props.bio}
        </p>
      </div>
    );
  }
};

export default ProfileCustom;
