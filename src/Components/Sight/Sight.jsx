import { Map } from "../Shared/Map/Map"
import { SightContacts } from "./Contacts/SightContacts"
import { SimilarSight } from "./SimilarSight/SimilarSight"
import { Slider } from "./Slider/Slider"
import { Link } from "react-router-dom"

import SightStyle from './Sight.module.css'

export const Sight = (props) => {
  return (
    <section className={SightStyle.wrapper}>
      <h2 className={SightStyle.header}>{props.name}</h2>
      <Slider className={SightStyle.slider} photos={props.photos}/>
      <p className={SightStyle.description}>{props.description}</p>
      <Map className={SightStyle.map} header={"Объект на карте"}>
        <Link className={SightStyle.link}>Дополненная реальность</Link>
      </Map>
      <SightContacts className={SightStyle.contacts} contacts={props.contacts}/>
      <SimilarSight className={SightStyle.similar} sights={props.sights} />
    </section>
  )
}
