import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function CatalogoPage() {
  const productos = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    nombre: `Producto ${i + 1}`,
    precio: Math.floor(Math.random() * 100) + 10,
    descripcion: `Descripción breve del producto ${i + 1}`
  }))

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Catálogo de Productos</h1>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Ordenar por" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="precio-asc">Precio: Menor a Mayor</SelectItem>
            <SelectItem value="precio-desc">Precio: Mayor a Menor</SelectItem>
            <SelectItem value="nombre">Nombre</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {productos.map((producto) => (
          <Card key={producto.id}>
            <CardHeader>
              <CardTitle>{producto.nombre}</CardTitle>
            </CardHeader>
            <CardContent>
              <img src={`/placeholder.svg?height=200&width=200&text=${producto.nombre}`} alt={producto.nombre} className="w-full h-48 object-cover mb-4" />
              <p className="text-gray-600">{producto.descripcion}</p>
              <p className="text-lg font-semibold mt-2">${producto.precio}</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Añadir al carrito</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}