import Header from '../../Components/Header/Header'
import Catalogo from "../../Components/Catalogo/Catalogo";
import Session from "../../Components/SessionAction/Session";
import { ChocolatesProvider } from "../../Context/produtos";
function Home(){
return(

    <>
    
    <Header/>
    <Session/>
    <ChocolatesProvider>
    <Catalogo/>
    </ChocolatesProvider>
    </>
)
}

export default Home