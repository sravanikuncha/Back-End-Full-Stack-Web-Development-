// Please don't change the pre-written code

export const validateBlog = (req, res) => {
  // Write your code here
  const errors=[];
  const formData=req.body;

  if(formData.image==''){
    errors.push('The image URL provided should be a valid URL')
  }
  else{
    try{
    const url=new URL(formData.image);
    }
    catch(e){
      errors.push('The image URL provided should be a valid URL');
    }
  }

  if(formData.title==''){
    errors.push('The title field should not be empty')
    errors.push('The title field should contain at least 3 characters.')
  }
  else if(formData.title.length<3){
    errors.push('The title field should contain at least 3 characters.')
  }

  if(formData.description==''){
    errors.push('The description field should not be empty.')
    errors.push('The description field should contain at least 10 characters.')
  }
  else if(formData.description.length<10){
    errors.push('The description field should contain at least 10 characters.')
  }
  
  console.log(errors);
  if(errors.length>0){
    return res.render("addBlog", { errors: errors, success: false });
  }

  res.status(201).render("addBlog", { errors: null, success: true });
};
export const renderBlogForm = (req, res) => {
  res.render("addBlog", { errors: null, success: false });
};
