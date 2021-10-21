export const Picture = (props) => {
  return (
    <picture>
      <img src={`${props.src} x1`} srcSet={`${props.src} x2`}/>
    </picture>
  )
}
