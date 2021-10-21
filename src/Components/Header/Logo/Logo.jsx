import { Picture } from "../../Shared/Picture/Picture";

import logo from './logo.svg'

export const Logo = (props) => {
	return <Picture className={props.className} src={logo} />;
};
