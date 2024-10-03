import './ItemDetail.css'
import { BiAlarm, BiAlignLeft, BiCard, BiDockLeft, BiLeftArrow, BiLeftArrowAlt, BiLeftDownArrowCircle, BiRightArrowAlt, BiShoppingBag, BiSolidShoppingBagAlt } from 'react-icons/bi'
const ItemDetail = (props) => {
    const click = () => {
        alert(props.product.name)
    }
    return (
        <>
            <div className="item" onClick={click}>
                <img src={props.product.image} style={{ width: "197px" }} />
                <div className="infoItem">
                    <div className="nameItem">
                        <p className='name'>{props.product.name}</p>
                        <BiSolidShoppingBagAlt fontSize={19} />

                    </div>
                    <div className="priceItem">
                        <p className='price'>{props.product.price}</p>
                        <p className='discount'>{props.product.discount}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ItemDetail