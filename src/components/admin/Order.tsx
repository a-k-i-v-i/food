

import { useTypedDispatch } from "../../hooks/useDispatch";
import { useTypedSelector } from "../../hooks/useSelector";


const Admin = ()=>{
    const {order} = useTypedSelector((s)=> s.product)
    const {increaseQ} = useTypedDispatch()
    const {decreaseQ} = useTypedDispatch()
    const {deleteFromOrder} = useTypedDispatch()
    console.log(order);
    return(
        <section id="order">
           <div className="container">
            <div className="order">
            {
                order.map((el)=> (
                    <div className="order">
                        <img src={el.img} alt="" />
                        <h1>{el.name}</h1>
                        <h2>{el.price}</h2>
                        <span onClick={()=> decreaseQ(el.id)}> - </span>
                        <h3>QUANTITY: {el.quantity}</h3>
                        <span onClick={()=> increaseQ(el.id)}> + </span>
                        <button onClick={()=> deleteFromOrder(el)}>DELETE ORDER</button>
                    </div>
                ))
            }
            </div>
           </div>
        </section>
    )
}

export default Admin