import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { ItemsService } from './items.service';
import { Item } from './interfaces/item.interface';

/*
    You can use the the req and res objects in nest like how you would use them in express however it's not the "nest way" of doing things
    Example:
        Bring in the Req and Res objects from @nestjs/common then pass them into the params of the handler function that is executed for the specific method
        //import { Req, Res } from '@nestjs/common';

        Also bring in the Request and Response objects from "express"
        //import { Request, Response } from 'express';

        Since we are using type script, make sure to define the function as a Response
        @Get()
        findAll(@Req() req: Request, @Res() res: Response): Response {
            console.log(req.url);
            return res.send('Hello World!')
        };
*/

//Controllers define the endpoints and calls a service method to deal with our data

@Controller('items')
export class ItemsController {
    //inject dependencies into the params of the class's constructor
    //after injection, dependencies can be accessed on the "this" obj or this class
    constructor(private readonly itemsService: ItemsService){

    }

    @Get()
    findAll(): Promise<Item[]> {
        return this.itemsService.findAll();
    };

    //You can access params using the Param function from @nestjs/common and passing the method decoration the url param
    //then pass the @Param function into the handler function and declare how to use it within the handler
    @Get(':id')
    findOne(@Param('id') id): Promise<Item> {
        return this.itemsService.findOne(id);
    };

    //Access data sent through the body by using the Body function from @nestjs/common and declaring the DTO that we created for the items endpoint
    //the data transfered throgh the object is accessable using dot notation
    @Post()
    create(@Body() createItemDto: CreateItemDto): Promise<Item> {
        return this.itemsService.create(createItemDto);
    };

    @Delete(':id')
    deleteItem(@Param('id') id): Promise<Item> {
        return this.itemsService.delete(id);
    };

    @Put(':id')
    update(@Body() updateItemDto: CreateItemDto, @Param('id') id): Promise<Item> {
        return this.itemsService.update(id, updateItemDto);
    }
}