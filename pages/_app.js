import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Layout from '../components/layout/layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
