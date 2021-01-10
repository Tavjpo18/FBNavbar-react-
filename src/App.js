

import React,{useState} from 'react';
import { CSSTransition } from "react-transition-group";
function App() {
  return (
    <Navbar>
      <NavItem icon=":)"/>
      <NavItem icon=":)"/>
      <NavItem icon=":(">
          <DropdownMenu/>
      </NavItem>
    </Navbar>
  );
}
function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        {props.children}
      </ul>
    </nav>
  );
}
function NavItem(props){
  const [open,setopen]= useState(false);

  return(
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={() => setopen(!open)}>
        {props.icon}
      </a>

      {open && props.children}
    </li>
  );
}

function DropdownMenu(){
  const [activeMenu,setActiveMenu] = useState('main');// setting , animates
  const [menuHeight, setMenuHeight]= useState(null);

  function calcHeight(el){
    const height= el.offsetHeight;
    setMenuHeight(height);
  }
  function DropdownItem(props){
    return(
      <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
        <span className="icon-button">
          {props.leftIcon}
          </span>
        {props.children}
        <span className="icon-right">
          {props.rightIcon}
          </span>
      </a>
    );
  }
  return (
    <div className="dropdown" style={{height: menuHeight}}>
      <CSSTransition 
      in={activeMenu === 'main'} 
      unmountOnExit 
      timeout={500}
      classNames="menu-primary"
      onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem>My profile</DropdownItem>
          <DropdownItem 
          rightIcon
          goToMenu="setting">
            Setting
            </DropdownItem>
        </div>
        
      </CSSTransition>
      <CSSTransition 
      in={activeMenu === 'setting'} 
      unmountOnExit 
      timeout={500}
      classNames="menu-secondary"
      >
        <div className="menu">
         
          <DropdownItem rightIcon goToMenu="main"/> 
          <DropdownItem>Setting</DropdownItem>
          <DropdownItem>Setting</DropdownItem>
          <DropdownItem>Setting</DropdownItem>
          <DropdownItem>Setting</DropdownItem>
          <DropdownItem>Setting</DropdownItem>
          <DropdownItem>Setting</DropdownItem>
            =
        </div>
        
      </CSSTransition>
      
    </div>
  );
}
export default App;
