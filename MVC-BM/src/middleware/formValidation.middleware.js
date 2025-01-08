const expressValidator=require('express-validator');

const body=expressValidator.body;
const validationResult=expressValidator.validationResult;

const submitFormValidation=async (req,res,next)=>{

    console.log("entered validaion middleware")
       let errors=[];
       const formData=req.body
    //    console.log(formData)
        // 3 rules 

        // 1)setuprules
            const rules=[
                body('name').notEmpty().withMessage("Name is  required"),
                body('desc').notEmpty().withMessage("Description is required"),
                body('price').isFloat({gt:0}).withMessage("Invalid price"),
                body('imageUrl').isURL().withMessage("URL is Invalid")
            ]
        // 2)run rules
        await Promise.all(rules.map((rule) => rule.run(req)));
        //run all rules , each rule can be runu using run function

        // 3)check rules
        var validationErrors = validationResult(req);
        if(!validationErrors.isEmpty()){
            return res.render("new-product",{errorMessage:validationErrors.array()[0].msg});
        }
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

        next();
}


module.exports={submitFormValidation};