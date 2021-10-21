export const Picture = (props) => {
  return (
    <picture className={props.className}>
      <img className={props.className} src={`${props.src} x1`} srcSet={`${props.src} x2`} alt={props.alt}/>
    </picture>
  )
}
