import { Map } from "../Shared/Map/Map"
import { SightContacts } from "./Contacts/SightContacts"
import { SimilarSight } from "./SimilarSight/SimilarSight"
import { SliderWithRouter } from "./Slider/Slider"
import { Link } from "react-router-dom"
import { withRouter } from "react-router"

import SightStyle from './Sight.module.css';

const Sight = (props) => {
  const sights = props.sights.filter(s => s.id !== +props.match.params.id).slice(0, 3)
  const card = props.sights.filter(s => s.id === +props.match.params.id)[0];

  return (
    <section className={SightStyle.wrapper}>
      <h2 className={SightStyle.header}>{card.name}</h2>
      <SliderWithRouter className={SightStyle.slider} photos={[card.image, "/Ракета-носитель «Восток».jpeg", "/Памятник Н.Ф. Фёдорову.jpeg"]}/>
      <p className={SightStyle.description}>{card.fullDescribe}</p>
      <Map className={SightStyle.map} header={"Объект на карте"}>
        <Link className={SightStyle.link}>Дополненная реальность</Link>
      </Map>
      <SightContacts className={SightStyle.contacts} contacts={[
        {term: "email", description: card.email},
        {term: "phone", description: card.phone},
        {term: "site", description: card.site, isLink: true, link: card.site }
        ]}/>
      <SimilarSight className={SightStyle.similar} sights={sights} />
    </section>
  )
}

export const SightWithRouter = withRouter(Sight);
