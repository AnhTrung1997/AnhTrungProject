import { BiAlignLeft, BiDockLeft, BiLeftArrow, BiLeftArrowAlt, BiLeftDownArrowCircle, BiRightArrowAlt } from 'react-icons/bi'
import './Bottom.css'
import ItemDetail from '../ItemDetail/ItemDetail'
import { dataProduct } from '../Data'
import { useState } from 'react'
import AddProduct from '../AddProduct/AddProduct'
import { Content } from 'antd/es/layout/layout'
const Bottom = () => {
    const [checkAdd, setcheckAdd] = useState(false)
    const clickAdd = () => {
        setcheckAdd(true)

    }
    const close = () => {
        setcheckAdd(false)
    }
    const dataList = [{
        name: "Granola siêu hạt ăn kiêng 15% yến mạch",
        price: 75000,
        image: './image/item1.png',
        discount: "99%",
    }]
    //dataList.push(JSON.parse(localStorage.getItem('data')))
    return (
        <>
            {checkAdd && < AddProduct isOpen={checkAdd} CloseTab={close} />}
            <div className="Bottom">
                <div className="Gift">
                    <h3>Quà tặng</h3>
                    <button onClick={clickAdd}>Tạo</button>
                </div>
                <div className="List">
                    {
                        dataList.map((product) => {
                            return <ItemDetail product={product} />
                        })
                    }
                </div>
                <div className="Page">
                    <BiLeftArrowAlt fontSize={24} />
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>4</button>
                    <BiRightArrowAlt fontSize={24} />
                </div>
            </div>
        </>
    )
}
export default Bottom