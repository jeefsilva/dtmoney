import {Container} from "./styles";
import inImage from "../../assets/in.svg"
import outImage from "../../assets/out.svg"
import totalImage from "../../assets/total.svg"

export function Summary() {
    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={inImage} alt="Entradas"/>
                </header>
                <strong>R$1000,00</strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outImage} alt="Saídas"/>
                </header>
                <strong>- R$500,00</strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalImage} alt="Total"/>
                </header>
                <strong>R$500,00</strong>
            </div>
        </Container>
    )
}