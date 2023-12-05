export interface BillboardType {
     id: string
     label : string
     imageUrl: string
}

export interface Category{
    id: string
    name : string
    billboard: BillboardType
}

export interface Product{
    id: string
    category: Category
    name: string
    price: string
    isFeatured: boolean
    color: Color
    size: Size
    images: Images[]
}

export interface Size{
    id: string
    name: string
    value: string

}
export interface Color{
    id: string
    name: string
    value: string
}

export interface Images{
    id: string
    url: string
}