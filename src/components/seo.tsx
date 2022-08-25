import React from "react";
import {Helmet} from "react-helmet";

// import Fav from '../../favicon';
import Fav16 from '../static/favicon-16x16';
import Fav32 from '../static/favicon-32x32';
import FavApple from '../static/apple-touch-icon';

class SEO extends React.Component {
  render () {
    return (
        <div className="application">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Vivek Mengu</title>
                <link rel="canonical" href="https://vivekmengu016.github.io/" />

                {/* <link rel="icon" type="image/x-icon" href={Fav} /> */}
                <link rel="apple-touch-icon" sizes="180x180" href={FavApple} />
                <link rel="icon" type="image/png" sizes="32x32" href={Fav32} />
                <link rel="icon" type="image/png" sizes="16x16" href={Fav16} />
            </Helmet>
        </div>
    );
  }
};

export default SEO;