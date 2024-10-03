import './Top.css'
import { BiDetail, BiSearch, BiSearchAlt, BiSolidDetail } from 'react-icons/bi'
const Top = () => {
    return (
        <>
            <div className="Top">
                <h1>Yêu thích ngay</h1>
                <div className='contentTop'>
                    <img src="./image/logoTop.png" alt="" />
                    <p>Thêm ngay vào mục yêu thích để nhận được thông báo mỗi khi sản phẩm có ưu đãi</p>
                </div>
                <div className="loveProduct">
                    <h1>Mục yêu thích của bạn</h1>
                    <div className="input">
                        <BiSearch fontSize={20} />
                        <input type="text" placeholder='Tìm kiếm' />
                    </div>
                    <div className="select">
                        <select defaultValue={1}>
                            <option value="1">Trạng thái</option>
                            <option value="2"></option>
                            <option value="3"></option>
                        </select>
                        <select defaultValue={1}>
                            <option value="1">Danh mục</option>
                            <option value="2"></option>
                            <option value="3"></option>
                        </select>
                        <select defaultValue={1}>
                            <option value="1">Đã thêm gần đây</option>
                            <option value="2"></option>
                            <option value="3"></option>
                        </select>
                        <BiDetail fontSize={20} />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Top