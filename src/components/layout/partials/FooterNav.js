import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        {/* <li>
          <Link to="#0">Contact</Link>
        </li>
        <li>
          <Link to="#0">About us</Link>
        </li>
        <li>
          <Link to="#0">FAQ's</Link>
        </li>
        <li>
          <Link to="#0">Support</Link>
        </li> */}
        <li>
        <b>Hours</b><br/>
              Monday - Friday:8am - 5pm<br/>
              Saturday: By appointment<br/>
              Sunday:  By appointment<br/>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;