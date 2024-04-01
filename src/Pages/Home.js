import Listado from '../Funciones/Productos/Listado'

const Home = () => {
    return (
        <div className="main-content">
            <h2 align='center'>Haz tu propia mezcla: elige tus frutos secos preferidos.</h2>
            <p>Tenga en cuenta que cada producto se compra en fracciones de 100g.</p>
            <Listado />
        </div>
    )
}

export default Home;
