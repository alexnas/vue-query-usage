interface INavbarMenuItem {
  name: string
  label: string
  path: string
}

interface ISideMenuItem {
  name: string
  label: string
  path: string
  icon: string
}

interface IProduct {
  id: number
  title: string
  description: string
  category: string
  price: string
  rating: number
  brand: string
  images: string[]
  thumbnail: string
}

type IProductKeys = keyof IProduct

interface IProducTableCol {
  field: IProductKeys
  title: string
}

export type { INavbarMenuItem, ISideMenuItem, IProduct, IProductKeys, IProducTableCol }
