import Item from "./Item";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

const SideMenu = (props) => {
  return (
    <div className="sideMenuContainer">
      <div className="side-menu">
        <div onClick={props.onClick} className="closeBtn ">
          <FontAwesomeIcon icon={fas.faTimesCircle} />
        </div>
        <nav>
          <a href="#" class="item side">
            item1
          </a>
          <a href="#" class="item side">
            item2
          </a>
          <a href="#" class="item side">
            item3
          </a>
          <a href="#" class="item side">
            item4
          </a>
        </nav>
      </div>
    </div>
  );
};

export default SideMenu;

{
  /* <div classNameName="side-menu">
      {itemData.map((item) => (
        <item />
      ))}
      <item />
    </div> */
}
