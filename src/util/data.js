import kayak from '../pictures/kayak.JPG';
import tips from "../pictures/tips.png";
import github from "../pictures/github.png";
import codepen from '../pictures/codepen.jpg';
import shapes from '../pictures/shapes.jpg';
import calc from '../pictures/calc.png';
import chem from '../pictures/chem.jpg';
import node from '../pictures/node.png';

const data = [
    {
      name: "Shapes",
      id: "img1",
      src: shapes,
      tagline: "App with shapes! Full screen and click around...",
      link: "https://some-wild-shapes.herokuapp.com/"
    },
    {
      name: "Kayaking",
      id: "img2",
      src: kayak,
      tagline: "This is me, just kayaking and hanging out with a bald eagle"
    },
    {
      name: "Tip Out Calculator",
      id: "img3",
      src: tips,
      tagline: "Just a little tip out calculator that I made for my job...",
      link: 'https://mountainguy76935.github.io/tip_out_calc/'
    },
    {
      name: "Github",
      id: "img4",
      src: github,
      tagline: "My github! This site has some of my solutions to problems from the Euler Project, FreeCodeCamp, and Code Wars.",
      link: 'https://github.com/mountainguy76935'
    },
    {
      name: "Tip Out calculator (Part 2)",
      id: "img5",
      src: node,
      tagline: "Click here to check out my tip out calculator, implementing routing, mongoDB, express, and heroku.",
      link: "https://tip-out-calc.herokuapp.com/"
    },
    {
      name: "Code Pen",
      id: "img6",
      src: codepen,
      tagline: "A couple small programs to showcase some html/css/javascript",
      link: 'https://codepen.io/mountainguy76935'
    },
    {
      name: "Regular Calculator",
      id: "img7",
      src: calc,
      tagline: "This is just a little calculator I made using React",
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