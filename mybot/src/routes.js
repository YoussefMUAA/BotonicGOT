import React from 'react';
import { Text, Reply } from '@botonic/react';
import housesCarousel from './actions/houses/housesCarousel';
import randomQuote from './actions/randomQuote';

//As you may notice I need to learn a lot more about Regex.

export const routes = [
  {
    //As specified in the description, here it should trigger the action by typing anything but didn't know how to solve it
    path: 'Initial',
    text: /hi/i,
    action: housesCarousel,
  },
      {
        path: 'Secondary',
        text: /he/i,
        action: randomQuote,
      },
         
];


