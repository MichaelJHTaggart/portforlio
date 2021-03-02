import { useState } from 'react';
import './App.css';

const Sidebar = props => {
 const [isMenuOpen, setIsMenuOpen] = useState(false)

 cosnt openNewTab = (url) => {
  const win = window.open(`${url}`, "_blank");
  win.focus();
 }

 return (
  <div>

  </div>

 );
}

export default Sidebar;