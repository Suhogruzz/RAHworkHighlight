import New from '../New/New';
import Popular from '../Popular/Popular';
import React from 'react';


export default function Highlighted(Component) {
    return class HighlightedComp extends React.Component {
      render() {
        if (this.props.views < 100) {
          return (<New><Component {...this.props} /></New>);
        }
        if (this.props.views > 1000) {
          return (<Popular><Component {...this.props} /></Popular>);
        }
        return (<Component {...this.props} />);
      }
    }
  }