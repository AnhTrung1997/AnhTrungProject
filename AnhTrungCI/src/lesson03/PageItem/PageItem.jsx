import { dataProduct } from '../Data'
import './PageItem.css'
const PageItem = () => {
    let count = 0
    const clickUp = () => {
        count++
        sessionStorage.setItem("count", count)
    }
    const clickDown = () => {
        if (count > 0) {
            count--
            sessionStorage.setItem("count", count)
        }
    }
    return (
        <>
            <div className="header">
                <button className="trash">🗑</button>
                <button className="close">X</button>
            </div>
            <div className="body">
                <div className="item">
                    <img src={dataProduct[1].image} />
                    <div className="itemDetail">
                        <p>{dataProduct[1].name}</p>
                        <p>✰✰✰✰✰</p>
                        <p>Giá: {dataProduct[1].price}</p>
                        <p>Phân loại</p>
                        <div className="select">
                            <button>Nhỏ</button>
                            <button>Vừa</button>
                            <button>Lớn</button>
                        </div>
                        <div className="Buy">
                            <div className="Qty">
                                <button onClick={clickDown}>-</button>
                                <p>{sessionStorage.getItem("count")}</p>
                                <button onClick={clickUp}>+</button>
                            </div>
                            <button>Chọn mua</button>
                        </div>
                    </div>
                </div>
                <div className="intro"> <p>{dataProduct[1].name}</p>
                </div>
                <div className="listComment">
                    <div className="logoName">
                        <img src="https://s3-alpha-sig.figma.com/img/4461/1094/a9fa0b68fb40aa34264cfd5cfcf35b3e?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LP~1WT6SVaYpQ8EZSb3vKgVIUhW0jvkE3V1wiZw9EZeaUgRCAea6apOn6PeQiSAatkJpK6ap42dfP~UecQLw5DNfNL9HEtg6x5lyfGLsh2GeOyVN5epyAW0U4H1w8tLjDuc-PT~~SJ2LSaD3vX5K7ExHHG0q9ofu8DKU5DEMRwNus2ssAccz-x5iFQCoiV-DEr--pJOSRBKT3BB4YAtcyZ9qLsEu8GqVUDXwtdBzy0KI4Rg5JdqOpiDfiMVWen6ww0pciyDnxOqxNtNRAQihxIl~5E2lEP3O0IegQq9FHRN3jQfV7yH1Fx-Zb7U-zm3mJtOE0jPV1jX3Gy6KUX6DGg__"
                            alt="" className="logo" />
                        <p>John Doe</p>
                    </div>
                    <p>Sản phẩm này sẽ mua tặng gia đình sau 15 ngày nè!</p>
                    <hr />
                    <div className="submit">
                        <button>Comment</button>
                    </div>
                </div>

                <h2>Ghi chú</h2>
                <hr />
                <h4>Danh sách ghi chú</h4>
                <div className="comment">
                    <div className="logoName">
                        <img src="https://s3-alpha-sig.figma.com/img/69d4/ca17/caf812446036fa9b92930d6c38f1526b?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LGD2mR5hNY7ZwJIt4NEk08AHptRBygoNwJQWHKJs3UCD97TUKintO2m0HGguDCJLy09u-nYV19d11wZ0-7GiUJL-Wx62WbSHRgxsnRsqu6Jq7coBB00J-Jd~6RsD~jUM0krDuN5fnCqv2w7jo5AK6O4jaN16Y1TrNf9TnHFqOUONA-noV0G3WBKEFYP3Cg1O8~C8GA7XjK5Ao5vknm9KnWw6FAipim25yDhfLzoDy9Ltx0NyS-CNuYhTOPQxGSrvPqpCnwjVpmKHDG4p7VQPmewf4f0z8m~-Z294SQiYehOK3sLezEQ6RhWu7XSIoJqK-arOa8fgmlZ0FAzpDnQ2WA__"
                            alt="" />
                        <p>You</p>
                    </div>
                    <input type="text" placeholder="Lưu lại đã, rồi mấy nữa tính tiếp..." />
                    <div className="status">
                        <p>5 min ago</p>
                        <button></button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default PageItem