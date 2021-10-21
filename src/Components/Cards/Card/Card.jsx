import { Component } from "react";
import { Link } from "react-router-dom";
import { Picture } from "../../Shared/Picture/Picture";

import CardStyle from "./Card.module.css";

export class Card extends Component {
	constructor(props) {
		super(props);

		this.state = {
			showAll: false,
		};

		this.toggleShow = this.toggleShow.bind(this);
	}

	toggleShow() {
		this.setState({ showAll: !this.state.showAll });
		console.log(this.state);
	}

	render() {
		return (
			<li
				className={`${CardStyle.card} ${
					this.state.showAll ? CardStyle.all : CardStyle.some
				}`}
				onClick={this.toggleShow}
			>
				<span className={CardStyle.preWords}>Кратко</span>
				<h3 className={CardStyle.header}>{this.props.name}</h3>
				<Picture className={CardStyle.picture} src={this.props.img} />
				<p className={CardStyle.description}>{this.props.children}</p>
				<Link className={CardStyle.link} to={`/sightsides/${this.props.id}`}>
					Подробнее →
				</Link>
			</li>
		);
	}
}
