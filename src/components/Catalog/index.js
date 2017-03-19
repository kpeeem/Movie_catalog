import React, {Component, PropTypes} from 'react';
import Button from 'components/Button';
import cl from 'classnames';
import {Link} from 'react-router-dom';

import style from './index.styl';

export default class extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <ul className={style.main}>
                {
                    this.props.items.map((item, key) => (
                        <li className={style.item} key={item.id}>
                            <Item
                                id={key}
                                item={item}
                            />
                        </li>
                    ))
                }
            </ul>
        );
    }
}

const Item = ({id, item}) => (
    <Link className={style.link} to={`/show/${id}`}>
        <div className={style.poster}>
            <img src={item.img} alt={item.title}/>
        </div>
        <div className={style.descriptionsContainer}>
            <ul className={style.descriptions}>
                <li className={cl(style.movieName, style.description)}>
                    {item.title}
                </li>
                <li className={style.description}>
                    <p className={style.titleDescr}>Год: </p>{item.year}
                </li>
                <li className={style.description}>
                    <p className={style.titleDescr}>Длительность: </p>{item.duration}
                </li>

                {item.categories && <li className={style.description}>
                    <p className={style.titleDescr}>Жанры: </p>
                    {item.categories.list.map((item, key) => ` ${item.name}`)}
                </li>}
                {item.collectives && <li className={style.description}>
                    <p className={style.titleDescr}>Актеры: </p>
                    {item.collectives[0].list.map((item, key) => ` ${item.name}`)}
                </li>}

                <li className={cl(style.description, style.plot)}>
                    {item.plot.length > 70 ? `${item.plot.slice(0, 70)}...` : item.plot}
                </li>
            </ul>
            <Link className={style.editLink} to={`/edit/${id}`}>
                <Button class={style.edit}>Редактировать</Button>
            </Link>

        </div>
    </Link>
);

Item.propTypes = {
    id: PropTypes.number.isRequired,
    item: PropTypes.object.isRequired,
};
