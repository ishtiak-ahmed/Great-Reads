export interface ActionType {
    type: string
    id: number | string
}

export interface BookType {
    id: number | string
    name: string
    author: string
    rating: number
    description: string
}

export interface Books {
    all: BookType[]
    readingList: BookType[]
    done: BookType[]
}

export interface RootState {
    books: Books
}