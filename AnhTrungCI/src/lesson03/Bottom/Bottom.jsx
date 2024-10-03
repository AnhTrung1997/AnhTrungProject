import { BiAlignLeft, BiDockLeft, BiLeftArrow, BiLeftArrowAlt, BiLeftDownArrowCircle, BiRightArrowAlt } from 'react-icons/bi'
import './Bottom.css'
import ItemDetail from '../ItemDetail/ItemDetail'
import { dataProduct } from '../Data'
const Bottom = () => {
    return (
        <>
            <div className="Bottom">
                <div className="Gift">
                    <h3>Quà tặng</h3>
                    <button>Tạo</button>
                </div>
                <div className="List">
                    {
                        dataProduct.map((product) => {
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