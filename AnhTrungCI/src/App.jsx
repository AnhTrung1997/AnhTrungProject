import { useState } from 'react'
import Top from './lesson03/Top/Top'
import Bottom from './lesson03/Bottom/Bottom'
import PageItem from './lesson03/PageItem/PageItem'


function App() {
  const [check, letCheck] = useState(0)
  return (
    <>
      {(check == 0) && <> <Top /> <Bottom /> </>}
      {(check == 1) && <PageItem />}
    </>
  )
}

export default App
