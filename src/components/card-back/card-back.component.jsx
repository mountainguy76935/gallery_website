import React from "react";
import './card-back.styles.css';

//Later we are going to implement https://www.npmjs.com/package/react-card-flip into this card to put some 
//text on the back! It will be dope.

export const CardBack = props => (
            <div className="cardback">
                <p>Hello! I will be inserting some very interesting text here very soon.
                    My ultimate plan is to make this website a gallery of pictures with several captions which will
                    ultimately describe my travels with my lovely girlfriend. We have gone all over the place,
                    and I look forward to charing some stories soon. Please stay tuned for neat pictures!
                </p>
            </div>
        )

