import { createContext, useContext, useState } from "react";
import { FaEllipsisVertical } from "react-icons/fa6";
import { useOutsideClick } from "../useOutsideClick";
import { createPortal } from "react-dom";

const MenusContext = createContext();

const Menus = ({ children }) => {
  const [openId, setOpenId] = useState("");
  const [position, setPosition] = useState(null);

  const close = () => setOpenId("");
  const open = setOpenId;

  return (
    <MenusContext.Provider
      value={{ openId, close, open, position, setPosition }}
    >
      {children}
    </MenusContext.Provider>
  );
};

const Toggle = ({ id }) => {
  const { openId, close, open, setPosition } = useContext(MenusContext);

  const handleClick = (e) => {
    e.stopPropagation();
    const rect = e.target.closest("button").getBoundingClientRect();
    setPosition({
      x: window.innerWidth - rect.width - rect.x,
      y: rect.y + rect.height + 8,
    });

    openId === "" || openId !== id ? open(id) : close();
  };

  return (
    <button className="styledToggle" onClick={handleClick}>
      <div className="hover-text">
        <FaEllipsisVertical />

        <span className="tooltip-text" id="bottom">
          Click to see details
        </span>
      </div>
    </button>
  );
};

const List = ({ id, children }) => {
  const { openId, position, close } = useContext(MenusContext);
  const ref = useOutsideClick(close, false);

  if (openId !== id) return null;
  return createPortal(
    <ul className="styledList" position={position} ref={ref}>
      {children}
    </ul>,
    document.body
  );
};

const Menu = ({ children }) => {
  return <div className="menu">{children}</div>;
};

const Button = ({ children, icon, onClick }) => {
  const { close } = useContext(MenusContext);
  const handleClick = () => {
    onClick?.();
    close();
  };

  return (
    <li>
      <button className="styledButton" onClick={handleClick}>
        {" "}
        {icon} <span>{children}</span>{" "}
      </button>
    </li>
  );
};

Menus.Menu = Menu;
Menus.Toggle = Toggle;
Menus.List = List;
Menus.Button = Button;

export default Menus;
