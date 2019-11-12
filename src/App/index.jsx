import React, { useState } from 'react'
import Logo from 'Components/Logo'
import TextField from 'Components/TextField'

const App = () => {
  const [keyword, setKeyword] = useState('')

  const handleChange = value => {
    setKeyword(value)
  }

  return (
    <div className="container">
      <div className="grid grid-33">
        <Logo width="120px" />
        <TextField
          value={keyword}
          handleChange={e => {
            handleChange(e.target.value)
          }}
        />
      </div>
      <div className="grid grid-66">
        <hr></hr>
      </div>
    </div>
  )
}

export default App
