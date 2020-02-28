import kayak from '../pictures/kayak.JPG';
import tips from "../pictures/tips.png";
import github from "../pictures/github.png";
import codepen from '../pictures/codepen.jpg';
import shapes from '../pictures/shapes.jpg';

const data = [
    {
      name: "Shapes",
      id: "img1",
      src: shapes,
      tagline: "App with shapes! Full screen and click around...",
      link: "https://polar-plains-71031.herokuapp.com/"
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
    // {
    //   name: "cat",
    //   id: "img4",
    //   src: "https://thumbs.dreamstime.com/z/red-cat-16532510.jpg",
    //   tagline: "He's a cutie pie with tiny little ears, yeehaw"
    // },
    {
      name: "Github",
      id: "img5",
      src: github,
      tagline: "My github! This site has some of my solutions to problems from the Euler Project, FreeCodeCamp, and Code Wars.",
      link: 'https://github.com/mountainguy76935'
    },
    {
      name: "Tip out calculator (part 2)",
      id: "img6",
      src: "https://bachasoftware.com/wp-content/uploads/2019/11/express.js-logo-2-1024x568.jpg",
      tagline: "Click here to check out my tip out calculator, implementing routing, mongoDB, express, and heroku.",
      link: "https://whispering-dawn-27805.herokuapp.com/home"
    },
    // {
    //   name: "whales",
    //   id: "img7",
    //   src: "https://images2.minutemediacdn.com/image/upload/c_fill,g_auto,h_1248,w_2220/f_auto,q_auto,w_1100/v1555389498/shape/mentalfloss/istock_000046395108_small_0.jpg",
    //   tagline: "Our best friends on the planet, and greatest singers"
    // },
    {
      name: "code pen",
      id: "img8",
      src: codepen,
      tagline: "A couple small programs to showcase some html/css/javascript",
      link: 'https://codepen.io/mountainguy76935'
    }
  ];

  export default data;