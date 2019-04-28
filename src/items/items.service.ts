import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';

@Injectable()
export class ItemsService {
    private readonly items: Item[] = [
        {
            id: "2324242424",
            name: "Item One",
            qty: 100,
            description: "This is item one"
        },
        {
            id: "232324234",
            name: "Item Two",
            qty: 50,
            description: "This is item two"
        }
    ];

    findAll(): Item[] {
        //we can use "this" since we are inside of a class and it refers to the class that we are inside of
        return this.items;
    }
};
