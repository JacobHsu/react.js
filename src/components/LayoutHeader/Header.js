/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * @emails react-core
 * @flow
 */


import Container from 'components/Container';

import {Link} from 'gatsby';
import React from 'react';
import {colors} from 'theme';

import logoSvg from 'icons/logo.svg';

const Header = ({location}: {location: Location}) => (
  <header
    css={{
      backgroundColor: colors.darker,
      color: colors.white,
      position: 'fixed',
      zIndex: 1,
      width: '100%',
      top: 0,
      left: 0,
      '@media print': {
        display: 'none',
      },
    }}>

    <Container>
      <div
        css={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          height: 60,
        }}>
        <Link
          css={{
            display: 'flex',
            marginRight: 10,
            height: '100%',
            alignItems: 'center',
            color: colors.brand,

            ':focus': {
              outline: 0,
              color: colors.white,
            },

          }}
          to="/">
          <img src={logoSvg} alt="" height="20" />
          <span
            css={{
              color: 'inherit',
              marginLeft: 10,
              fontWeight: 700,
              fontSize: 20,
              lineHeight: '20px'
            }}>
            React
          </span>
        </Link>

        <nav
          css={{
            flex: '1',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'stretch',
            overflowX: 'auto',
            overflowY: 'hidden',
            WebkitOverflowScrolling: 'touch',
            height: '100%',

            // Hide horizontal scrollbar
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            '::-webkit-scrollbar': {
              display: 'none',
            },
          }}>
        </nav>


      </div>
    </Container>
  </header>
);

export default Header;
