export class Product{
    constructor(){
        this.id = 1;
        this.name = "Iphone";
        this.description="Description";
        this.imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYorfsrpyKo7P-fOn0IUxU_XUyzxmHsUGeYZ-xloVWhvza6Ed2TBlMxo7K3iT1IfacSQe0vlvv&usqp=CAc";
        this.price=10;
    }
    id: number;
    name: string;
    description: string;
    imageUrl: string;
    price: number = 10;
}