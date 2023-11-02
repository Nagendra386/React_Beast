import React from 'react'
import { CORE_CONCEPTS } from '../data'
import { CoreComponent } from './CoreComponent'

const CoreConcepts = () => {
  return (
    <>
        <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
      {CORE_CONCEPTS.map((item)=><CoreComponent key={item.title} title={item.title} img={item.image} description={item.description}/>)}
      </ul>
      </section>
      
    </>
  )
}

export default CoreConcepts
