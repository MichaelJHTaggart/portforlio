import { useState } from 'react';
import './App.css';

const Middle = props => {
 const [isMenuOpen, setIsMenuOpen] = useState(false)


 return (
  <section>
   <div>
    <div>
     <h2>Property Management</h2>
     <p>This website provides a one-stop experience for property managers and tenants. It is built to add and resolve
     maintenance requests, payments, and to manage properties. The manager view and the tenant view are similar
      experiences but are two different views.</p>
     <div><a href="https://www.lemonprop.com" aria-label="Check out the website!">Try it out</a>
     </div>
    </div>
   </div>

   <div>
    <img alt="" class="" src=""></img>
   </div>

  </section>
 );
}

export default Middle;