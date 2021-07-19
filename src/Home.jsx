import React from 'react';
import { NavLink } from 'react-router-dom';
import background from './Images/background.png';
import CopyContent from './CopyContent';

const Home = () => {
    return (
<>
  <CopyContent title='Lets Build and Contribute to future' caption='Future needs us!' buttonCaption='Lets Go!' visit='/service' image={background} />

</>
    );

}

export default Home;