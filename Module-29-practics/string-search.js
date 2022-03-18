const products = [
    "Dell hardcore i29 laptop",
    " iphone 1TB pphone ",
    " yellow laptop camera ",
    "dell 1x59 lenovo laptop ",
    "lg laptop ",
    " htc phone",
    "dell  purple color Laptop",

];

const searching = "laptop";

//indexof

const output = [];
for (const product of products){
    if(product.toLocaleLowerCase().indexOf(searching.toLocaleLowerCase()) != -1){
        //output.push(product)
    }
}
//console.log(output);


for(const product of products ){
    if(product.toLocaleLowerCase().includes(searching.toLocaleLowerCase())){
        output.push(product)
    }
}


