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
    visibility: boolean,
    location: string,
    userId: string,
    userName: string,
    userProfile: string,
    userPhoneNumber: string,
    userEmail: string,
    userWhatsapp: string,
    createdAt: string,
    updatedAt: Date,
}