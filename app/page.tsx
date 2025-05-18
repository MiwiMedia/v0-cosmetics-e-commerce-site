import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Heart, Phone, Search, ShoppingBag, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="Glowissime Cosmetics" width={140} height={40} className="h-10 w-auto" />
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Nouveautés
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Visage
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Maquillage
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Soins
            </Link>
            <Link href="#parfums" className="text-sm font-medium hover:underline underline-offset-4">
              Parfums
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <form className="hidden md:flex relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Rechercher..." className="w-[200px] pl-8 rounded-full bg-muted/50" />
            </form>
            <Button variant="ghost" size="icon" className="text-muted-foreground">
              <Heart className="h-5 w-5" />
              <span className="sr-only">Favoris</span>
            </Button>
            <Button variant="ghost" size="icon" className="text-muted-foreground">
              <User className="h-5 w-5" />
              <span className="sr-only">Compte</span>
            </Button>
            <Button variant="ghost" size="icon" className="text-muted-foreground">
              <ShoppingBag className="h-5 w-5" />
              <span className="sr-only">Panier</span>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#FDF6F6]">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Découvrez notre nouvelle collection
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Des produits naturels et efficaces pour sublimer votre beauté au quotidien
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-pink-600 hover:bg-pink-700">
                    Acheter maintenant
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline">En savoir plus</Button>
                </div>
              </div>
              <div className="mx-auto w-full max-w-[500px] lg:max-w-none">
                <Image
                  src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=550&h=550&auto=format&fit=crop"
                  alt="Produits cosmétiques"
                  width={550}
                  height={550}
                  className="mx-auto aspect-square rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Nos catégories</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explorez notre gamme complète de produits de beauté
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
              <Link href="#" className="group relative overflow-hidden rounded-lg">
                <Image
                  src="https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=300&h=300&auto=format&fit=crop"
                  alt="Soins du visage"
                  width={300}
                  height={300}
                  className="aspect-square object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white font-medium text-lg md:text-xl">Visage</span>
                </div>
              </Link>
              <Link href="#" className="group relative overflow-hidden rounded-lg">
                <Image
                  src="https://images.unsplash.com/photo-1596704017254-9a89b0a9f184?q=80&w=300&h=300&auto=format&fit=crop"
                  alt="Maquillage"
                  width={300}
                  height={300}
                  className="aspect-square object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white font-medium text-lg md:text-xl">Maquillage</span>
                </div>
              </Link>
              <Link href="#" className="group relative overflow-hidden rounded-lg">
                <Image
                  src="https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?q=80&w=300&h=300&auto=format&fit=crop"
                  alt="Soins du corps"
                  width={300}
                  height={300}
                  className="aspect-square object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white font-medium text-lg md:text-xl">Corps</span>
                </div>
              </Link>
              <Link href="#parfums" className="group relative overflow-hidden rounded-lg">
                <Image
                  src="https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=300&h=300&auto=format&fit=crop"
                  alt="Parfums"
                  width={300}
                  height={300}
                  className="aspect-square object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white font-medium text-lg md:text-xl">Parfums</span>
                </div>
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#FDF6F6]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Produits populaires</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Découvrez nos produits les plus appréciés par nos clients
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
              <div className="group relative overflow-hidden rounded-lg bg-white p-3 shadow-sm transition-all hover:shadow-md">
                <div className="absolute right-3 top-3 z-10">
                  <Button variant="ghost" size="icon" className="rounded-full bg-white/80 text-pink-600">
                    <Heart className="h-5 w-5" />
                    <span className="sr-only">Ajouter aux favoris</span>
                  </Button>
                </div>
                <Link href="#" className="block overflow-hidden rounded-md">
                  <Image
                    src="https://images.unsplash.com/photo-1611930022073-84f39e064681?q=80&w=300&h=300&auto=format&fit=crop"
                    alt="Sérum Hydratant"
                    width={300}
                    height={300}
                    className="aspect-square object-cover transition-transform group-hover:scale-105"
                  />
                </Link>
                <div className="pt-3">
                  <div className="text-xs text-pink-600 font-medium">NOUVEAU</div>
                  <h3 className="font-medium text-base mt-1">Sérum Hydratant</h3>
                  <div className="flex items-center justify-between mt-2">
                    <span className="font-semibold">39,90 €</span>
                    <Button size="sm" className="bg-pink-600 hover:bg-pink-700">
                      <ShoppingBag className="h-4 w-4 mr-2" />
                      Ajouter
                    </Button>
                  </div>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg bg-white p-3 shadow-sm transition-all hover:shadow-md">
                <div className="absolute right-3 top-3 z-10">
                  <Button variant="ghost" size="icon" className="rounded-full bg-white/80 text-pink-600">
                    <Heart className="h-5 w-5" />
                    <span className="sr-only">Ajouter aux favoris</span>
                  </Button>
                </div>
                <Link href="#" className="block overflow-hidden rounded-md">
                  <Image
                    src="https://images.unsplash.com/photo-1571781926291-c477ebfd024b?q=80&w=300&h=300&auto=format&fit=crop"
                    alt="Crème Anti-âge"
                    width={300}
                    height={300}
                    className="aspect-square object-cover transition-transform group-hover:scale-105"
                  />
                </Link>
                <div className="pt-3">
                  <div className="text-xs text-pink-600 font-medium">POPULAIRE</div>
                  <h3 className="font-medium text-base mt-1">Crème Anti-âge</h3>
                  <div className="flex items-center justify-between mt-2">
                    <span className="font-semibold">49,90 €</span>
                    <Button size="sm" className="bg-pink-600 hover:bg-pink-700">
                      <ShoppingBag className="h-4 w-4 mr-2" />
                      Ajouter
                    </Button>
                  </div>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg bg-white p-3 shadow-sm transition-all hover:shadow-md">
                <div className="absolute right-3 top-3 z-10">
                  <Button variant="ghost" size="icon" className="rounded-full bg-white/80 text-pink-600">
                    <Heart className="h-5 w-5" />
                    <span className="sr-only">Ajouter aux favoris</span>
                  </Button>
                </div>
                <Link href="#" className="block overflow-hidden rounded-md">
                  <Image
                    src="https://images.unsplash.com/photo-1617897903246-719242758050?q=80&w=300&h=300&auto=format&fit=crop"
                    alt="Palette de Maquillage"
                    width={300}
                    height={300}
                    className="aspect-square object-cover transition-transform group-hover:scale-105"
                  />
                </Link>
                <div className="pt-3">
                  <div className="text-xs text-pink-600 font-medium">BEST-SELLER</div>
                  <h3 className="font-medium text-base mt-1">Palette de Maquillage</h3>
                  <div className="flex items-center justify-between mt-2">
                    <span className="font-semibold">45,90 €</span>
                    <Button size="sm" className="bg-pink-600 hover:bg-pink-700">
                      <ShoppingBag className="h-4 w-4 mr-2" />
                      Ajouter
                    </Button>
                  </div>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg bg-white p-3 shadow-sm transition-all hover:shadow-md">
                <div className="absolute right-3 top-3 z-10">
                  <Button variant="ghost" size="icon" className="rounded-full bg-white/80 text-pink-600">
                    <Heart className="h-5 w-5" />
                    <span className="sr-only">Ajouter aux favoris</span>
                  </Button>
                </div>
                <Link href="#" className="block overflow-hidden rounded-md">
                  <Image
                    src="https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=300&h=300&auto=format&fit=crop"
                    alt="Huile Corporelle"
                    width={300}
                    height={300}
                    className="aspect-square object-cover transition-transform group-hover:scale-105"
                  />
                </Link>
                <div className="pt-3">
                  <div className="text-xs text-pink-600 font-medium">NOUVEAU</div>
                  <h3 className="font-medium text-base mt-1">Huile Corporelle</h3>
                  <div className="flex items-center justify-between mt-2">
                    <span className="font-semibold">29,90 €</span>
                    <Button size="sm" className="bg-pink-600 hover:bg-pink-700">
                      <ShoppingBag className="h-4 w-4 mr-2" />
                      Ajouter
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-10">
              <Button variant="outline" className="rounded-full">
                Voir tous les produits
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Section Visage avec 5 photos */}
        <section id="visage" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Soins du Visage</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Découvrez notre gamme complète de soins pour le visage
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-8">
              <div className="group relative overflow-hidden rounded-lg">
                <Image
                  src="https://images.unsplash.com/photo-1556228578-8c89e6adf883?q=80&w=300&h=300&auto=format&fit=crop"
                  alt="Crème hydratante"
                  width={300}
                  height={300}
                  className="aspect-square object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white font-medium text-lg md:text-xl">Crème hydratante</span>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg">
                <Image
                  src="https://images.unsplash.com/photo-1570194065650-d99fb4abbd47?q=80&w=300&h=300&auto=format&fit=crop"
                  alt="Sérum"
                  width={300}
                  height={300}
                  className="aspect-square object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white font-medium text-lg md:text-xl">Sérum</span>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg">
                <Image
                  src="https://images.unsplash.com/photo-1601049676869-702ea24cfd58?q=80&w=300&h=300&auto=format&fit=crop"
                  alt="Masque"
                  width={300}
                  height={300}
                  className="aspect-square object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white font-medium text-lg md:text-xl">Masque</span>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg">
                <Image
                  src="https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=300&h=300&auto=format&fit=crop"
                  alt="Nettoyant"
                  width={300}
                  height={300}
                  className="aspect-square object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white font-medium text-lg md:text-xl">Nettoyant</span>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg">
                <Image
                  src="https://images.unsplash.com/photo-1567721913486-6585f069b332?q=80&w=300&h=300&auto=format&fit=crop"
                  alt="Contour des yeux"
                  width={300}
                  height={300}
                  className="aspect-square object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white font-medium text-lg md:text-xl">Contour des yeux</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Maquillage avec 5 photos */}
        <section id="maquillage" className="w-full py-12 md:py-24 lg:py-32 bg-[#FDF6F6]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Maquillage</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Sublimez votre beauté avec notre collection de maquillage
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-8">
              <div className="group relative overflow-hidden rounded-lg">
                <Image
                  src="https://images.unsplash.com/photo-1631214524020-3c8b8e7edcc7?q=80&w=300&h=300&auto=format&fit=crop"
                  alt="Rouge à lèvres"
                  width={300}
                  height={300}
                  className="aspect-square object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white font-medium text-lg md:text-xl">Rouge à lèvres</span>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg">
                <Image
                  src="https://images.unsplash.com/photo-1596704017254-9a89b0a9f184?q=80&w=300&h=300&auto=format&fit=crop"
                  alt="Fond de teint"
                  width={300}
                  height={300}
                  className="aspect-square object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white font-medium text-lg md:text-xl">Fond de teint</span>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg">
                <Image
                  src="https://images.unsplash.com/photo-1617897903246-719242758050?q=80&w=300&h=300&auto=format&fit=crop"
                  alt="Palette yeux"
                  width={300}
                  height={300}
                  className="aspect-square object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white font-medium text-lg md:text-xl">Palette yeux</span>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg">
                <Image
                  src="https://images.unsplash.com/photo-1599733589046-833caccee512?q=80&w=300&h=300&auto=format&fit=crop"
                  alt="Mascara"
                  width={300}
                  height={300}
                  className="aspect-square object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white font-medium text-lg md:text-xl">Mascara</span>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg">
                <Image
                  src="https://images.unsplash.com/photo-1631214540553-ff044a3ff1d4?q=80&w=300&h=300&auto=format&fit=crop"
                  alt="Blush"
                  width={300}
                  height={300}
                  className="aspect-square object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white font-medium text-lg md:text-xl">Blush</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Soins avec 5 photos */}
        <section id="soins" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Soins du Corps</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Prenez soin de votre corps avec nos produits de qualité
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-8">
              <div className="group relative overflow-hidden rounded-lg">
                <Image
                  src="https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=300&h=300&auto=format&fit=crop"
                  alt="Huile corporelle"
                  width={300}
                  height={300}
                  className="aspect-square object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white font-medium text-lg md:text-xl">Huile corporelle</span>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg">
                <Image
                  src="https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=300&h=300&auto=format&fit=crop"
                  alt="Crème pour le corps"
                  width={300}
                  height={300}
                  className="aspect-square object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white font-medium text-lg md:text-xl">Crème pour le corps</span>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg">
                <Image
                  src="https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=300&h=300&auto=format&fit=crop"
                  alt="Gommage"
                  width={300}
                  height={300}
                  className="aspect-square object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white font-medium text-lg md:text-xl">Gommage</span>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg">
                <Image
                  src="https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=300&h=300&auto=format&fit=crop"
                  alt="Gel douche"
                  width={300}
                  height={300}
                  className="aspect-square object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white font-medium text-lg md:text-xl">Gel douche</span>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg">
                <Image
                  src="https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=300&h=300&auto=format&fit=crop"
                  alt="Lait corporel"
                  width={300}
                  height={300}
                  className="aspect-square object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white font-medium text-lg md:text-xl">Lait corporel</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Parfums avec 5 photos */}
        <section id="parfums" className="w-full py-12 md:py-24 lg:py-32 bg-[#FDF6F6]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Parfums</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Découvrez notre collection de parfums exclusifs
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-8">
              <div className="group relative overflow-hidden rounded-lg">
                <Image
                  src="https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=300&h=300&auto=format&fit=crop"
                  alt="Parfum Floral"
                  width={300}
                  height={300}
                  className="aspect-square object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white font-medium text-lg md:text-xl">Floral</span>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg">
                <Image
                  src="https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=300&h=300&auto=format&fit=crop"
                  alt="Parfum Oriental"
                  width={300}
                  height={300}
                  className="aspect-square object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white font-medium text-lg md:text-xl">Oriental</span>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg">
                <Image
                  src="https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=300&h=300&auto=format&fit=crop"
                  alt="Parfum Boisé"
                  width={300}
                  height={300}
                  className="aspect-square object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white font-medium text-lg md:text-xl">Boisé</span>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg">
                <Image
                  src="https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?q=80&w=300&h=300&auto=format&fit=crop"
                  alt="Parfum Frais"
                  width={300}
                  height={300}
                  className="aspect-square object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white font-medium text-lg md:text-xl">Frais</span>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg">
                <Image
                  src="https://images.unsplash.com/photo-1615529162924-f8605388461d?q=80&w=300&h=300&auto=format&fit=crop"
                  alt="Parfum Fruité"
                  width={300}
                  height={300}
                  className="aspect-square object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white font-medium text-lg md:text-xl">Fruité</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Des ingrédients naturels
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Nos produits proviennent des États-Unis et de la Corée du Sud
                  </p>
                </div>
                <ul className="grid gap-2">
                  <li className="flex items-center gap-2">
                    <div className="rounded-full bg-pink-100 p-1">
                      <ChevronRight className="h-4 w-4 text-pink-600" />
                    </div>
                    <span>Sans parabènes ni sulfates</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="rounded-full bg-pink-100 p-1">
                      <ChevronRight className="h-4 w-4 text-pink-600" />
                    </div>
                    <span>Non testés sur les animaux</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="rounded-full bg-pink-100 p-1">
                      <ChevronRight className="h-4 w-4 text-pink-600" />
                    </div>
                    <span>Emballages recyclables</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="rounded-full bg-pink-100 p-1">
                      <ChevronRight className="h-4 w-4 text-pink-600" />
                    </div>
                    <span>Fabrication française</span>
                  </li>
                </ul>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-pink-600 hover:bg-pink-700">
                    Notre philosophie
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#FDF6F6]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Inscrivez-vous à notre newsletter
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Recevez nos offres exclusives et nos conseils beauté
                </p>
              </div>
              <div className="w-full max-w-md space-y-2">
                <form className="flex space-x-2">
                  <Input
                    className="max-w-lg flex-1"
                    placeholder="Entrez votre email"
                    type="email"
                    autoComplete="email"
                  />
                  <Button type="submit" className="bg-pink-600 hover:bg-pink-700">
                    S'inscrire
                  </Button>
                </form>
                <p className="text-xs text-muted-foreground">
                  En vous inscrivant, vous acceptez notre politique de confidentialité.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row px-4 md:px-6">
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="Glowissime Cosmetics" width={100} height={30} className="h-8 w-auto" />
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              © 2023 Glowissime Cosmetics. Tous droits réservés.
            </p>
          </div>
          <div className="flex gap-4">
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Conditions générales
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Confidentialité
            </Link>
            <Link href="#" className="flex items-center gap-1 text-sm font-medium hover:underline underline-offset-4">
              <Phone className="h-4 w-4" />
              <span>00221 00 00 00 00</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
