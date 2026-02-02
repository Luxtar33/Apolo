"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Search, ChevronDown } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { categories } from "@/lib/products-data";
import { SheetTitle } from "@/components/ui/sheet";

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobileActiveCategory, setMobileActiveCategory] = useState<
    string | null
  >(null);
  const megaMenuRef = useRef<HTMLDivElement>(null);

  const isActive = (path: string) => pathname === path;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        megaMenuRef.current &&
        !megaMenuRef.current.contains(event.target as Node)
      ) {
        setShowMegaMenu(false);
      }
    };

    if (showMegaMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showMegaMenu]);

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top bar */}
      <div className="bg-sidebar border-b border-sidebar-border">
        <div className="container mx-auto flex items-center justify-end gap-4 px-4 py-2">
          <Link
            href="/productos"
            className="hidden sm:flex items-center gap-2 text-sm text-foreground hover:text-accent transition-colors"
          >
            <Search className="h-4 w-4" />
          </Link>
          <Link href="/productos">
            <Button
              size="sm"
              className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-xs px-4"
            >
              ENCUENTRA TU LUBRICANTE
            </Button>
          </Link>
        </div>
      </div>

      {/* Main navigation */}
      <div className="bg-primary">
        <div className="container mx-auto flex h-14 items-center justify-between px-4 lg:px-8">
          <Link href="/" className="flex items-center gap-2">
            <div className=" px-2 py-1 h-10 flex items-center">
              <Image
                src="/images/logoApolo.png"
                alt="Apolo Logo"
                width={50}
                height={24}
                className="object-contain"
              />
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            <Link
              href="/"
              className={`text-sm font-medium transition-colors hover:text-white ${isActive("/") ? "text-white" : "text-white/70"}`}
            >
              INICIO
            </Link>
            <Link
              href="/nosotros"
              className={`text-sm font-medium transition-colors hover:text-white ${isActive("/nosotros") ? "text-white" : "text-white/70"}`}
            >
              NOSOTROS
            </Link>
            <div className="relative">
              <button
                onClick={() => setShowMegaMenu(!showMegaMenu)}
                className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-white ${isActive("/productos") ? "text-white" : "text-white/70"}`}
              >
                PRODUCTOS
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${showMegaMenu ? "rotate-180" : ""}`}
                />
              </button>
            </div>
            <Link
              href="/contacto"
              className={`text-sm font-medium transition-colors hover:text-white ${isActive("/contacto") ? "text-white" : "text-white/70"}`}
            >
              CONTACTO
            </Link>
          </nav>

          {/* Mobile menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/10"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-full sm:w-[320px] bg-muted border-border p-0"
            >
              <SheetTitle className="sr-only">Menú de navegación</SheetTitle>
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 border-b border-border">
                  <div className="bg-background px-3 py-1">
                    <Image
                      src="/images/logoApolo.png"
                      alt="Apolo Logo"
                      width={100}
                      height={30}
                      className="object-contain"
                    />
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(false)}
                    className="text-white hover:bg-white/10"
                  >
                    <X className="h-6 w-6" />
                  </Button>
                </div>

                <div className="flex-1 overflow-y-auto">
                  <Link
                    href="/productos"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center gap-2 m-4 py-3 bg-accent text-accent-foreground font-semibold rounded-full"
                  >
                    ENCUENTRA TU LUBRICANTE
                  </Link>

                  <nav className="flex flex-col">
                    <Link
                      href="/"
                      onClick={() => setIsOpen(false)}
                      className={`px-4 py-4 border-b border-secondary hover:bg-secondary ${isActive("/") ? "text-accent" : "text-white"}`}
                    >
                      Inicio
                    </Link>
                    <Link
                      href="/nosotros"
                      onClick={() => setIsOpen(false)}
                      className={`px-4 py-4 border-b border-secondary hover:bg-secondary ${isActive("/nosotros") ? "text-accent" : "text-white"}`}
                    >
                      Nosotros
                    </Link>

                    {/* Mobile Products Menu */}
                    <div className="border-b border-secondary">
                      <button
                        onClick={() =>
                          setMobileProductsOpen(!mobileProductsOpen)
                        }
                        className={`w-full flex items-center justify-between px-4 py-4 hover:bg-secondary ${isActive("/productos") ? "text-accent" : "text-white"}`}
                      >
                        <span>Productos</span>
                        <ChevronDown
                          className={`h-5 w-5 transition-transform ${mobileProductsOpen ? "rotate-180" : ""}`}
                        />
                      </button>

                      {mobileProductsOpen && (
                        <div className="bg-background">
                          <Link
                            href="/productos"
                            onClick={() => setIsOpen(false)}
                            className="block px-6 py-3 text-accent hover:bg-secondary font-medium"
                          >
                            Ver todos los productos
                          </Link>
                          {categories.map((category) => (
                            <div key={category.id}>
                              <button
                                onClick={() =>
                                  setMobileActiveCategory(
                                    mobileActiveCategory === category.id
                                      ? null
                                      : category.id,
                                  )
                                }
                                className="w-full flex items-center justify-between px-6 py-3 text-white hover:bg-secondary"
                              >
                                <span>{category.name}</span>
                                <ChevronDown
                                  className={`h-4 w-4 transition-transform ${mobileActiveCategory === category.id ? "rotate-180" : ""}`}
                                />
                              </button>

                              {mobileActiveCategory === category.id && (
                                <div className="bg-card">
                                  {category.subcategories.map((sub) => (
                                    <Link
                                      key={sub.id}
                                      href={`/productos?category=${category.id}&subcategory=${sub.id}`}
                                      onClick={() => setIsOpen(false)}
                                      className="block px-8 py-2 text-sm text-muted-foreground hover:text-white hover:bg-secondary"
                                    >
                                      {sub.name}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    <Link
                      href="/contacto"
                      onClick={() => setIsOpen(false)}
                      className={`px-4 py-4 border-b border-secondary hover:bg-secondary ${isActive("/contacto") ? "text-accent" : "text-white"}`}
                    >
                      Contacto
                    </Link>
                  </nav>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Mega Menu - Desktop */}
      {showMegaMenu && (
        <div
          ref={megaMenuRef}
          className="absolute left-0 right-0 bg-white shadow-xl z-50 hidden lg:block"
        >
          <div className="container mx-auto">
            <div className="flex">
              {/* Categories list */}
              <div className="w-64 border-r border-gray-200">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onMouseEnter={() => setActiveCategory(category)}
                    className={`w-full text-left px-4 py-3 flex items-center gap-2 transition-colors ${
                      activeCategory.id === category.id
                        ? "bg-gray-100 text-primary"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    {activeCategory.id === category.id && (
                      <span className="w-2 h-2 rounded-full bg-primary" />
                    )}
                    <span
                      className={
                        activeCategory.id === category.id ? "text-primary" : ""
                      }
                    >
                      {category.name}
                    </span>
                  </button>
                ))}
              </div>

              {/* Subcategories */}
              <div className="flex-1 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-1 bg-primary" />
                  <h3 className="text-xl font-semibold text-gray-900">
                    {activeCategory.name}
                  </h3>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {activeCategory.subcategories.map((sub) => (
                    <Link
                      key={sub.id}
                      href={`/productos?category=${activeCategory.id}&subcategory=${sub.id}`}
                      onClick={() => setShowMegaMenu(false)}
                      className="text-gray-600 hover:text-primary hover:underline py-1"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
