import React from 'react';

const Tag = ({ tag, bgColor = 'black', color= 'white' }) => <span style={{ backgroundColor: bgColor, color: color, padding: '.2rem' }}>{tag}</span>

export default Tag;
