import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import style from './index.styl';

class Header extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <ul className={style.menu}>
                <Link className={style.link} to={'/'}>Главная</Link>
                <Link className={style.link} to={'/create'}>Добавить</Link>
            </ul>
        );
    }
}

export default Header;

