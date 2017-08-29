import React, { Component } from 'react';

const magicbutton = ({
    title,
    handleClick
}) => (
    <button onclick={handleClick}>{title}</button>
);

// const logIt = (e) => {
//     e.preventDefault();
//     console.log('The button got pressed');
// };

export default magicbutton;