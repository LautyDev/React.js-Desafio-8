import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import CartContext from '../../context/CartContext'
import './ItemDetail.css'

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    const [quantityToAdd, setQuantityToAdd] = useState(0)

    const { addItem, getProductQuantity } = useContext(CartContext)
    const handleOnAdd = (quantity) => {
        setQuantityToAdd(quantity)

        const productToAdd = {
            id, name, price, quantity
        }

        addItem(productToAdd)
    }

    const productQuantity = getProductQuantity(id)

    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    Descripción: {description}
                </p>
                <p className="Info">
                    Precio: {price}
                </p>
                <p className="Info">
                    Categoría: {category}
                </p>
            </section>           
            <footer className='ItemFooter'>
                {
                    quantityToAdd === 0 ? (
                        <ItemCount onAdd={handleOnAdd} stock={stock} initial={productQuantity}/>
                    ) : (
                        <button><Link to='/cart'>Finalizar compra</Link></button>
                    )
                }
            </footer>
        </article>
    )
}

export default ItemDetail