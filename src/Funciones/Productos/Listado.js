import { useEffect, useState } from 'react';
import Producto from './Producto';
import { Alert } from 'react-bootstrap';
import axios from 'axios';

function Listado(props) {

    const [ano, setAno] = useState('');

    const [productosFirebase, setProductosFirebase] = useState([]);

    useEffect(() => {
        console.log('PRODUCTOS MONTADO');
        //Firebase
        axios.get('https://web-app-dsm-react-default-rtdb.europe-west1.firebasedatabase.app/productos.json')
        .then((response) => {
            console.log(response.data);
            let arrayProductos = [];
            for(let key in response.data) {
                arrayProductos.push({
                    id: key,
                    nombre: response.data[key].Nombre,
                    precio: response.data[key].Precio,
                    stock: response.data[key].Stock,
                    imagen: response.data[key].Imagen
                })
            }
            setProductosFirebase(arrayProductos);
        })
        .catch((error) => {
            alert('No se ha podido acceder');
        })
    }, []);

    return (
        <div>
            {productosFirebase.map((elemento) => {
                return (
                    <Producto key={elemento.id} producto={elemento} borraProducto={props.borraProducto} />
                )
            })}
        </div>
    );
}

export default Listado;