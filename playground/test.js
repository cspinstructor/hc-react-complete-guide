const style = {
  backgroundColor: 'green',
  color: 'white',
  font: 'inherit',
  border: '1  px solid blue',
  padding: '8px',
  cursor: 'pointer',
  ':hover': {
    backgroundColor: 'lightgreen',
    color: 'black'
  }
};

console.log(style[':hover'].backgroundColor);
