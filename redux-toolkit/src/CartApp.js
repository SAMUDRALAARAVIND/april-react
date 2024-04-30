import { useSelector } from "react-redux"

export const CartApp = () => {
    const productsCount = useSelector(state => state.b.cart.length)
    return <div>
        <p>Total Products added are: {productsCount}</p>
    </div>
}