import { NavLink } from "react-router-dom"

const SubNavigation = (props) => {
  return (
    <ul>
      {props.children}
    </ul>
  )
}

export const Navigation = (props) => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" >Домой</NavLink>
        </li>
        <li>
          Что делать
          <SubNavigation>
            <li><NavLink to="/">Что то</NavLink></li>
            <li><NavLink to="/">Еще что то</NavLink></li>
            <li><NavLink to="/">А потом и по чаю</NavLink></li>
          </SubNavigation>
        </li>
        <li>
          Чем заняться
          <SubNavigation>
            <li><NavLink to="/">Можно почитать</NavLink></li>
            <li><NavLink to="/">Поиграть</NavLink></li>
            <li><NavLink to="/">Поплакать(Очень рекомендуем)</NavLink></li>
          </SubNavigation>
        </li>
      </ul>
    </nav>

  )
}
