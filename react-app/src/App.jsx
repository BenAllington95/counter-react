import { useState } from 'react'
import './index.css'


function App() {
  const [count, setCount] = useState(0)
  const [theme, setTheme] = useState(false)

  function handleCountClick(e) {
    const idClick = e.target.id

    if (idClick === "increment") {
      setCount(count + 1)
    } else if (idClick === "decrement") {
      setCount(count - 1)
    } else if (idClick === "reset") {
      setCount(0)
    }
  }

  function handleThemeClick() {
    setTheme(prevTheme => !prevTheme)
  }



  const iconStyle = {
      pointerEvents: "none",
  }

  return (
    <div className={theme === false ? "App dark" : "App light"}>

      <div onClick={handleThemeClick} className="theme-btn">
        <ion-icon name={theme === false ? "moon" : "sunny"} style={iconStyle}></ion-icon>
      </div>

      <div className="main">

        <h1 >{count}</h1>

        <div className='buttons'>

          <div onClick={handleCountClick} id="decrement" className='circle circle-red'>
            <ion-icon name="remove-outline" style={iconStyle}></ion-icon>
          </div>

          <div onClick={handleCountClick} id="reset" className='reset'>Reset</div>

          <div onClick={handleCountClick} id="increment" className='circle circle-green'>
            <ion-icon name="add-outline" style={iconStyle}></ion-icon>
          </div> 

        </div>

      </div>
        
    </div>
  )
}

export default App
