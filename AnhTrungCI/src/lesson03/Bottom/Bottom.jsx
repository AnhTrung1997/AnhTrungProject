import { BiAlignLeft, BiDockLeft, BiLeftArrow, BiLeftArrowAlt, BiLeftDownArrowCircle, BiRightArrowAlt } from 'react-icons/bi'
import './Bottom.css'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useState, useEffect } from 'react'
import AddProduct from '../AddProduct/AddProduct'

const Bottom = () => {
    const [dataList, setdataList] = useState([])
    const [isLoading, setIsLoading] = useState(false);

    const [isOpenModal, setIsOpenModal] = useState(false)
    const url = `https://671bac7c2c842d92c380df8e.mockapi.io/product`
    useEffect(() => {
        const handleData = async () => {
            setIsLoading(true)
            const response = await fetch(url);
            const data = await response.json();
            setdataList(data);
            setIsLoading(false)
        }
        handleData()
    }, [])
    const handleOpen = () => {

        setIsOpenModal(true)
        console.log('tesst')
    }

    return (
        <>
            {isLoading && <p>Loading...</p>}
            {!isLoading && dataList.length == 0 && <p>No Product</p>}
            {!isLoading && dataList.length > 0 &&
                <>
                    <div className="Bottom">
                        <div className="Gift">
                            <h3>Quà tặng</h3>
                            <button onClick={handleOpen
                            }  >Tạo</button>
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
                    <AddProduct isOpen={isOpenModal} />
                </>


            }

        </>
    )
}

export default Bottom