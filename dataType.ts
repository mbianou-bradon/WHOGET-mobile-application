export interface CategoryType {

    _id: string,
    name: string
}

export interface askType {
    _id : string,
    message: string,
    category:string,
    image: string,
    duration: number,
    visibility: false,
    location: string,
}