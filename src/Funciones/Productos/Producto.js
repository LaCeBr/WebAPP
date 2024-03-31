import './Producto.css';

function Producto(props) {

    const clickHandler = () => {
        //nombre = 'Nuevo nombre';
        //setNombre('¡¡CAMBIADO!!');
        console.log(nombre);
    }

    const nombre = props.producto.nombre;
    const stock = props.producto.stock;
    const precio = props.producto.precio;
    const imagen = props.producto.imagen;

    return (
        <div className='producto'>
            <img className='producto__imagen' alt={nombre} src={imagen}/>
            <div className='producto__descripcion'>
                <div>
                    <h2>{nombre} - {precio}€/Kg </h2>
                    <div>Actualmente disponibles: {stock}Kg</div>
                </div>
            </div>
        </div>
    )
}

export default Producto;