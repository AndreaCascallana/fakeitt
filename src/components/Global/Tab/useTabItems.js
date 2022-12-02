import { useState } from 'react'

export default () => {
  const [activeIndex, setActiveIndex] = useState()
  
  const updateActiveIndex = (index) => {
    setActiveIndex(index);
  }
  return [activeIndex, updateActiveIndex ]
}