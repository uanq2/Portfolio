import React from 'react';
import '../../App.css';
import avatar from '../../assets/images/Avatar.png'

function AboutMe() {
    return (
        <>
            <img className='avatar' src={avatar} alt="Avatar"></img>
            <div className='cards'>
                <h1>ABOUT ME</h1>
                <p>By obtaining a Bachelor’s in Graphic Design and a Certificate in Full Stack Web Development, I am able to bring innovative ideas and solutions to design outstanding web sites and computer programs to companies in the technology industry. I possess HTML, CSS, JavaScript and Adobe Design Software knowledge that allowed me to successfully develop a music playlist generator for a project in a team of four and my own portfolio page. I demonstrated quick learning, high attention to detail, teamwork and problem solving skills to execute both of these projects. I am confident and motivated that I can apply all my technical and personal skills in any role as a Graphic Designer and Web Developer to keep growing as a person as well as helping any employer grow.</p>
            </div>
        </>
    );
}

export default AboutMe