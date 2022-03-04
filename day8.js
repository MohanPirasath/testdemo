
//Write a “person” class to hold all the details.
class person {
    constructor(FirstName,LastName,DOB,Qualification){
        this.FirstName=FirstName;
        this.LastName=LastName;
        this.DOB=DOB;
        this.Qualification=Qualification;
    }
    get FirstName(){return this.FirstName}
    get LastName(){return this.LastName}
    get DOB(){return this.DOB}
    get Qualification(){return this.Qualification}
}
let person1 = new person('Ajai',"kumar","22-2-2000","B.Tech");
console.log(person1.getDOB);

//write a class to calculate uber price.
class uber{
    constructor(km){
        this.km = +km;
    }
    get price() {return this.km * 7;}
}
let cus1 =new uber(12);
console.log(cus1.price(12));

