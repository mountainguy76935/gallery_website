import tips from "../pictures/tips.png";
import github from "../pictures/github.png";
import codepen from '../pictures/codepen.jpg';
import shapes from '../pictures/shapes.jpg';
import calc from '../pictures/calc.png';
import chem from '../pictures/chem.jpg';
import node from '../pictures/node.png';
import stars from '../pictures/stars.jpg'

const data = [
    {
      name: "Shapes",
      id: "img1",
      src: shapes,
      tagline: "App with animated shapes! Full screen and click around.",
      link: "https://some-wild-shapes.herokuapp.com/"
    },
    {
      name: "Nasa API",
      id: "img2",
      src: stars,
      tagline: "Just a nifty program that features NASA's picture of the day",
      link: "nasa"
    },
    {
      name: "Tip Out Calculator",
      id: "img3",
      src: tips,
      tagline: "Title says it all!",
      link: 'https://mountainguy76935.github.io/tip_out_calc/'
    },
    {
      name: "Github",
      id: "img4",
      src: github,
      tagline: "My github! This site has some of my solutions to problems from the Euler Project along with the course code for my apps.",
      link: 'https://github.com/mountainguy76935'
    },
    {
      name: "Tip Out calculator (Part 2)",
      id: "img5",
      src: node,
      tagline: "Another version of my tip out calculator. This one uses mongoDB, express, and MVC architecture.",
      link: "https://tip-out-calc.herokuapp.com/"
    },
    {
      name: "Code Pen",
      id: "img6",
      src: codepen,
      tagline: "Some programs to showcase HTML/CSS/JavaScript",
      link: 'https://codepen.io/mountainguy76935'
    },
    {
      name: "Regular Calculator",
      id: "img7",
      src: calc,
      tagline: "Little React Calculator",
      link: 'calc'
    }, 
    {
      name: "Periodic Table App",
      id: "img8",
      src: chem,
      tagline: "Learn some chemistry! Periodic table made using an API, React, and Express (desktop only, for now!)",
      link: 'https://greatest-periodic-table-foreal.herokuapp.com'
    }
  ];

  export default data;