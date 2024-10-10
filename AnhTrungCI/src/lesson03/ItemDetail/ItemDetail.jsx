import { useState } from 'react'
import './ItemDetail.css'
import { BiAlarm, BiAlignLeft, BiCard, BiDockLeft, BiLeftArrow, BiLeftArrowAlt, BiLeftDownArrowCircle, BiRightArrowAlt, BiShoppingBag, BiSolidShoppingBagAlt } from 'react-icons/bi'
import PageItem from '../PageItem/PageItem'
const ItemDetail = (props) => {
    const [check, setCheck] = useState(false)
    const clickShow = () => {
        setCheck(true)
    }
    const clickHide = () => {
        setCheck(false)
    }
    return (

        <>
            {check && <PageItem handleHideModal={clickHide} isOpen={check} product={props.product} />}
            <div className="item" onClick={clickShow}>
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