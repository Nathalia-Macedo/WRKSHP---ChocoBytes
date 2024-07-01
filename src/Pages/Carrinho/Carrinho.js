import './Carrinho.css'
import CardCar from '../../Components/CardCar/CardCar'
import { ChocolatesProvider } from '../../Context/produtos';
function Carrinho(){
    return(
        <>
        <ChocolatesProvider>
        <CardCar/>
        </ChocolatesProvider>
        </>
    )

}

export default Carrinho;