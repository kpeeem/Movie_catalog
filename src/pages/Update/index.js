import React, {Component, PropTypes} from 'react';
import Button from 'components/Button';
import style from './index.styl';
import cl from 'classnames';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

function mapStateToProps(movies) {
    return {movies};
}
function mapDispatchToProps(dispatch) {
    return {
        onEdit: (payload) => {
            dispatch({
                type: 'UPDATE_MOVIE',
                payload
            });
        },
    };
}

class Update extends Component {
    constructor() {
        super();
        this.state = {};
    }

    collectForm() {
        return {
            pageid: this.props.match.params.id,
            duration: this.durationInput.value,
            plot: this.plotInput.value,
            img: this.imgInput.value,
            year: this.yearInput.value,
            title: this.titleInput.value,
        }
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
                                <ul className={style.descriptions}>
                                    <li className={style.description}>
                                        <p className={style.titleDescr}>Постер: </p>
                                        <input
                                            required
                                            className={style.imgInput}
                                            type="text"
                                            defaultValue={item.img}
                                            ref={(input) => {
                                                this.imgInput = input;
                                            }}
                                        />
                                    </li>

                                    <li className={style.description}>
                                        <p className={style.titleDescr}>Заголовок: </p>
                                        <input
                                            required
                                            className={style.titleInput}
                                            type="text"
                                            defaultValue={item.title}
                                            ref={(input) => {
                                                this.titleInput = input;
                                            }}
                                        />
                                    </li>
                                    <li className={style.description}>
                                        <p className={style.titleDescr}>Год: </p>
                                        <input
                                            className={style.yearInput}
                                            type="text"
                                            defaultValue={item.year}
                                            ref={(input) => {
                                                this.yearInput = input;
                                            }}
                                        />
                                    </li>
                                    <li className={style.description}>
                                        <p className={style.titleDescr}>Длительность: </p>
                                        <input
                                            className={style.durationInput}
                                            type="text"
                                            defaultValue={item.duration}
                                            ref={(input) => {
                                                this.durationInput = input;
                                            }}
                                        />
                                    </li>

                                    {item.categories && <li className={style.description}>
                                        <p className={style.titleDescr}>Жанры: </p>
                                        {item.categories.list.map((item, key) => ` ${item.name}`)}
                                    </li>}
                                    {item.collectives && <li className={style.description}>
                                        <p className={style.titleDescr}>Актеры: </p>
                                        {item.collectives[0].list.map((item, key) => ` ${item.name}`)}
                                    </li>}
                                    <li className={cl(style.description)}>
                                        <p className={style.titleDescr}>Описание: </p>
                                        <textarea
                                            required
                                            defaultValue={item.plot}
                                            className={style.plotInput}
                                            ref={(input) => {
                                                this.plotInput = input;
                                            }}
                                        />
                                    </li>
                                </ul>
                            </div>

                            <div className={style.controls}>
                                <Button
                                    class={style.save}
                                    onClick={() => ::this.props.onEdit(this.collectForm())}>
                                    Сохранить
                                </Button>
                                <Button
                                    class={style.cancel}
                                    onClick={() => history.go(-1)}>
                                    Отмена
                                </Button>
                            </div>

                        </div>
                        :
                        <div>Нет такого фильма</div>
                }


            </div>
        );
    }
}

Update.propTypes = {
    movies: PropTypes.array.isRequired,
    onEdit: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Update);
