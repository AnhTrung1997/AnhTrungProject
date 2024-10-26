import { BiAlignLeft, BiDockLeft, BiLeftArrow, BiLeftArrowAlt, BiLeftDownArrowCircle, BiRightArrowAlt } from 'react-icons/bi'
import './Bottom.css'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useState, useEffect } from 'react'
import AddProduct from '../AddProduct/AddProduct'
const Bottom = () => {
    const [dataList, setdataList] = useState([])
    const url = `https://671bac7c2c842d92c380df8e.mockapi.io/product`
    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((result) => {

                setdataList(result)

            });
    });

    /* Test useEffect */
    // const [checkAdd, setcheckAdd] = useState(false)
    // const clickAdd = () => {
    //     setcheckAdd(true)


    // }
    // const close = () => {
    //     setcheckAdd(false)
    // }
    // const dataList = [
    //     //     {
    //     //     name: "Granola siêu hạt ăn kiêng 15% yến mạch",
    //     //     price: 75000,
    //     //     image: './image/item1.png',
    //     //     discount: "99%",
    //     // }
    // ]
    //console.log(LocalStorage.getItem('data'))
    // if (
    //     LocalStorage.getItem('data') != null
    // ) { dataList.push(JSON.parse(localStorage.getItem('data'))) }

    // const [dataList, setdataList] = useState(JSON.parse(localStorage.getItem('data')))
    // const adddataList = () => {
    //     setdataList(JSON.parse(localStorage.getItem('data')))

    return (
        <>
            {/* Test useEffect */}
            {/* {checkAdd && < AddProduct isOpen={checkAdd} CloseTab={close} addData={adddataList} />} */}
            <div className="Bottom">
                <div className="Gift">
                    <h3>Quà tặng</h3>
                    <button >Tạo</button>
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