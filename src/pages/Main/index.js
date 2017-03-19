import React, {Component, PropTypes} from 'react';
import cl from 'classnames';
import {connect} from 'react-redux';
import Catalog from 'components/Catalog';
import style from './index.styl';

function mapStateToProps(movies) {
    return {movies};
}

class Main extends Component {
    constructor() {
        super();
    }

    render() {
        const {movies} = this.props;
        return (
            <div className={style.wrapper}>
                <div className={cl(style.container)}>
                    {movies ? <Catalog items={movies}/> : 'Каталог пуст'}
                </div>
            </div>
        );
    }
}

Main.propTypes = {
    movies: PropTypes.array.isRequired
};

export default connect(mapStateToProps)(Main);

