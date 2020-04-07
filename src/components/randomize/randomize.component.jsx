import React from 'react';
import { CardList } from '../card-list/card-list.component';
import Data from '../../util/data'

export const Randomize = () => {
  const randomize = (param) => {
        let data = [...param];
        let newData = [];
        while(data[0]) {
          let ind = Math.floor(Math.random()*data.length);
          newData.push(data[ind]);
          data.splice(ind, 1)
        }
        return newData
  }
  const pictures = randomize(Data); 
    return (
      <CardList picture = {pictures} />
    )
}