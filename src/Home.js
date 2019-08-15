import React, { Component } from 'react';
import { Link } from 'react-router-dom'




class Home extends Component {



  render() {
    return (


      <div >
      <Link className="link" to="/browse"><span>🍕 Enter</span></Link>


      <div className="pictures" id="cf">
      <img className="bottom" src="https://cdn.vox-cdn.com/thumbor/n6dzbQc_SjIpJKETDxctIajWRkk=/0x0:3000x2002/1200x800/filters:focal(1260x761:1740x1241)/cdn.vox-cdn.com/uploads/chorus_image/image/64022593/GettyImages_171171258.0.jpg" />
      <img className="top" src="https://images.squarespace-cdn.com/content/v1/5af0e0bc9772aea4d08a4628/1529105627870-T2MQK9VQNP1FIOBJBD6R/ke17ZwdGBToddI8pDm48kOggE0Ch6pMGalwtLMqzsSB7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1Ufo5RWkg_J4of0jUNHaDHx6pZKBvpVYzidBWCapg0tuoMuEaB2HPGSYDV-11UTcW2g/Afropunk_101516-42.jpg" />
      <img className="bottom" src="https://assets3.thrillist.com/v1/image/1628198/size/tmg-article_default_mobile;jpeg_quality=20.jpg"/>
    </div>


      </div>

    );
  }

}

export default Home
;
