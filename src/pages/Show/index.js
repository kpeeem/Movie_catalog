import React, {Component, PropTypes} from 'react';
import style from './index.styl';
import cl from 'classnames';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Button from 'components/Button';

function mapStateToProps(movies) {
    return {movies};
}

class Show extends Component {
    constructor() {
        super();
    }

    render() {
        const idItem = this.props.match.params.id;
        const movies = this.props.movies;
        const item = movies && movies[idItem];
        return (
            <div className={style.wrapper}>
                {
                    item ?
                        <div className={style.mainContainer}>
                            <div className={style.row}>
                                <div className={style.poster}>
                                    <img src={item.img} alt={item.title}/>
                                </div>
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
                                    <li>
                                        <Link className={style.editLink} to={`/edit/${idItem}`}>
                                            <Button class={style.edit}>Редактировать</Button>
                                        </Link>
                                    </li>

                                </ul>
                            </div>

                            <div className={cl(style.description, style.plot)}>
                                {item.plot}
                            </div>

                        </div>

                        :
                        <div>Нет такого фильма</div>
                }


            </div>
        );
    }
}

Show.propTypes = {
    movies: PropTypes.array.isRequired
};

export default connect(mapStateToProps)(Show);
