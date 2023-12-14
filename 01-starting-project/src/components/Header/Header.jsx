import mainImage from "../../assets/react-core-concepts.png";
import "./Header.css"

const reactDescription = ["Fundamental", "Crucial", "Core"];

function getRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
}

export function Header() {
    return (
        <header>
            <img src={mainImage} alt="Stylized atom"/>
            <h1>React Essentials</h1>
            <p>
                {reactDescription[getRandomInt(reactDescription.length - 1)]} React concepts you will need for almost
                any app you are
                going to build!
            </p>
        </header>
    )
}