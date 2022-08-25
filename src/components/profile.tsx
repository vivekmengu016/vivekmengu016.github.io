import React from "react";
import avatar from '../assets/avatar.svg';
import Resume from '../static/my_resume.pdf';

const Profile = () => {

    const downloadResume = () => {
        // using Java Script method to get PDF file
        fetch(Resume).then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Vivek Mengu Resume.pdf';
                alink.click();
            })
        })
    }

    return (
        <div className="profile">
            <div className="profile-details">
                <div className="avatar">
                    <img src={avatar} alt="profile" />
                </div>
                <div className="info">
                    <h2>Vivek Mengu</h2>
                    <p>I'm Application Engineer at <a href="https://contentstack.com" target="_blank">Contentstack</a>, Mumbai - India</p>
                </div>
            </div>
            <div className="profile-actions">
                <button onClick={downloadResume} >Download Resume <ion-icon name="arrow-down-circle"></ion-icon></button>
            </div>
        </div>
    )
}

export default Profile;