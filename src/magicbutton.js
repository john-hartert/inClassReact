import React, { Component } from 'react';

const Magicbutton = ({
    title,
    handleClick
}) => (
    <button onClick={handleClick}>{title}</button>
);

// const logIt = (e) => {
//     e.preventDefault();
//     console.log('The button got pressed');
// };

export default Magicbutton;