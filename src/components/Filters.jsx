import { useState } from 'react'

export default function Filters() {
  const [priceRange, setPriceRange] = useState([0, 1000])
  // const [categories, setCategories] = useState<string[]>([])

  // const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setPriceRange([Number(event.target.value), priceRange[1]])
  // }

  // const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const category = event.target.value
  //   setCategories(
  //     categories.includes(category)
  //       ? categories.filter(c => c !== category)
  //       : [...categories, category]
  //   )
  // }

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Filtros</h2>
      <div className="mb-4">
        <h3 className="font-medium mb-2">Rango de Precio</h3>
        <input
          type="range"
          min="0"
          max="1000"
          value={priceRange[0]}
          onChange={handlePriceChange}
          className="w-full"
        />
        <div className="flex justify-between">
          <span>${priceRange[0]}</span>
          <span>${priceRange[1]}</span>
        </div>
      </div>
      <div>
        <h3 className="font-medium mb-2">Categorías</h3>
        {['Electrónicos', 'Ropa', 'Hogar', 'Deportes'].map(category => (
          <div key={category} className="flex items-center mb-2">
            <input
              type="checkbox"
              id={category}
              value={category}
              checked={categories.includes(category)}
              onChange={handleCategoryChange}
              className="mr-2"
            />
            <label htmlFor={category}>{category}</label>
          </div>
        ))}
      </div>
    </div>
  )
}