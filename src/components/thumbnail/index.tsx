import React from 'react'
import { AppThumbnail, ThumbImg } from './style'

const Thumbnail = (props: {img: string}) => {
  return (
    <AppThumbnail>
        <ThumbImg src={props.img} />
    </AppThumbnail>
  )
}

export default Thumbnail