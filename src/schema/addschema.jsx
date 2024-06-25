import * as Yup from "yup"


export  const addschema=Yup.object({
    name:Yup.string().min(2).max(25).required("Product name is requried"),
    price:Yup.number().required("Enter valid price"),
    img:Yup.string().required('Please enter valid link')
})