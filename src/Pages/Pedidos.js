import Listado from "../Funciones/Pedidos/Listado";

const Pedidos = () => {
    return (
        <div className="main-content">
            <h2 align='center'>Mis Pedidos</h2>
            <p>Listado de pedidos realizados.</p>
            <Listado />
        </div>
    )
}

export default Pedidos;