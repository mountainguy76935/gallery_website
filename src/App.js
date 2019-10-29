import React from 'react';
import { Randomize } from './components/randomize/randomize.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pictures: [ 
        {
          name: "beach",
          id: "img1",
          src: "https://img1.10bestmedia.com/Images/Photos/352450/GettyImages-913753556_55_660x440.jpg",
          tagline: "Isn't that just frikkin nice??"
        },
        {
          name: "forest",
          id: "img2",
          src: "https://ichef.bbci.co.uk/news/320/cpsprodpb/B7B0/production/_101542074_gettyimages-956391468.jpg",
          tagline: "makes me think of little magical elf mother fuckers"
        },
        {
          name: "downtown",
          id: "img3",
          src: "https://upload.wikimedia.org/wikipedia/commons/1/1c/Laramie_Downtown_Historic_District.jpg",
          tagline: "IN THE OOOOOOOOOOLD WEST"
        },
        {
          name: "cat",
          id: "img4",
          src: "https://thumbs.dreamstime.com/z/red-cat-16532510.jpg",
          tagline: "He's a cutie pie with tiny little ears, yeehaw"
        },
        {
          name: "cozy room",
          id: "img5",
          src: "https://www.craftylittlegnome.com/wp-content/uploads/2018/10/bed-bedroom-contemporary-1329711.jpg",
          tagline: "makes you wanta take a luxurious nappy nap, eh?"
        },
        {
          name: "mountains",
          id: "img6",
          src: "https://www.worldatlas.com/r/w728-h425-c728x425/upload/66/14/d8/kangchenjunga.jpg",
          tagline: "shred that gnar pow, boof hound!"
        },
        {
          name: "whales",
          id: "img7",
          src: "https://images2.minutemediacdn.com/image/upload/c_fill,g_auto,h_1248,w_2220/f_auto,q_auto,w_1100/v1555389498/shape/mentalfloss/istock_000046395108_small_0.jpg",
          tagline: "Our best friends on the planet, and greatest singers"
        },
        {
          name: "snowy town",
          id: "img8",
          src: "https://previews.123rf.com/images/zssp/zssp1802/zssp180200040/96198046-a-small-snowy-town.jpg",
          tagline: "Cozy and makes you wanta get y'all some hot cocoa!!"
        }
      ],
      searchField: "",
    }
  }
  
  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }
 
  render() {
    const { pictures, searchField } = this.state; 
    const filteredPictures = pictures.filter(picture => 
        picture.name.toLowerCase().includes(searchField.toLowerCase())
      );
    return (
    <div className='App'>
      <h1>Welcome To My Website</h1>
            <br />
            <br />
      <SearchBox 
        placeholder = 'search pictures'
        handleChange = {this.handleChange}
      />
      <Randomize pictures = {filteredPictures} />
    </div>
  );
  }
}

export default App;
