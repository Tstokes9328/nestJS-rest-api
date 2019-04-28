//Interfaces explain which field an item has and are used within the service
export interface Item {
    //providing a "?" means that it is optional
    id?: string,
    name: string,
    description?: string,
    qty: number
};