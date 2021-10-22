import {useEffect, useState} from 'react'
import {Button} from '../../Shared/Button/Button'
import { Picture } from '../../Shared/Picture/Picture'

import SliderStyle from './Slider.module.css'

export const Slider = (props)  =>{
  useEffect(() => {
    let currentSlide = 0;
    const slides = document.querySelectorAll(`.${SliderStyle.item}`);
    const id = setInterval(() => {
      slides[currentSlide].classList.remove(SliderStyle.current);
      currentSlide++;

      if(currentSlide === props.photos.length) {
        currentSlide %= props.photos.length;
      }
    console.log(currentSlide)
      slides[currentSlide].classList.add(SliderStyle.current);
    }, 3000)

    return () => {
      clearInterval(id);
    }
  }, [])
  return (
      <div className={SliderStyle.wrapper}>
        <ul className={SliderStyle.list}>
          {props.photos.map(el => <li className={SliderStyle.item}><Picture className={SliderStyle.photo} src={el} /></li>)}
        </ul>
      </div>
  )
}