import React, { Component } from 'react';

const magicbutton = (props) => (
    <button onclick={logIt}>{props.title}</button>
);

const logIt = () => {
    console.log('The button got pressed');
};

export default magicbutton;