import { Author, Item } from "./ItemSearch";

export interface ItemDetail {
    author: Author,
    item: Detail
}

export interface Detail extends Item {
    sold_quantity: number,
    description: string
}

export interface Description {
    text: string,
    plain_text: string,
    last_updated: string,
    date_created: string,
    snapshot: Snapshot
}

export interface Snapshot {
    url: string,
    width: number,
    height: number,
    status: string
}