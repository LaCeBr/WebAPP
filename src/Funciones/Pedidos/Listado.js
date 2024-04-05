import { useEffect, useState } from 'react';
import Pedido from './Pedido';
import axios from 'axios';

function Listado(props) {

    const [pedidosFirebase, setPedidosFirebase] = useState([]);

    useEffect(() => {
        //Firebase
        axios.get('https://web-app-dsm-react-default-rtdb.europe-west1.firebasedatabase.app/pedidos.json')
        .then((response) => {
            let arrayPedidos = [];
            for (let key in response.data) {
                const nuevoPedido = {
                    id: response.data[key].id_pedido,
                    usuario: response.data[key].usuario,
                    productos: response.data[key].pedido
                };
            
                // Encuentra la posición donde insertar el nuevo pedido según su id
                let index = 0;
                while (index < arrayPedidos.length && nuevoPedido.id > arrayPedidos[index].id) {
                    index++;
                }
            
                // Inserta el nuevo pedido en la posición encontrada para organizarlos alfabéticamente
                arrayPedidos.splice(index, 0, nuevoPedido);
            }
            console.log(arrayPedidos);
            setPedidosFirebase(arrayPedidos);
        })
        .catch((error) => {
            alert('No se ha podido acceder');
        })
    }, []);

    return (
        <div>
            {pedidosFirebase.map((elemento) => {
                return (
                    <Pedido key={elemento.id} pedido={elemento} />
                )
            })}
        </div>
    );
}

export default Listado;