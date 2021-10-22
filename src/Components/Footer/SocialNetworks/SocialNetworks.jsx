import SNStyle from "./SocialNetworks.module.css";

export const SocialNetworks = (props) => {
	return (
		<div className={SNStyle.wrapper}>
			<h3 className={SNStyle.header}>Наши соцсети</h3>
			<ul className={SNStyle.list}>
				<li className={SNStyle.item}>
					<a
						href="https:\\whatsapp.com"
						className={`${SNStyle.link} ${SNStyle.whatsapp}`}
						aria-label="Ссылка на страницу ватсапп"
					>
						Whatsapp
					</a>
				</li>
				<li className={SNStyle.item}>
					<a
						href="https:\\instagram.com"
						className={`${SNStyle.link} ${SNStyle.instagram}`}
						aria-label="Ссылка на страницу инстаграма"
					>
						Instagram
					</a>
				</li>
				<li className={SNStyle.item}>
					<a
						href="https:\\linked.com"
						className={`${SNStyle.link} ${SNStyle.linked}`}
						aria-label="Ссылка на страницу линкид"
					>
						Linked
					</a>
				</li>
			</ul>
		</div>
	);
};
