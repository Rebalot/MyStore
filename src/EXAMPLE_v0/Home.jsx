import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="space-y-8">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">Bienvenido a MiTienda</h1>
        <p className="text-xl text-gray-600 mb-6">Descubre nuestros productos increíbles</p>
        <Button size="lg">
          <Link href="/catalogo">Ver catálogo</Link>
        </Button>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-4">Productos destacados</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <Card key={i}>
              <CardHeader>
                <CardTitle>Producto {i}</CardTitle>
              </CardHeader>
              <CardContent>
                <img src={`/placeholder.svg?height=200&width=200&text=Producto ${i}`} alt={`Producto ${i}`} className="w-full h-48 object-cover mb-4" />
                <p className="text-gray-600">Descripción breve del producto {i}</p>
              </CardContent>
              <CardFooter>
                <Button>Ver detalles</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}