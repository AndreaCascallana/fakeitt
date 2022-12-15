import { useState } from 'react'

const useTabItems = () => {
  // hacer aquí dos funciones diferentes para el renderizado de los componentes PostCard y CommentAccordion.

  // hacer un condicional donde si el setActiveIndex == 1(posts) se ejecute la fanción de renderizar los post...
  // ... y si el setActiveIndex == 2(comments) se ejecute la función de renderizar los comentarios.

  const [activeIndex, setActiveIndex] = useState(1)
  
  const updateActiveIndex = (index) => {
    setActiveIndex(index);
  }
  return [activeIndex, updateActiveIndex ]
}

export default useTabItems;