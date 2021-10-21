import React from "react";
import MyStyle from "./Cards.module.css";
import { Link } from "react-router-dom";

const Card = (props) => {
	return (
		<li className={MyStyle.MyCard}>
			<Link to={props.Link} className={MyStyle.MyCardDescription}>
				{props.children}
			</Link>
		</li>
	);
};

const Cards = () => {
	return (
		<ul className={MyStyle.wrapper}>
			<Card
				children="Карточка"
				Link="https://www.google.com/maps/@54.5133512,36.2651914,3a,75y,94.97h,90t/data=!3m7!1e1!3m5!1sLHDFlzKUpes8q3DRwh3hGA!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DLHDFlzKUpes8q3DRwh3hGA%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D98.51453%26pitch%3D0%26thumbfov%3D100!7i13312!8i6656!5m1!1e1?hl=ru-RU"
			/>
			<Card
				children="Карточка"
				Link="https://www.google.com/maps/@54.5133512,36.2651914,3a,75y,94.97h,90t/data=!3m7!1e1!3m5!1sLHDFlzKUpes8q3DRwh3hGA!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DLHDFlzKUpes8q3DRwh3hGA%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D98.51453%26pitch%3D0%26thumbfov%3D100!7i13312!8i6656!5m1!1e1?hl=ru-RU"
			/>
			<Card
				children="Карточка"
				Link="https://www.google.com/maps/@54.5133512,36.2651914,3a,75y,94.97h,90t/data=!3m7!1e1!3m5!1sLHDFlzKUpes8q3DRwh3hGA!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DLHDFlzKUpes8q3DRwh3hGA%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D98.51453%26pitch%3D0%26thumbfov%3D100!7i13312!8i6656!5m1!1e1?hl=ru-RU"
			/>

			<Card
				children="Карточка"
				Link="https://www.google.com/maps/@54.5133512,36.2651914,3a,75y,94.97h,90t/data=!3m7!1e1!3m5!1sLHDFlzKUpes8q3DRwh3hGA!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DLHDFlzKUpes8q3DRwh3hGA%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D98.51453%26pitch%3D0%26thumbfov%3D100!7i13312!8i6656!5m1!1e1?hl=ru-RU"
			/>
			<Card
				children="Карточка"
				Link="https://www.google.com/maps/@54.5133512,36.2651914,3a,75y,94.97h,90t/data=!3m7!1e1!3m5!1sLHDFlzKUpes8q3DRwh3hGA!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DLHDFlzKUpes8q3DRwh3hGA%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D98.51453%26pitch%3D0%26thumbfov%3D100!7i13312!8i6656!5m1!1e1?hl=ru-RU"
			/>
			<Card
				children="Карточка"
				Link="https://www.google.com/maps/@54.5133512,36.2651914,3a,75y,94.97h,90t/data=!3m7!1e1!3m5!1sLHDFlzKUpes8q3DRwh3hGA!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DLHDFlzKUpes8q3DRwh3hGA%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D98.51453%26pitch%3D0%26thumbfov%3D100!7i13312!8i6656!5m1!1e1?hl=ru-RU"
			/>

			<Card
				children="Карточка"
				Link="https://www.google.com/maps/@54.5133512,36.2651914,3a,75y,94.97h,90t/data=!3m7!1e1!3m5!1sLHDFlzKUpes8q3DRwh3hGA!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DLHDFlzKUpes8q3DRwh3hGA%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D98.51453%26pitch%3D0%26thumbfov%3D100!7i13312!8i6656!5m1!1e1?hl=ru-RU"
			/>
			<Card
				children="Карточка"
				Link="https://www.google.com/maps/@54.5133512,36.2651914,3a,75y,94.97h,90t/data=!3m7!1e1!3m5!1sLHDFlzKUpes8q3DRwh3hGA!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DLHDFlzKUpes8q3DRwh3hGA%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D98.51453%26pitch%3D0%26thumbfov%3D100!7i13312!8i6656!5m1!1e1?hl=ru-RU"
			/>
			<Card
				children="Карточка"
				Link="https://www.google.com/maps/@54.5133512,36.2651914,3a,75y,94.97h,90t/data=!3m7!1e1!3m5!1sLHDFlzKUpes8q3DRwh3hGA!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DLHDFlzKUpes8q3DRwh3hGA%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D98.51453%26pitch%3D0%26thumbfov%3D100!7i13312!8i6656!5m1!1e1?hl=ru-RU"
			/>
		</ul>
	);
};

export default Cards;
