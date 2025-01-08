1)accept ="/images/\*"
if not specified anytype is accepted , if specidied ,liek 2 /3 then only those are accepted
2)multipart -form sending not only text , but mutliple format
enctype="/multipart/form-data 3)
3)public/images folder because multer middleware makes sure that we upload files 4)
4)middleware
The disk storage engine gives you full control on storing files to disk.
and db will generally have path where file is saved ideally
5)apply middleware just pass this middleware impletemented when we submit form
middlewarefunction.single(formfield) if we send file from here in application of [point 4 we can access ]
6)req.file -access file
req.body-only text felds

2nd type of library
express-fileupload
1)req.files
2)why the data present in req.files ,
middleware changes
