import React, {Component, PropTypes} from 'react';
import style from './index.styl';

class Burger extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className={style.main}>
                {
                    !this.props.show ?
                        <div
                            onClick={::this.props.toggleShow}
                            className={style.burger}
                        >
                            Menu
                        </div>
                        :
                        <div
                            onClick={::this.props.toggleShow}
                            className={style.close}
                        >
                            Close
                        </div>

                }
            </div>
        );
    }
}

Burger.propTypes = {
    toggleShow: PropTypes.func.isRequired
};

export default Burger;

