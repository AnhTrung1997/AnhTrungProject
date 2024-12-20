import { Modal } from 'antd'
import InputProduct from './InputProduct'
import { useState } from 'react'
const AddProduct = ({ isOpen, clickClose, addData }) => {
    const [infoProduct, setinfoProduct] = useState(
        {
            name: '',
            price: '',
            image: '',
            discount: '',
        }
    )
    const handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        infoProduct[name] = value
        setinfoProduct({ ...infoProduct })
        console.log(infoProduct)
    }
    let data = JSON.parse(localStorage.getItem('data'))
    const handleSubmit = (event) => {
        event.preventDefault()
        data.push(infoProduct)
        console.log(data)
        localStorage.setItem('data', JSON.stringify(data))
    }

    return (
        <Modal
            onCancel={clickClose}
            onOk={addData}
            width='1200px'
            open={isOpen}>
            <form onSubmit={handleSubmit}>
                name:  <InputProduct handleChange={handleChange} name="name" valua={infoProduct.name} />
                price:  <InputProduct handleChange={handleChange} name="price" valua={infoProduct.price} />
                image:  <InputProduct handleChange={handleChange} name="image" valua={infoProduct.image} />
                discount: <InputProduct handleChange={handleChange} name="discount" valua={infoProduct.discount} />
                <button type='submit'>Submit</button>
            </form>

        </Modal>
    )
}
export default AddProduct