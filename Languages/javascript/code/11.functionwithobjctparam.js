// function with Object param

function getProductDetails(productData){
    console.log(productData); //print first
    productData.price=2000;  //changed value
}


let product = {  //Object refrence is product
    name: "macbook pro",
    barnd: 'sample',
    stock:'in-stock',
    price:1000
}


getProductDetails(product) //call by reference
//output
// {
//   name: 'macbook pro',
//   barnd: 'sample',
//   stock: 'in-stock',
//   price: 1000
// }


console.log(product.price); //2000