import { useContext } from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../../context/CartContext'
import './CartWidget.css'

const CartWidget = () => {
    const { getQuantity } = useContext(CartContext)

    const quantity = getQuantity()

    return(
        <Link to='/cart' className="CartWidget">
            <i className='bx bxs-cart CartImg' alt='cart-widget'></i>
            { quantity }
        </Link>
    )
}

export default CartWidget