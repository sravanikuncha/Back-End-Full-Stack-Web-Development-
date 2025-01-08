

function deleteProductFromJS(id){
    const result=confirm("Are you sure want to delete this product");
    if(result){
        //nowwe are making a http request i.e., a url to server these can be done using promise apis
        fetch(`/delete-product/${id}`,{method:'POST'})
        .then((response)=>{
           if(response.ok){
            location.reload();
           }
        })
    }
}