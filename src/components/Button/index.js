import React, {Component, PropTypes} from 'react';
import cl from 'classnames';
import style from './index.styl'

class Button extends Component {
    constructor() {
        super();
    };

    render() {
        return (
            <div className={cl(style.main, this.props.class)} onClick={this.props.onClick}>
                {this.props.children}
            </div>
        )
    };
}

Button.propTypes = {
    children: React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.element
    ]),
    class: React.PropTypes.string,
    onClick: React.PropTypes.func,
};

export default Button;