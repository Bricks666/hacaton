import React from "react";
import MyStyle from "./Cards.module.css";

const cardArray = [
	{
		id: 0,
		name: "Какое то название",
		text: "Тут должен быть полный текст-заглушка, но к сожалению, его пока что нет, но, надеемся, что он скоро появится в нашем распоряжении. А пока что тут будет вот такая рыба, которую любят есть некоторые коты. Кстате о рыбе, тут такой вкусный зеленой чай. Точка точка точка тире тире тире точка точка точка",
		img: "https://chudo-udo.info/media/k2/items/cache/f01ce502715837920e87942116372980_XL.jpg",
		to: "/KalugaCard",
	},
	{
		id: 1,
		name: "Какое то название",
		text: "Тут должен быть полный текст-заглушка, но к сожалению, его пока что нет, но, надеемся, что он скоро появится в нашем распоряжении. А пока что тут будет вот такая рыба, которую любят есть некоторые коты. Кстате о рыбе, тут такой вкусный зеленой чай. Точка точка точка тире тире тире точка точка точка",
		img: "https://static.tonkosti.ru/tonkosti/table_img/g192/9696/263193426.jpg",
		to: "/KalugaCard",
	},
	{
		id: 2,
		name: "Какое то название",
		text: "Тут должен быть полный текст-заглушка, но к сожалению, его пока что нет, но, надеемся, что он скоро появится в нашем распоряжении. А пока что тут будет вот такая рыба, которую любят есть некоторые коты. Кстате о рыбе, тут такой вкусный зеленой чай. Точка точка точка тире тире тире точка точка точка",
		img: "https://www.gazprom.ru/f/posts/94/186829/kaluga-03_novyj_razmer.jpg",
		to: "/KalugaCard",
	},
	{
		id: 3,
		name: "Какое то название",
		text: "Тут должен быть полный текст-заглушка, но к сожалению, его пока что нет, но, надеемся, что он скоро появится в нашем распоряжении. А пока что тут будет вот такая рыба, которую любят есть некоторые коты. Кстате о рыбе, тут такой вкусный зеленой чай. Точка точка точка тире тире тире точка точка точка",
		img: "https://lh3.googleusercontent.com/proxy/FF-q1-vV0v1slJAZn1b36oxPTm3e57j8GKuXo6giWoFDu2On-hPxAWQJ4DR4s28LmCa5KASMS3Lk39COSDWxbglcUZwwQ5A4dd-Jyc218Z65FY4_vqOEmen2JOIgRw",
		to: "/KalugaCard",
	},
	{
		id: 4,
		name: "Какое то название",
		text: "Тут должен быть полный текст-заглушка, но к сожалению, его пока что нет, но, надеемся, что он скоро появится в нашем распоряжении. А пока что тут будет вот такая рыба, которую любят есть некоторые коты. Кстате о рыбе, тут такой вкусный зеленой чай. Точка точка точка тире тире тире точка точка точка",
		img: "https://static.mk.ru/upload/entities/2018/11/26/articles/detailPicture/89/a4/92/5a/4705823d4ce1e370b65114354c1d377f.jpg",
		to: "/KalugaCard",
	},
	{
		id: 5,
		name: "Какое то название",
		text: "Тут должен быть полный текст-заглушка, но к сожалению, его пока что нет, но, надеемся, что он скоро появится в нашем распоряжении. А пока что тут будет вот такая рыба, которую любят есть некоторые коты. Кстате о рыбе, тут такой вкусный зеленой чай. Точка точка точка тире тире тире точка точка точка",
		img: "https://static.mk.ru/upload/entities/2019/07/16/12/articles/detailPicture/f2/57/a9/fb/113880462f21711cc9908847eac7d4e6.jpg",
		to: "/KalugaCard",
	},
	{
		id: 6,
		name: "Какое то название",
		text: "Тут должен быть полный текст-заглушка, но к сожалению, его пока что нет, но, надеемся, что он скоро появится в нашем распоряжении. А пока что тут будет вот такая рыба, которую любят есть некоторые коты. Кстате о рыбе, тут такой вкусный зеленой чай. Точка точка точка тире тире тире точка точка точка",
		img: "https://region.center/source/KALUGA2/%D0%9A%D0%B0%D0%BB%D1%83%D0%B3%D0%B0/kaluga-s02.jpg",
		to: "/KalugaCard",
	},
	{
		id: 7,
		name: "Какое то название",
		text: "Тут должен быть полный текст-заглушка, но к сожалению, его пока что нет, но, надеемся, что он скоро появится в нашем распоряжении. А пока что тут будет вот такая рыба, которую любят есть некоторые коты. Кстате о рыбе, тут такой вкусный зеленой чай. Точка точка точка тире тире тире точка точка точка",
		img: "https://mcdn.tvzvezda.ru/storage/news_other_images/2020/01/08/053a0dfea4e24d2796ce14b942796f4b.jpg",
		to: "/KalugaCard",
	},
];
const Cards = (props) => {
	return (
		<section>
			<h2 className={MyStyle.header}>
				{props.header}
			</h2>
			<ul className={MyStyle.wrapper}>
				{cardArray.map((e) => (
					<props.Card {...e} key={e.id}>
						{e.text}
					</props.Card>
				))}
			</ul>
      {props.children}
		</section>
	);
};

export default Cards;