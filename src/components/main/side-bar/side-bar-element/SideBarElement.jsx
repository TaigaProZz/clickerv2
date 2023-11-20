import './SideBarElement.scss'

function SideBarElement(props) {
    const element = props.element;
    console.log(element);
    return (
        <div className="side-bar-element flex-d">
            <p>Image</p>
            <p>{element.name}</p>
            <p>{element.price}</p>
            <button>Buy</button>
        </div>
    )
}

export default SideBarElement;