
// import styled, {  } from 'styled-components'
import React, { useState } from 'react'



import styled from './index.module.scss'
import Counter from '@/components/counter/Counter';


const Test = () => {



  return (
    <div>
      <div className={styled.testStyle}>
        CSS sass
      </div>

      <Counter/>
    </div>
  )
}





export default Test