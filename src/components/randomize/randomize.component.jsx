import React from 'react';
import { CardList } from '../card-list/card-list.component';

export const Randomize = props => (
            <CardList picture = {(function(param) {
                let constant = [...param];
                let newArr = [...param];
                let test = [];
                let num = 0;
                for(let i =0; i<constant.length; i++) {
                  do{
                    num = Math.floor(Math.random()*constant.length);
                  }
                  while(test.indexOf(num)>=0);
                  newArr.splice(i, 1, constant[num]);
                  test.push(num);
                };
                return newArr;
              })(props.pictures)} />
);