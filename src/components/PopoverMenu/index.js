import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router-dom'

import style from './index.styl'

class Header extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className={style.fade} onClick={this.props.toggleShow}>
                <ul className={style.menu}>
                    <Link className={style.link} to={'/'}>Главная</Link>
                    <Link className={style.link} to={'/create'}>Добавить</Link>
                </ul>
            </div>
        )
    }
}

Header.propTypes = {
    toggleShow: PropTypes.func.isRequired
};

export default Header


