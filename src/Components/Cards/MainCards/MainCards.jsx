import { Link } from "react-router-dom"
import Cards from "../../Shared/Cards/Cards"
import { Card } from "../Card/Card"

import MainCardsStyle from "./MainCards.module.css"

export const MainCards = (props) => {
  return(
    <Cards header="Самые популярные достопримечательности" Card={Card}>
      <Link className={MainCardsStyle.more} to="/sightsides">Подробнее</Link>
    </Cards>
  )
}
