import { useState } from 'react'
import {Button} from '../../Shared/Button/Button'
import { Picture } from '../../Shared/Picture/Picture'

import SliderStyle from './Slider.module.css'

export const Slider = (props)  =>{
  const photos = props.photos;
  const [startIndex, setStart] = useState(0);
  const [endIndex, setEnd] = useState(photos.length > 3? 3: photos.length )
  const slides = [];
  for(let i = startIndex; i !== endIndex; i++) {
    if(i === photos.length) {
      i = (i % photos.length) - 1;
      continue;
    }

    slides.push(<li className={SliderStyle.item}><Picture src={photos[i]}/>{i}</li>)
  }
  const back = () => {

    setStart(startIndex === 0 ? photos.length - 1 :  startIndex - 1)
    setEnd(endIndex === 0 ? photos.length - 1 :  endIndex - 1)
  }
  const next = () => {
    setStart(startIndex === photos.length - 1 ? 0: startIndex + 1);
    setEnd(endIndex === photos.length - 1? 0: endIndex + 1);
  }
  return (
    <div className={SliderStyle.wrapper}>
      <Button onClick={back} className={SliderStyle.button}>Назад</Button>
      <ul className={SliderStyle.list}>
        {slides}
      </ul>
      <Button onClick={next} className={SliderStyle.button}>Вперед</Button>
    </div>
  )
}
