import React, {Component} from 'react';
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
                type: 'ADD_MOVIE',
                payload
            });
        },
    };
}

class update extends Component {
    constructor() {
        super();
        this.state = {};
    }

    collectForm() {
        return {
            duration: this.durationInput.value,
            plot: this.plotInput.value,
            img: this.imgInput.value,
            year: this.yearInput.value,
            title: this.titleInput.value,
        }
    }

    render() {
        return (
            <div className={style.wrapper}>
                <div className={style.mainContainer}>
                    <div className={style.row}>
                        <ul className={style.descriptions}>
                            <li className={style.description}>
                                <p className={style.titleDescr}>Постер: </p>
                                <input
                                    required
                                    className={style.imgInput}
                                    type="text"
                                    defaultValue=""
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
                                    defaultValue=""
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
                                    defaultValue=""
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
                                    defaultValue=""
                                    ref={(input) => {
                                        this.durationInput = input;
                                    }}
                                />
                            </li>

                            <li className={cl(style.description)}>
                                <p className={style.titleDescr}>Описание: </p>
                                <textarea
                                    required
                                    defaultValue=""
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
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(update);
