import {
  Button,
  Carousel,
  Element,
  Pic,
  RequestContext,
  Subtitle,
  Text,
  Title,
} from '@botonic/react'
import fetch from 'isomorphic-fetch'
import React from 'react'


export default class extends React.Component {
  static contextType = RequestContext
  static async botonicInit({ session }) {

    const url = 'https://anapioficeandfire.com/api/houses/'
    const res = await fetch(url, {
      url: url,
      method: 'GET',
      params: {},
    })
    session.resp = await res.json()

    //We filter our array to include only the ones WITH WORDS
    session.resp = await session.resp.filter((item) => item.words);


  };

  //Didn't figure out the way to export the object to use it in an other Action (houseWords), just like in Angular we would do with the use of service.

  render() {
    return (
      <Carousel>
        {this.context.session.resp.map((e, i) => (
          <Element key={e.name}>
            <Title>{e.name}</Title>
            <Button payload='houseWords'>Show words</Button>
          </Element>
        ))}
      </Carousel>
    )
  }
}


