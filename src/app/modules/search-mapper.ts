import { Item, ItemSearch } from '../model/ItemSearch';
import { Injectable } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { title } from 'process';
import { Description, ItemDetail } from '../model/itemDetail';
import { ItemFilter, ItemValue, Result, Search } from '../model/Item';
import { Detail } from '../model/detail';

@Injectable({
	providedIn: 'root',
})

export class SearchMapper {

    toItemSearch(itemList: Search) : ItemSearch {
        return {
            author: {
                name: 'Matias',
                lastname: 'Suarez'
            },
            categories: this.getCategories(itemList.filters) || [],
            items:  this.mapItems(itemList.results)
        }
    }

    toDetail(item: Detail) : ItemDetail {
        return {
            author: {
                name: 'Matias',
                lastname: 'Suarez'
            },
            item:  {
                id: item.id,
                title: item.title,
                price: {
                    currency: item.currency_id,
                    amount: item.price,
                    decimals: 2 //no encuentro en la api
                },
                picture: this.getPicture(item.pictures,item.thumbnail_id),
                condition: item.condition,
                free_shipping: item.shipping.free_shipping,
                sold_quantity: item.sold_quantity,
                description: ''                             
            }
        }
    }

    toDescription(item: Description) : Description {
        return {
            text: item.text,
            plain_text: item.plain_text,
            last_updated: item.last_updated,
            date_created: item.date_created,
            snapshot: {
                url: item.snapshot.url,
                width: item.snapshot.width,
                height: item.snapshot.height,
                status: item.snapshot.status 
            }
        }
    }

    mapItems(items: Result[]) : Item[] {
        const newItems = [];
        items.forEach(x => {
            newItems.push({
                id: x.id,
                title: x.title,
                price: {
                    currency: x.currency_id,
                    amount: x.price,
                    decimals: 2 //no encuentro en la api
                },
                picture: x.thumbnail,
                condition: x.condition,
                free_shipping: x.shipping.free_shipping,
                address: {
                    state_id: x.address.state_id,
                    state_name: x.address.state_name,
                    city_id: x.address.city_id,
                    city_name: x.address.city_name
                }
            })
        });
        return newItems;
    }

    getPicture(pictures, id) {
        return pictures.find(x => x.id === id).url
    }

    getCategories(filters: ItemFilter[]) : string [] {
        const categories = filters.find(x => x.id == 'category')?.values
        const categoriesArray: string [] = [];
        if(categories) {
            categories.forEach(x => {
                x.path_from_root.forEach(x => {
                    categoriesArray.push(x.name);
                });
            }) 
        }        
        return categoriesArray;
    }
	
			
}
