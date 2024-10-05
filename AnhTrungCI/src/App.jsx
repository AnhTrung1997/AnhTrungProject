import { useState } from 'react'
import Top from './lesson03/Top/Top'
import Bottom from './lesson03/Bottom/Bottom'
import PageItem from './lesson03/PageItem/PageItem'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Top />
      <Bottom /> */}
      <PageItem />
    </>
  )
}

export default App
