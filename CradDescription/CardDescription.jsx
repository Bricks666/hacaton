import React from 'react';
import {Link} from "react-router-dom";
import MyStyle from "./CardDescription.module.css";

const CardDescription = (props) => {
    return (
        <section className={MyStyle.Section}>
            <h1>{props.SectionTitle}</h1>

            <div className={MyStyle.Content}>

                <div>
                    <div className={MyStyle.SubTitle}>
                        <div className={MyStyle.line} />
                        <h4> {props.SubTitle}</h4>
                    </div>

                    <h2>{props.Title}</h2>
                    <p>
                        {props.Body}
                    </p>
                    <Link className={MyStyle.Link}>Подробнее &rarr;</Link>
                </div>

                <img src="https://cdn1.ozone.ru/s3/multimedia-7/6029382307.jpg" alt="#"/>
            </div>
        </section>
    );
};

export default CardDescription;