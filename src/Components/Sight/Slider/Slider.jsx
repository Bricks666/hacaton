import { useState } from 'react'
import {Button} from '../../Shared/Button/Button'
import { Picture } from '../../Shared/Picture/Picture'

export const Slider = (props)  =>{
  const [startIndex, setStart] = useState(0);
  const [endIndex, setEnd] = useState(props.photos.length > 3? 3: props.photos.length )
  const slides = [];
  for(let i = startIndex; i !== endIndex; i++) {
    if(i )
  }

  return (
    <div>
      <Button></Button>
      <ul>
        <li><Picture /></li>
        <li><Picture /></li>
        <li><Picture /></li>
        </ul>
      <Button></Button>
    </div>
  )
}
