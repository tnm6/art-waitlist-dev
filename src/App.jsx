import { useState } from 'react'
import './styles/globals.css'
import CommStatusComp from './components/CommStatusComp';
import FormComp from './components/FormComp';


function App() {

  return (
    <>
      <div id = "homepage_sections">
        <section id="status"> <CommStatusComp/> </section>
        <section id="form"> <FormComp/> </section>
        
      </div>
      
    </>
  )
}

export default App
