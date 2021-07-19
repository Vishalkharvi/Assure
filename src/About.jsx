import React from 'react';
import CopyContent from './CopyContent';
import back from './Images/back.jpg';

const About = () => {
    return (
        <>
       <CopyContent title='Kharvi Developers' caption='Mail us @ kharvivishal@gmail.com' buttonCaption='Contact Us' image={back} visit='/contact'  />


        </>
    );

}

export default About;

