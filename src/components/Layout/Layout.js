/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * @emails react-core
 * @flow
 */


import React, {Component} from 'react';
import Header from 'components/LayoutHeader';

class Template extends Component {
  render() {
    const {location} = this.props;

    return (
      <div
        css={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: 'calc(100vh - 40px)',
        }}>
          <Header location={location} />
          import layout
      </div>
    );
  }
}

export default Template;
