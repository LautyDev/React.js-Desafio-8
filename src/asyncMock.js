const products = [
    { 
        id: '1', 
        name: 'Samsung S21 FE 5G', 
        price: 95000,
        stock: 30, 
        category: 'Smartphone', 
        img: 'https://img.global.news.samsung.com/latin/wp-content/uploads/2022/04/Galaxy-S21-FE-5G-2.jpg', 
        description: 'Samsung Galaxy S21 compatible con 5G. Tiene cámara triple de hasta 64 MP, pantalla Dynamic AMOLED de 6,2" pulgadas y procesador Exynos 2100'
    },
    { 
        id: '2', 
        name: 'HP 240 G7',
        price: 80000,
        stock: 45,  
        category: 'Notebook', 
        img: 'https://http2.mlstatic.com/D_NQ_NP_954041-MLA46302470460_062021-O.webp', 
        description: 'Conéctate con el PC portátil HP 240 de precio económico que incluye la tecnología más reciente y un chasis duradero que ayuda a proteger el equipo. Completa tareas empresariales gracias al procesador Intel y a las herramientas de colaboración básicas'
    },
    { 
        id: '3', 
        name: 'Lenovo Tab P11', 
        price: 75000,
        stock: 20, 
        category: 'Tablet', 
        img: 'https://www.lenovo.com/medias/lenovo-tablet-tab-p11-gallery-1b.png?context=bWFzdGVyfHJvb3R8MjIwNjAxfGltYWdlL3BuZ3xoMjUvaDA5LzExMjk5MTk0OTI5MTgyLnBuZ3xhNzNmNGMzODE4NjljYjk1YjIzZDlhMTM4NzE0YjM4MGFkYzAxMzZkZTk3YzdmMjA1YjljMjNjMGFmMGFlNmQ3', 
        description: 'Tablet con pantalla de 11" 2000 x 1200 IPS. Procesador QUALCOMM SNAPDRAGON 662. Velocidad del procesador 2GHz. Capacidad 64 Gb / RAM 4 Gb. Camara frontal 8 mp. Camara trasera 13 mp. USB 1 x USB-C 2.0. Bluetooth 5.1. Lector de tarjeta Micro SD. Sistema operativo Android. Parlantes Quad Speakers, Optimized with Dolby Atmos. Bateria 2 Cell 7500 mAh. Wi Fi. Multitouch. Video S/D'
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
}