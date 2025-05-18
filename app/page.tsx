import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Heart, Search, ShoppingBag, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tighter">Glowissime Cosmetics</span>
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
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
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
                  src="/placeholder.svg?height=550&width=550"
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
                  src="/placeholder.svg?height=300&width=300"
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
                  src="/placeholder.svg?height=300&width=300"
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
                  src="/placeholder.svg?height=300&width=300"
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
              <Link href="#" className="group relative overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=300&width=300"
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
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="group relative overflow-hidden rounded-lg bg-white p-3 shadow-sm transition-all hover:shadow-md"
                >
                  <div className="absolute right-3 top-3 z-10">
                    <Button variant="ghost" size="icon" className="rounded-full bg-white/80 text-pink-600">
                      <Heart className="h-5 w-5" />
                      <span className="sr-only">Ajouter aux favoris</span>
                    </Button>
                  </div>
                  <Link href="#" className="block overflow-hidden rounded-md">
                    <Image
                      src="/placeholder.svg?height=300&width=300"
                      alt={`Produit ${item}`}
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
              ))}
            </div>
            <div className="flex justify-center mt-10">
              <Button variant="outline" className="rounded-full">
                Voir tous les produits
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="mx-auto w-full max-w-[500px] lg:max-w-none">
                <Image
                  src="/placeholder.svg?height=550&width=550"
                  alt="Produits naturels"
                  width={550}
                  height={550}
                  className="mx-auto aspect-square rounded-xl object-cover"
                />
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Des ingrédients naturels
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Nos produits sont formulés avec des ingrédients naturels soigneusement sélectionnés pour leur
                    efficacité et leur respect de la peau.
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
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2023 Glowissime Cosmetics. Tous droits réservés.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Conditions générales
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Confidentialité
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
