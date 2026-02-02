"use client"

import { useState, useMemo, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Search, ChevronRight, ChevronDown, Grid3X3, List, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { 
  categories, 
  products, 
  viscosities,
  getCategoryById,
  getSubcategoryById,
  type Product,
  type Category,
  type Subcategory
} from "@/lib/products-data"

export function Products() {
  const searchParams = useSearchParams()
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null)
  const [selectedSubcategory, setSelectedSubcategory] = useState<Subcategory | null>(null)
  const [selectedViscosities, setSelectedViscosities] = useState<string[]>([])
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [viscosityOpen, setViscosityOpen] = useState(true)
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)

  // Handle URL params on load
  useEffect(() => {
    const categoryId = searchParams.get("category")
    const subcategoryId = searchParams.get("subcategory")
    
    if (categoryId) {
      const category = getCategoryById(categoryId)
      if (category) {
        setSelectedCategory(category)
        
        if (subcategoryId) {
          const subcategory = getSubcategoryById(subcategoryId)
          if (subcategory) {
            setSelectedSubcategory(subcategory)
          }
        }
      }
    }
  }, [searchParams])

  const filteredProducts = useMemo(() => {
    let filtered = products

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(query) ||
        p.code.toLowerCase().includes(query) ||
        p.viscosity?.toLowerCase().includes(query) ||
        p.type.toLowerCase().includes(query) ||
        p.line.toLowerCase().includes(query)
      )
    } else if (selectedSubcategory) {
      filtered = filtered.filter(p => p.subcategoryId === selectedSubcategory.id)
    } else if (selectedCategory) {
      filtered = filtered.filter(p => p.categoryId === selectedCategory.id)
    }

    if (selectedViscosities.length > 0) {
      filtered = filtered.filter(p => p.viscosity && selectedViscosities.includes(p.viscosity))
    }

    return filtered
  }, [searchQuery, selectedCategory, selectedSubcategory, selectedViscosities])

  const availableViscosities = useMemo(() => {
    const viscs = new Set<string>()
    let productsToCheck = products

    if (selectedSubcategory) {
      productsToCheck = products.filter(p => p.subcategoryId === selectedSubcategory.id)
    } else if (selectedCategory) {
      productsToCheck = products.filter(p => p.categoryId === selectedCategory.id)
    }

    productsToCheck.forEach(p => {
      if (p.viscosity) viscs.add(p.viscosity)
    })

    return viscosities.filter(v => viscs.has(v))
  }, [selectedCategory, selectedSubcategory])

  const handleViscosityToggle = (viscosity: string) => {
    setSelectedViscosities(prev =>
      prev.includes(viscosity)
        ? prev.filter(v => v !== viscosity)
        : [...prev, viscosity]
    )
  }

  const handleCategorySelect = (category: Category) => {
    setSelectedCategory(category)
    setSelectedSubcategory(null)
    setSelectedViscosities([])
    setSearchQuery("")
  }

  const handleSubcategorySelect = (subcategory: Subcategory) => {
    const category = getCategoryById(subcategory.categoryId)
    if (category) setSelectedCategory(category)
    setSelectedSubcategory(subcategory)
    setSelectedViscosities([])
    setSearchQuery("")
    setMobileSidebarOpen(false)
  }

  const clearFilters = () => {
    setSelectedCategory(null)
    setSelectedSubcategory(null)
    setSelectedViscosities([])
    setSearchQuery("")
  }

  const Breadcrumb = () => (
    <nav className="flex items-center gap-2 text-sm mb-6 flex-wrap">
      <Link href="/" className="text-[#C21A1A] hover:underline">
        INICIO
      </Link>
      <ChevronRight className="h-4 w-4 text-[#B5B5B5]" />
      <button onClick={clearFilters} className="text-[#C21A1A] hover:underline">
        PRODUCTOS
      </button>
      {selectedCategory && (
        <>
          <ChevronRight className="h-4 w-4 text-[#B5B5B5]" />
          <button 
            onClick={() => { setSelectedSubcategory(null); setSelectedViscosities([]) }}
            className={selectedSubcategory ? "text-[#C21A1A] hover:underline" : "text-[#B5B5B5]"}
          >
            {selectedCategory.name.toUpperCase()}
          </button>
        </>
      )}
      {selectedSubcategory && (
        <>
          <ChevronRight className="h-4 w-4 text-[#B5B5B5]" />
          <span className="text-[#B5B5B5]">{selectedSubcategory.name.toUpperCase()}</span>
        </>
      )}
    </nav>
  )

  const Sidebar = ({ mobile = false }: { mobile?: boolean }) => (
    <div className={mobile ? "p-4" : ""}>
      {/* Viscosity Filter */}
      {availableViscosities.length > 0 && (selectedCategory || selectedSubcategory) && (
        <div className="mb-6">
          <button
            onClick={() => setViscosityOpen(!viscosityOpen)}
            className="flex items-center justify-between w-full py-2 border-b border-[#2F2F2F] text-foreground font-semibold"
          >
            VISCOSIDAD
            <ChevronDown className={`h-5 w-5 transition-transform ${viscosityOpen ? 'rotate-180' : ''}`} />
          </button>
          {viscosityOpen && (
            <div className="mt-3 space-y-2 max-h-64 overflow-y-auto">
              {availableViscosities.map((visc) => {
                const count = products.filter(p => {
                  if (selectedSubcategory) return p.subcategoryId === selectedSubcategory.id && p.viscosity === visc
                  if (selectedCategory) return p.categoryId === selectedCategory.id && p.viscosity === visc
                  return p.viscosity === visc
                }).length
                return (
                  <label key={visc} className="flex items-center gap-2 cursor-pointer group">
                    <Checkbox
                      checked={selectedViscosities.includes(visc)}
                      onCheckedChange={() => handleViscosityToggle(visc)}
                      className="border-[#B5B5B5] data-[state=checked]:bg-[#C21A1A] data-[state=checked]:border-[#C21A1A]"
                    />
                    <span className="text-[#B5B5B5] group-hover:text-foreground">
                      SAE {visc} <span className="text-muted-foreground">({count})</span>
                    </span>
                  </label>
                )
              })}
            </div>
          )}
        </div>
      )}

      {/* Categories */}
      {!selectedCategory && !searchQuery && (
        <div>
          <div className="py-2 border-b border-[#2F2F2F] text-foreground font-semibold mb-2">
            CATEGORIAS
          </div>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategorySelect(cat)}
              className="w-full text-left py-2 text-[#B5B5B5] hover:text-[#C21A1A] transition-colors"
            >
              {cat.name}
            </button>
          ))}
        </div>
      )}

      {/* Subcategories when category selected */}
      {selectedCategory && (
        <div>
          <button
            onClick={clearFilters}
            className="flex items-center gap-2 text-[#C21A1A] hover:underline mb-4"
          >
            <ChevronRight className="h-4 w-4 rotate-180" />
            Volver a categorias
          </button>
          <div className="py-2 border-b border-[#2F2F2F] text-foreground font-semibold mb-2">
            {selectedCategory.name.toUpperCase()}
          </div>
          {selectedCategory.subcategories.map((sub) => (
            <button
              key={sub.id}
              onClick={() => handleSubcategorySelect(sub)}
              className={`w-full text-left py-2 transition-colors underline ${
                selectedSubcategory?.id === sub.id 
                  ? 'text-[#C21A1A]' 
                  : 'text-[#B5B5B5] hover:text-[#C21A1A]'
              }`}
            >
              {sub.name}
            </button>
          ))}
        </div>
      )}
    </div>
  )

  const ProductCard = ({ product }: { product: Product }) => {
    const subcategory = getSubcategoryById(product.subcategoryId)

    if (viewMode === "list") {
      return (
        <div className="bg-card border border-[#2F2F2F] rounded-lg p-4 hover:border-[#C21A1A]/50 transition-colors">
          <div className="flex gap-4">
            <div className="relative w-24 h-24 flex-shrink-0 bg-white rounded">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-contain p-2"
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2 flex-wrap">
                <span className="text-xs px-2 py-1 bg-[#8B7355] text-white font-medium">
                  {subcategory?.name.toUpperCase()}
                </span>
              </div>
              <h4 className="font-bold text-foreground mt-2">
                APOLO <span className="text-[#C21A1A]">{product.line}</span>
              </h4>
              <p className="text-xl font-bold text-foreground">
                {product.viscosity || product.name.split(' ').slice(1).join(' ')}
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                PRODUCTO: {product.code}
              </p>
              <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                {product.description}
              </p>
              <button className="text-[#C21A1A] hover:underline text-sm mt-2 font-medium">
                Ver
              </button>
            </div>
          </div>
        </div>
      )
    }

    return (
      <div className="bg-card border border-[#2F2F2F] rounded-lg overflow-hidden hover:border-[#C21A1A]/50 transition-colors group">
        <div className="border-t-4 border-[#8B7355]" />
        <div className="p-4">
          <span className="inline-block text-xs px-2 py-1 bg-[#8B7355] text-white font-medium mb-3">
            {subcategory?.name.toUpperCase()}
          </span>
          
          <div className="relative w-full h-32 bg-white rounded mb-4">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-contain p-2"
            />
          </div>

          <h4 className="font-bold text-foreground">
            APOLO <span className="text-[#C21A1A]">{product.line}</span>
          </h4>
          <p className="text-lg font-bold text-foreground">
            {product.viscosity || product.name.split(' ').slice(1).join(' ')}
          </p>
          <p className="text-sm text-muted-foreground mt-1">
            PRODUCTO: {product.code}
          </p>
          <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
            {product.description}
          </p>
          <button className="text-[#C21A1A] hover:underline text-sm mt-3 font-medium">
            Ver
          </button>
        </div>
      </div>
    )
  }

  return (
    <section className="py-12 bg-background min-h-screen">
      <div className="container mx-auto px-4">
        {/* Search bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Buscar por nombre, codigo o viscosidad..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value)
                if (e.target.value) {
                  setSelectedCategory(null)
                  setSelectedSubcategory(null)
                }
              }}
              className="pl-12 pr-12 py-6 bg-card border-[#2F2F2F] text-foreground placeholder:text-muted-foreground text-base"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2"
              >
                <X className="h-5 w-5 text-muted-foreground hover:text-foreground" />
              </button>
            )}
          </div>
        </div>

        {/* Breadcrumb */}
        <Breadcrumb />

        {/* Title */}
        {(selectedCategory || selectedSubcategory || searchQuery) && (
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            {searchQuery 
              ? `Resultados para "${searchQuery}"` 
              : selectedCategory?.name.toUpperCase()}
            {selectedSubcategory && !searchQuery && ` - ${selectedSubcategory.name.toUpperCase()}`}
          </h1>
        )}

        {/* Mobile filter button */}
        <div className="lg:hidden mb-4">
          <button
            onClick={() => setMobileSidebarOpen(true)}
            className="flex items-center gap-2 px-4 py-2 bg-[#1C1C1C] border border-[#2F2F2F] rounded text-foreground"
          >
            <List className="h-5 w-5" />
            Filtros
          </button>
        </div>

        {/* Mobile Sidebar */}
        {mobileSidebarOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <div 
              className="absolute inset-0 bg-black/50" 
              onClick={() => setMobileSidebarOpen(false)} 
            />
            <div className="absolute left-0 top-0 bottom-0 w-80 bg-[#1C1C1C] overflow-y-auto">
              <div className="flex items-center justify-between p-4 border-b border-[#2F2F2F]">
                <span className="font-semibold text-foreground">Filtros</span>
                <button onClick={() => setMobileSidebarOpen(false)}>
                  <X className="h-6 w-6 text-foreground" />
                </button>
              </div>
              <Sidebar mobile />
            </div>
          </div>
        )}

        <div className="flex gap-8">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <Sidebar />
          </aside>

          {/* Products grid */}
          <div className="flex-1">
            {/* View toggle and count */}
            <div className="flex items-center justify-between mb-6">
              <span className="text-muted-foreground">
                {filteredProducts.length} producto{filteredProducts.length !== 1 ? 's' : ''}
              </span>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">VER</span>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded ${viewMode === "list" ? 'bg-[#2F2F2F] text-foreground' : 'text-muted-foreground'}`}
                >
                  <List className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded ${viewMode === "grid" ? 'bg-[#2F2F2F] text-foreground' : 'text-muted-foreground'}`}
                >
                  <Grid3X3 className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Category selection if nothing selected */}
            {!selectedCategory && !searchQuery && (
              <div className="grid gap-4">
                <div className="bg-[#2F2F2F]/50 py-3 px-4 border-l-4 border-[#C21A1A]">
                  <h3 className="font-semibold text-foreground">Productos</h3>
                </div>
                <div className="bg-card border border-[#2F2F2F] rounded-lg divide-y divide-[#2F2F2F]">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => handleCategorySelect(category)}
                      className="w-full flex items-center justify-between p-4 hover:bg-[#2F2F2F]/30 transition-colors text-left"
                    >
                      <span className="text-foreground">{category.name}</span>
                      <ChevronRight className="h-5 w-5 text-muted-foreground" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Subcategory selection */}
            {selectedCategory && !selectedSubcategory && !searchQuery && (
              <div className="grid gap-4">
                <div className="bg-[#2F2F2F]/50 py-3 px-4 border-l-4 border-[#C21A1A]">
                  <h3 className="font-semibold text-foreground">{selectedCategory.name}</h3>
                </div>
                <div className="bg-card border border-[#2F2F2F] rounded-lg divide-y divide-[#2F2F2F]">
                  {selectedCategory.subcategories.map((sub) => (
                    <button
                      key={sub.id}
                      onClick={() => handleSubcategorySelect(sub)}
                      className="w-full flex items-center justify-between p-4 hover:bg-[#2F2F2F]/30 transition-colors text-left"
                    >
                      <span className="text-foreground underline">{sub.name}</span>
                      <ChevronRight className="h-5 w-5 text-muted-foreground" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Products display */}
            {(selectedSubcategory || searchQuery) && (
              <>
                {filteredProducts.length > 0 ? (
                  <div className={
                    viewMode === "grid" 
                      ? "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6"
                      : "grid gap-4"
                  }>
                    {filteredProducts.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12 text-muted-foreground">
                    No se encontraron productos.
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
