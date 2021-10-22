import { Picture } from "../../../Shared/Picture/Picture";

import PicturesStyle from "./Pictures.module.css";

const getNumberClass = (number) => {
	switch (number) {
		case 1: {
			return PicturesStyle.first;
		}
		case 2: {
			return PicturesStyle.second;
		}
		case 3: {
			return PicturesStyle.third;
		}
		case 4: {
			return PicturesStyle.four;
		}
		case 5: {
			return PicturesStyle.five;
		}
		case 6: {
			return PicturesStyle.six;
		}
		case 7: {
			return PicturesStyle.seven;
		}
		default: {
			return "";
		}
	}
};

const renderPhoto = (...urls) => {
	let bigCount = 0;
	let mediumCount = 0;
	let smallCount = 0;

	return urls.map((url, index) => {
		if (bigCount < 1) {
			bigCount++;
			return (
				<Picture
					className={`${PicturesStyle.picture} ${
						PicturesStyle.big
					} ${getNumberClass(index + 1)}`}
					src={url}
				/>
			);
		}
		if (mediumCount < 2) {
			mediumCount++;
			return (
				<Picture
					className={`${PicturesStyle.picture} ${
						PicturesStyle.medium
					} ${getNumberClass(index + 1)}`}
					src={url}
				/>
			);
		}

		if (smallCount < 4) {
			smallCount++;
			return (
				<Picture
					className={`${PicturesStyle.picture} ${
						PicturesStyle.small
					} ${getNumberClass(index + 1)}`}
					src={url}
				/>
			);
		}
		return undefined;
	});
};

export const Pictures = (props) => {
	return (
		<article className={PicturesStyle.section}>
			{renderPhoto(
				"/Государственный музей истории космонавтики.jpeg",
				"/Шарик.jpeg",
				"/Дом-музей А.Л. Чижевского.jpeg",
				"/Планетарий.jpeg",
				"/Ракета-носитель «Восток».jpeg",
				"/Дом-музей К.Э. Циолковского.jpeg",
				"Скульптурная композиция «Встреча Королёва и Циолковского».jpeg"
			)}
		</article>
	);
};
