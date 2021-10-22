import { Card } from '../../Shared/Card/Card'

import SimilarSightStyle from './SimilarSight.module.css'

export const SimilarSight = (props) => {
  return(
    <article className={props.className?? ""}>
      <h3 className={SimilarSightStyle.header}>Также вы можете посмотреть</h3>
      <ul className={SimilarSightStyle.list}>
        {props.sights.map((sight) => {
          return <Card className={SimilarSightStyle.item} {...sight} key={sight.id}/>
        })}
      </ul>
    </article>
  )
}
