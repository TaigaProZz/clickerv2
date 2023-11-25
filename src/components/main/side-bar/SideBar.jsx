import './SideBar.scss';
import SideBarElement from './side-bar-element/SideBarElement';

function SideBar() {
  const mob = { name: "test", price: 100 };

  return (
    <div className="side-bar-container">
      <SideBarElement element={mob} />
    </div>
  )
}

export default SideBar