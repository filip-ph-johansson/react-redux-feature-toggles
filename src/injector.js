import React from 'react';
import { connect } from 'react-redux';

const injector = (Component) => {
  const Injector = (props) => (
    <Component
      {...props}
    />
  );

  const mapStateToProps = (state) => ({
    featureToggles: state.featureToggles
  });

  return connect(mapStateToProps)(Injector);
};

export default injector;
