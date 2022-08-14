import { useState, useEffect } from 'react'
import { getProducts } from "../../asyncMock"
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom' 
import './ItemListContainer.css'

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { id } = useParams()


    useEffect(() => {
        setLoading(true)
        const asyncFunction = getProducts
        
        asyncFunction(id).then(response => {
            setProducts(response)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })  
    }, [id])

    if(loading) {
        return <h1>Cargando productos...</h1>
    }

    return (
        <div>
            <h1>{`${greeting} ${id || ''}`}</h1>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer