import { Navigation } from "./Navigation/Navigation"
import { Picture } from "../Shared/Picture/Picture"

export const Header = (props) => {
  return (
    <header>
      <Picture src="/"/>
      <Navigation />
    </header>
  )
}
