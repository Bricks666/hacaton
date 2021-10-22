import { Map } from "../Shared/Map/Map"
import { SightContacts } from "./Contacts/SightContacts"
import { SimilarSight } from "./SimilarSight/SimilarSight"
import { Slider } from "./Slider/Slider"
import { Link } from "react-router-dom"

export const Sight = (props) => {
  return (
    <section>
      <h2>{props.name}</h2>
      <Slider photos={props.photos}/>
      <p>{props.description}</p>
      <Map header={"Объект на карте"}>
        <Link>Дополненная реальность</Link>
      </Map>
      <SightContacts contacts={props.contacts}/>
      <SimilarSight sights={props.sights} />
    </section>
  )
}
