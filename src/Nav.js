import React, { Component } from 'react';

const menu = [
  {
    children: 'About',
    className: 'order-1-ns w-20',
    href: '#about'
  },
  {
    children: 'At a Glance',
    className: 'order-2-ns w-20',
    href: '#glance'
  },
  {
    children: 'Details',
    className: 'order-2-ns w-20',
    href: '#details'
  },
  {
    children: 'Call for Ideas',
    className: 'order-3-ns w-20',
    href: '#ideas'
  },
  {
    children: 'Tickets',
    className: 'order-4-ns w-20',
    href: '#tickets'
  },
  {
    children: 'Contact',
    className: 'order-4-ns w-20',
    href: '#contact'
  }
];


const NavItem = ({className, href, logo, children}) => (
  <li className={`mh2-ns f6 f4-l tc ${className}`}>
    <a className="white no-underline" href={href}>
      {children}
    </a>
  </li>
);

class Nav extends Component {
  constructor(props) {
    super(props)
  }
  render () {
    return (
      <nav className="pt3 pt4-ns mb4 mb0-ns">
        <ul className="list flex flex-wrap flex-nowrap-ns justify-between items-center pa0 ma0">
          {menu.map(item => <NavItem {...item} />)}
        </ul>
      </nav>      
    )
  }
}

export default Nav