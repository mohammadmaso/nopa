import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { Global, css } from '@emotion/react';
import 'prism-themes/themes/prism-shades-of-purple.css';
import 'focus-visible/dist/focus-visible';
import { nopaTheme } from '../styles/theme';
import { firePageView } from '../lib/gtag';
import { StickyBanner } from '../components/sticky-banner';
import Fonts from '../font/Font';
import NProgress from 'nprogress';
import Router from 'next/router';
import { RtlProvider } from '../components/rtl-provider';
import { DefaultSeo, SocialProfileJsonLd } from 'next-seo';
import '../styles/html.css';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const GlobalStyles = css`
  /*
    This will hide the focus indicator if the 
    element receives focus via the mouse,
    but it will still show up on keyboard focus.
  */
  .js-focus-visible :focus:not([data-focus-visible-added]) {
    outline: none;
    box-shadow: none;
  }

  svg text tspan {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeSpeed;
  }

  code {
    background: #1e1e3f;
    color: #9efeff;
    padding: 3px 5px;
    font-size: 14px;
    border-radius: 3px;
  }

  svg .clickable-group {
    cursor: pointer;

    &:hover > [fill='rgb(65,53,214)'] {
      fill: #232381;
      stroke: #232381;
    }
    &:hover > [fill='rgb(255,255,0)'] {
      fill: #d6d700;
    }
    &:hover > [fill='rgb(255,229,153)'] {
      fill: #f3c950;
    }
    &:hover > [fill='rgb(153,153,153)'] {
      fill: #646464;
    }
    &:hover > [fill='rgb(255,255,255)'] {
      fill: #d7d7d7;
    }
  }

  svg .done {
    & rect {
      fill: #cbcbcb !important;
    }
    & text {
      text-decoration: line-through;
    }
  }
`;

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    firePageView(window.location.pathname);
  }, []);

  return (
    <>
      <DefaultSeo
        title="مدرسه‌ی نوپا"
        // titleTemplate={`%s · ${siteConfig.title}`}
        // description={siteConfig.description}
        // canonical={siteConfig.url + (router.asPath || '')}
        // openGraph={{
        //   title: siteConfig.title,
        //   description: siteConfig.description,
        //   type: 'website',
        //   site_name: siteConfig.title,
        //   images: [
        //     {
        //       url: `${siteConfig.url}/social.png`,
        //       width: 1024,
        //       height: 512,
        //       alt: siteConfig.title,
        //     },
        //   ],
        // }}
        // twitter={{
        //   cardType: 'summary_large_image',
        //   handle: siteConfig.twitterUsername,
        //   site: siteConfig.twitterUsername,
        // }}
      />
      <ChakraProvider theme={nopaTheme}>
        <RtlProvider>
          <Fonts />
          <Global styles={GlobalStyles} />
          {/* <StickyBanner /> */}
          <Component {...pageProps} />
        </RtlProvider>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
