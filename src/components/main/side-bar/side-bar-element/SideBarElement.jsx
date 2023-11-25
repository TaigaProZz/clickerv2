import './SideBarElement.scss'

function SideBarElement({element}) {

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