import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Download, FileText, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { products } from "@/lib/products-data";

interface ProductPageProps {
  params: {
    id: string;
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <Header />

      <div className="container mx-auto px-4 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link href="/" className="hover:text-foreground">
            Inicio
          </Link>
          <span>/</span>
          <Link href="/productos" className="hover:text-foreground">
            Productos
          </Link>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </nav>

        {/* Back button */}
        <Button variant="ghost" asChild className="mb-6">
          <Link href="/productos">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver a productos
          </Link>
        </Button>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="relative aspect-square rounded-lg overflow-hidden">
            {" "}
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain object-center"
            />{" "}
          </div>

          {/* Product Info */}
          <div
            className="relative rounded-xl 
                bg-gray-900/40 backdrop-blur-sm 
                border border-white/10 
                p-6 lg:p-8 
                space-y-8"
          >
            <div className="space-y-2">
              <Badge variant="secondary" className="w-fit">
                {product.line}
              </Badge>

              <h1 className="text-3xl font-bold tracking-tight">
                {product.name}
              </h1>

              <p className="text-sm text-muted-foreground">
                Código: {product.code}
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                Especificaciones
              </h3>

              <div className="grid grid-cols-2 gap-4 text-sm">
                {product.viscosity && (
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Viscosidad</span>
                    <span className="font-medium">{product.viscosity}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tipo</span>
                  <span className="font-medium">{product.type}</span>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                Descripción
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {product.description}
              </p>
            </div>

            {/* Download buttons */}
            <div className="space-y-3">
              <h3 className="font-semibold">Documentos</h3>
              <div className="flex flex-col sm:flex-row gap-3">
                {product.tdsUrl ? (
                  <Button asChild className="flex-1">
                    <a href={product.tdsUrl} download>
                      <FileText className="h-4 w-4 mr-2" />
                      Descargar TDS
                    </a>
                  </Button>
                ) : (
                  <Button disabled className="flex-1">
                    <FileText className="h-4 w-4 mr-2" />
                    TDS no disponible
                  </Button>
                )}
                {product.msdsUrl ? (
                  <Button asChild variant="outline" className="flex-1">
                    <a href={product.msdsUrl} download>
                      <Shield className="h-4 w-4 mr-2" />
                      Descargar MSDS
                    </a>
                  </Button>
                ) : (
                  <Button disabled variant="outline" className="flex-1">
                    <Shield className="h-4 w-4 mr-2" />
                    MSDS no disponible
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Related products or additional info could go here */}
        <Card className="mt-12">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-4">
              ¿Necesitas más información?
            </h3>
            <p className="text-muted-foreground mb-4">
              Contáctanos para obtener asesoramiento personalizado sobre este
              producto o para realizar pedidos al por mayor.
            </p>
            <Button asChild>
              <Link href="/contacto">Contactar</Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </main>
  );
}
