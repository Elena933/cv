import React from 'react';
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
const HeaderSocial = () => {
    return (
        <div className='header_social'>
            <a href='https://www.linkedin.com/in/olena-kryvonis-973b95208/' target='_blank'><BsLinkedin/></a>
            <a href='https://github.com/Elena933' target='_blank'><FaGithub/></a>

        </div>
    );
};

export default HeaderSocial;
