import { useNavigate } from "react-router-dom";
import { useTypedDispatch } from "../../hooks/useDispatch";
import { useTypedSelector } from "../../hooks/useSelector"


const Menu = ()=>{
    const navigate = useNavigate()

    const {addToOrder} = useTypedDispatch()
    const {product} = useTypedSelector((s)=> s.product)
console.log(product);

    const orderBtn = (el: any)=>{
        addToOrder(el)
        navigate('/admin')
        
    }
    
    
    return(
        <div>
            {
                product.map((el)=> (
                   <div>
                    <img src={ el.img} width={300} alt="" />
                    <h1>{el.name}</h1>
                    <h2>{el.price}</h2>
                    <button onClick={()=> orderBtn(el)}>TO ORDER</button>
                   </div>
                ))
            }
        </div>
    )
}

export default Menu