import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ShoppingCart, User } from 'lucide-react'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-primary">
            MiTienda
          </Link>
          <div className="flex items-center space-x-4">
            <Input className="w-64" placeholder="Buscar productos..." />
            <Button variant="outline">
              <ShoppingCart className="mr-2 h-4 w-4" />
              Carrito
            </Button>
            <Button variant="outline">
              <User className="mr-2 h-4 w-4" />
              Cuenta
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>
      <footer className="bg-gray-100">
        <div className="container mx-auto px-4 py-6 text-center text-gray-600">
          © 2024 MiTienda. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  )
}