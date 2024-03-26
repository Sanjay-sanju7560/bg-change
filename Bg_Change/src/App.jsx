import './App.css'
import { Button } from 'react-bootstrap';
import React, { useState } from 'react';

function App()  {
  const [backgroundColor, setBackgroundColor] = useState('blue');
  const changeColor = () => {
     
      const blue = '#0000ff'
  
     
      setBackgroundColor(blue);
    };


    const changeColor2 = () => {
     
      const green = '#00cc00'
  
     
      setBackgroundColor(green);
    };


    const changeColor3 = () => {
     
      const yellow = 'yellow'
  

      setBackgroundColor(yellow);
    };

    
    const changeColor4 = () => {
     
      const red = '#ff0000'
  
     
      setBackgroundColor(red);
    };
  
  
 
  return (
    <>
      <div  style={{backgroundColor,width:'100%',height:'750px'}} className=" text-center" >
          <h1 className='mb-5' style={{marginTop:'200px'}}> Backgroung Color Change </h1>
             <Button onClick={changeColor} variant="primary">BLUE</Button>{' '}
             <Button onClick={changeColor2}  variant="success">GREEN</Button>{' '}
             <Button onClick={changeColor3}  variant="warning">YELLOW</Button>{' '}
             <Button onClick={changeColor4}  variant="danger">RED</Button>{' '}
      </div>
    </>
  )
}

export default App
