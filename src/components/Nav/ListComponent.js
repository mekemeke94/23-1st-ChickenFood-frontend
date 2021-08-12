import React from 'react';
import { withRouter } from 'react-router-dom';
import './nav.scss';

class ListComponent extends React.Component {
  render() {
    const TOKEN = localStorage.getItem('TOKEN');
    const { path, classname, imgClassName, src, data } = this.props;

    const test = e => {
      const btnClassName = e.target.className;
      if (btnClassName === 'pageMove logout') {
        return console.log('good') && localStorage.removeItem('TOKEN');
      } else {
        return this.props.history.push(path);
      }
    };

    return (
      <li>
        <div className={classname} onClick={test}>
          <img className={imgClassName} src={src} />
          {data}
        </div>
      </li>
    );
  }
}

export default withRouter(ListComponent);
