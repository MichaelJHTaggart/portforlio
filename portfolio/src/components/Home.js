import { useState } from 'react';
import './App.css';

const Home = props => {
 const [isMenuOpen, setIsMenuOpen] = useState(false)


 return (
  <section>
   <div>
    <div>
     <h2>Time Management</h2>
     <p>Managing time is important in every business. Once you create an account you will be able to track your time
          for each project that you start! Don't forget to name each project!</p>
     <div><a href="https://www.handlewhile.com" aria-label="Check out the website!">Try it out</a>
     </div>
    </div>
   </div>

   <div>
    <img alt="" class="" src=""></img>
   </div>

  </section>

 );
}

export default Home;
