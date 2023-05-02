import { useState } from 'react'
import { NavBar } from './components/NavBar'
import { Content } from './components/Content'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h1>Marvin's Blog</h1><hr />
          </div>
          <div className="col-12">
            <Content />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
