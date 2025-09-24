import { useState } from 'react'
import reactLogo from './assets/react.svg'
import blue from '../public/blue.png'
import red from '../public/red.png'
import yellow from '../public/yellow.png'


function App() {

 const [cl,setCl] = useState(yellow);
  return (
    <>
    <div className="img-container" style={
      
      {position:"flex",
        
      }
      }>
      <img src={cl} alt="" style={{width:"100px",position:"flex", justifyContent:"center"}} />
    </div>
    <div className="btn-container">
      <button onClick={()=>setCl(yellow)}>Yellow</button>
      <button onClick={()=>setCl(blue)}>Blue</button>
      <button onClick={()=>setCl(red)}>Red</button>
    </div>
    </>
  )
}

export default App
