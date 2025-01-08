export function getAddForm(req,res){
    res.render("fileupload");
}


export function saveFile(req,res){
    console.log(req.file);//for multer
    // console.log(req.files)//fileupload whole data
    // const fileselected=req.files.myFile;
    // console.log(fileselected.name)
    // fileselected.mv("public/images/"+"myFile.png");
    res.send("fle uploaded");
}