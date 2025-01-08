console.log("Hello World");
// https://nodejs.org/en/download/source-code
// https://docs.libuv.org/en/v1.x/

function grandTotal(produtsList){

    let total=0;

    produtsList.forEach((eachproduct)=>{
        total=eachproduct;
    })

    return total;
}


const productsList=[10,20,30];

console.log(grandTotal(productsList));
//205.254.168.242