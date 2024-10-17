import { useState } from 'react'
import Top from './lesson03/Top/Top'
import Bottom from './lesson03/Bottom/Bottom'
import PageItem from './lesson03/PageItem/PageItem'

if (JSON.parse(localStorage.getItem('data')) == null) {
  const SetData = []
  localStorage.setItem('data', JSON.stringify(SetData))
}
function App() {

  return (
    <>
      <Top />
      <Bottom />
    </>
  )
}

export default App
