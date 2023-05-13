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
    userPhone: string,
    userEmail: string,
    userWhatsapp: string,
    createdAt: string,
    updatedAt: Date,
}

export interface UserType {
    _id? : string,
    username: string,
    profileImage: string,
    age: number,
    town: string,
    country: string,
    category: string[],
    phoneNumber: string,
    userWhatsapp: string,
    email:string,
    strikes :number,
    ban: boolean,
    firstTime: boolean,
}