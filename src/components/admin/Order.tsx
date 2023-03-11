

import { FormEvent, useState } from "react"
import { useTypedDispatch } from "../../hooks/useDispatch";
import uniqid from 'uniqid';



const Order = ()=>{
    const fileReader =new FileReader()

    const {addToProduct} = useTypedDispatch()
    const [fileUrl, setFileUrl] = useState<ArrayBuffer | null | string>('')
    const [value, setValue] = useState<any>({
        name : '',
        price : '',
        img:fileUrl,
        id : uniqid()
    })
    fileReader.onloadend  = ()=>{
        setFileUrl(fileReader.result)
    }
    const getValue  = (e: any)=>{
        setValue({...value, [e.target.name] : e.target.value})
    }
    
  
    const handleSubmit = (event:any)=>{
        event.preventDefault()
    }

    const handleChangeUrl = (e: React.ChangeEvent<any>)=>{
        fileReader.readAsDataURL(e.target.files[0])
    }
console.log(fileUrl);

    return(
        <div>
            <h1>CREATE PRODUCT</h1>
           <form onSubmit={handleSubmit} action="">
           <input onChange={handleChangeUrl} type="file" />
            <input onChange={getValue} name="name"  type="text"  placeholder="food name"/>
            <input onChange={getValue} name="price" type="text"  placeholder="price"/>
            <button onClick={()=> addToProduct({...value, img: fileUrl})}>CREATE</button>
           </form>
        </div>
    )
}

export default Order