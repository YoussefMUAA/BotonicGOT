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

    const url = 'https://api.quotable.io/random'
    const res = await fetch(url, {
      url: url,
      method: 'GET',
      params: {},
    })
    session.resp = await res.json();

 
    const author = await session.resp.author;
    const content = await session.resp.content;
    

  }

  //Really don't know why, but it doesn't render the strings
  render() {
    return (
      <>
            <Title>{this.content}</Title>
            <Text>{this.author}</Text>
          
      </>
    )
  }

}
