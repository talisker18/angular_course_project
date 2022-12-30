export class Ingredient{
    //public name: string;
    //public amount: number;

    /*constructor(name: string, amount: number){
        this.name = name;
        this.amount = amount;
    }*/

    //short way when instance variables are public
    constructor(public name: string, public amount: number){}
}