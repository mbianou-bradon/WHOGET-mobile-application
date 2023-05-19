export interface CategoryType {

    _id: string,
    name: string
}

export interface askType {
    _id : string,
    message: string,
    category:string,
    image: string[],
    duration: number,
    visibility: boolean,
    location: string,
    user: { 
        _id : string,
        username: string,
        profileImage: string,
        phoneNumber: string,
        email: string,
        userWhatsapp: string,
    }
    createdAt: string,
    updatedAt: string,
}

export interface UserType {
    _id? : string,
    username: string,
    oAuthToken: string,
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