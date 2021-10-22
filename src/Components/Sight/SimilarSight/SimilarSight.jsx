import { Link } from 'react-router-dom'
import { Card } from '../../Cards/Card/Card'

import SimilarSightStyle from './SimilarSight.module.css'

export const SimilarSight = (props) => {
  return(
    <action>
      <h3 className={SimilarSightStyle.header}>Также вы можете посмотреть</h3>
      <ul>
        {props.sights.map((sight) => {
          return <Card {...sight} key={sight.id}/>
        })}
      </ul>
      <Link to="/sightsides">Показать еще достопримечательности</Link>
    </action>
  )
}
