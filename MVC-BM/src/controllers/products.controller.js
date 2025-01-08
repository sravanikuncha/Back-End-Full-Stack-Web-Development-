const path=require('path');
const modelPath=path.join(path.resolve(),'src','models','products.model.js');

const productsModel =require(modelPath);
const productsModelClass= productsModel.ProductsModel;

class ProductsController{

    //any variables 

    constructor(){

    }

    getProducts(req,res){
        // console.log(productsModel.products);
        res.render("products",{products:productsModel.products});
        // res.sendFile(path.join(path.resolve(),'src','views','products.html'));
    }

    getAddForm(req,res){
        res.render("new-product",{errorMessage:""});
    }

    addNewProduct(req,res){
        // console.log(req.body);//data will not come
        const formData=req.body

        //start validation before adding
        //move this code to validation middleware
        // let errors=[];
        // if(formData.name==''){
        //     errors.push("Name cannot be empty")
        // }

        // if(formData.desc==''){
        //     errors.push("Description cannot be empty")
        // }

        // if(formData.price=='' || formData.price<0){
        //     errors.push("Price cannot be empty or incorrect")
        // }

        // try{
        //     const url=new URL(formData.imageUrl);
        // }catch(e){
        //     errors.push("URL is invalid")
        // }

        // if(errors.length>0){
        //     return res.render("new-product",{errorMessage:errors[0]});
        // }


        // sample imageuRL-https://m.media-amazon.com/images/I/61K7ujVUm+L._AC_UF1000,1000_QL80_.jpg
        productsModel.addNewProducttoDB(formData.name,formData.desc,formData.price,formData.imageUrl);
        // console.log(productsModel.products);
        res.render("products",{products:productsModel.products});
    }


    updateProduct(req,res){
        const id=req.params.id;
        const productData=productsModelClass.getProductFromDB(id);
        if(productData){
            res.render("update-product",{products:productData,errorMessage:null})
        }else{
            res.status(401).send("Product not found");
        }
    }

    updateExistingProduct(req,res){
        // const id=req.params.id;
        productsModelClass.updateExistingProductModel(req.body);
        // console.log(productsModel.products)
        res.render("products",{products:productsModel.products});
    }

    deleteProduct(req,res){
        const id=req.params.id;
        productsModelClass.deleteProductModel(id);
        // console.log(productsModel.products)
        res.render("products",{products:productsModel.products});
    }
}


module.exports=ProductsController;