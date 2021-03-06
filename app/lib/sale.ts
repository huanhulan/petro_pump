import {Fuel, ISaleInterface} from "../types";

class Sale implements ISaleInterface {
    public fuel: Fuel;
    public price: number;
    public cost: number;
    public quantity: number;

    constructor(fuel: Fuel, price: number, cost: number, quantity: number) {
        this.fuel = fuel;
        this.price = price;
        this.cost = cost;
        this.quantity = quantity;
    }
}

export default Sale;
