import style from './Button.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import propType from 'prop-types';
const cx = classNames.bind(style);
function Button({
    to,
    href,
    children,
    text = false,
    disabled = false,
    primary = false,
    small = false,
    large = false,
    rounded = false,
    outline = false,
    className,
    leftIcon,
    rightIcon,
    onClick,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps
    };
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof [key] === 'function') {
                delete props[key];
            }
        });
    }
    const classes = cx('wrapper', {
        [className]: className, // code css rieng
        primary,
        outline,
        small,
        large,
        text,
        disabled,
        rounded
    });
    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}
Button.propType = {
    // isRequired bắt buộc phải có , node : dùng cho các con
    children: propType.node.isRequired,
    to: propType.node,
    href: propType.node,
    text: propType.bool,
    disabled: propType.bool,
    primary: propType.bool,
    small: propType.bool,
    large: propType.bool,
    rounded: propType.bool,
    outline: propType.bool,
    className: propType.node,
    leftIcon: propType.node,
    rightIcon: propType.node,
    onClick: propType.func
};
export default Button;
