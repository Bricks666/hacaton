import ButtonStyle from './Button.module.css';

export const Button = (props) => {
  return (
    <button className={`${ButtonStyle.button} ${props.className ?? ""}`} onClick={props.onClick} type={props.type}>
      {props.children}
    </button>
  )
}
