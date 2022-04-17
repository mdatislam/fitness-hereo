import React from 'react';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear()
    return (
        <div className='text-center'>
            <small> Copyright &copy;{year} -by Md  Atiqul Islam </small>
        </div>
    );
};

export default Footer;