import React, { useState } from 'react';
import styled from 'styled-components';

const StyledPrac1 = () => {
    const [color, setColor] = useState('blue');
    const [font,setFont] = useState('white')

    const onClick = () => {
      color === 'blue' ? setColor('red') : setColor('blue');
      font === 'white' ? setFont('black') : setFont('white');
    };
    
    return (
      <Button color={color} font={font} onClick={onClick}>
        색상변경!
      </Button>
    );
  };
  
  export default StyledPrac1;
  
  const Button = styled.button`
    background-color: ${props => props.color};
    color: ${props => props.font}
  `;