import React from 'react';

const style ={
  background: '#122343',
  border: '2px solid white',
  fontSize: '30px',
  fontWeight: '80',
  cursor:'pointer',
  outline: 'none',
  color:'white'

}

const Square = ( { value, onClick }) => (
  <button style={style} onClick={onClick}>
    {value}
  </button>
);

export default Square;