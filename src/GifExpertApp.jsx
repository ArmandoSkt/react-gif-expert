
import { useState } from 'react'
import { AddCategory, GifGrid } from './components'

export const GitExpertApp = () => {

  //Estado de las categorias
  const [categories, setCategories] = useState(["One punch"])

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories(cats => [newCategory, ...cats])
  }

  return (
    <>
      <h1>GitExpertApp</h1>
      <AddCategory
        onNewCategory={onAddCategory}
      />
      {
        categories.map(category =>
        (
          <GifGrid key={category} category={category} />
        ))
      }
    </>
  )
}
