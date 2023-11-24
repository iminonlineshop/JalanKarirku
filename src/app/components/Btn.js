'use client';
import React from 'react';
import { PropTypes } from 'prop-types';
import Link from 'next/link';
export default function Button(props) {
  const className = [props.className];

  const onClick = () => {
    if (props.onClick) props.onClick();
  };

  if (props.type === 'link') {
    if (props.isExternal) {
      return (
        <a
          href={props.href}
          className={className.join(' ')}
          style={props.style}
          target={props.target === '_blank' ? '_blank' : undefined}
          rel={props.target === '_blank' ? 'noopener noreferrer' : undefined}
        >
          {props.children}
        </a>
      );
    } else {
      return (
        <Link
          href={props.href}
          className={className.join(' ')}
          style={props.style}
          onClick={onClick}
        >
          {props.children}
        </Link>
      );
    }
  }

  return (
    <>
      <button
        className={className.join(' ')}
        style={props.style}
        onClick={onClick}
      >
        {props.children}
      </button>
    </>
  );
}

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'link']),
  onclick: PropTypes.func,
  className: PropTypes.string,
  target: PropTypes.string,
  href: PropTypes.string,
  isExternal: PropTypes.bool,
};
