export default function TabButton(props) {

    function handelClick(){

    }

    return (<li>
        <button onClick={handelClick}>{props.children}</button>
    </li>)
}