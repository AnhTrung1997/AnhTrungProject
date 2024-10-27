import { useState } from 'react'
import './ItemDetail.css'
import { BiAlarm, BiAlignLeft, BiCard, BiDockLeft, BiLeftArrow, BiLeftArrowAlt, BiLeftDownArrowCircle, BiRightArrowAlt, BiShoppingBag, BiSolidShoppingBagAlt } from 'react-icons/bi'
import PageItem from '../PageItem/PageItem'
import { useNavigate } from 'react-router-dom'
const ItemDetail = (props) => {
    const nav = useNavigate()
    return (
        <>
            <div onClick={() => {
                nav(`/${props.product.id}`)
            }} className="item">
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