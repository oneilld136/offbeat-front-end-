import React, { Component } from 'react';
import Navigation from './Navigation'



class Home extends Component {



  render() {
    return (


      <div>
      <Navigation />
      <div className="pictures" id="cf">
      <img className="bottom" src="https://cdn.newsday.com/polopoly_fs/1.9529241.1413927767!/httpImage/image.jpg_gen/derivatives/display_1004/image.jpg" />
      <img className="top" src="https://assets.atlasobscura.com/media/W1siZiIsInVwbG9hZHMvcGxhY2VfaW1hZ2VzLzFkYjcwZjg1MDFhZmUxMjAzYl9JTUdfNjg0OS5KUEciXSxbInAiLCJjb252ZXJ0IiwiIl0sWyJwIiwiY29udmVydCIsIi1xdWFsaXR5IDgxIC1hdXRvLW9yaWVudCJdLFsicCIsInRodW1iIiwiMzcyeDI0OCMiXV0/IMG_6849.JPG" />
      <img className="bottom" src="https://trekbible.com/wp-content/uploads/2018/12/tyler-goodell-328460-unsplash.jpg"/>
    </div>


      </div>

    );
  }

}

export default Home
;
