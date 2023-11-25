import './Main.scss';
import SideBar from "./side-bar/SideBar";
import ClickerArea from "./clicker-area/ClickerArea";

function Main() {
  return (
    <div className="main-component">
      <ClickerArea />
      <SideBar />
    </div>
  )
}

export default Main;