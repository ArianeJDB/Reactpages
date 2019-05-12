import React from 'react';

import './MediaCard.css';


class MediaCard extends React.Component {
  render() {
    const name = <h1 className="name">{this.props.name}</h1>;
    const header = (            
    <div className="user__profile">
      <img src={this.props.img} className="App-logo" alt="logo" />
      <div className="name__profile">
        {name}
        <p className="date">{this.props.date}</p>
      </div>
    </div>
    );
    const text =(
      <p className="new">
              {this.props.text}
            </p>
    );
    const footer =(
      <div className="read__more">
              <a className="read__link" href="#card">
                Leer más...
              </a>
              <p className="like">
                {this.props.likes} 
                <i className="fas fa-heart" />
              </p>
            </div>
    );
    const all = (
      <div className="App">
        <main className="App-main">
          <div className="user">
            {header}
            {text}
            {footer}
          </div>
        </main>
      </div>
    );
    return all;
  }
}

export default MediaCard;
