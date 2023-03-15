import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
} from '@remix-run/react';
import {Seo} from '@shopify/hydrogen';
import {GenericError, Layout} from '~/components';
import {NotFound} from '~/components';

import styles from './styles/app.css';
import favicon from '../public/favicon.svg';

//#region HEAD

// styles
export const links = () => {
  return [
    {
      rel: 'stylesheet',
      type: 'text/css',
      charSet: 'utf-8',
      href: 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css',
    },
    {
      rel: 'stylesheet',
      type: 'text/css',
      href: 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css',
    },
    {
      rel: 'preconnect',
      href: 'https://cdn.shopify.com',
    },
    {
      rel: 'preconnect',
      href: 'https://shop.app',
    },
    {rel: 'stylesheet', href: styles},
    {rel: 'icon', type: 'image/svg+xml', href: favicon},
  ];
};

// meta
export const meta = ({data}) => ({
  charset: 'utf-8',
  viewport: 'width=device-width,initial-scale=1',
  title: data.layout.shop.name,
});

//#endregion HEAD

//#region FRONTEND

export default function App() {
  return (
    <html lang="en">
      <head>
        <Seo />
        <Meta />
        <Links />
      </head>
      <body>
        <Layout>
          <Outlet />
        </Layout>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

//#endregion FRONTEND

//#region ERROR HANDLING
export function CatchBoundary() {
  const caught = useCatch();
  const isNotFound = caught.status === 404;

  return (
    <html lang="en">
      <head>
        <title>{isNotFound ? 'Not found' : 'Error'}</title>
        <Meta />
        <Links />
      </head>
      <body>
        {isNotFound ? <NotFound /> : <GenericError />}
        <Scripts />
      </body>
    </html>
  );
}

export function ErrorBoundary() {
  return (
    <html lang="en">
      <head>
        <title>Error</title>
        <Meta />
        <Links />
      </head>
      <body>
        <GenericError />
        <Scripts />
      </body>
    </html>
  );
}

//#endregion ERROR HANDLING

//#region BACKEND
export async function loader({context}) {
  const layout = await context.storefront.query(LAYOUT_QUERY);
  return {layout};
}

//#enregion BACKEND

//#region GraphQL
const LAYOUT_QUERY = `#graphql
  query layout {
    shop {
      name
      description
    }
  }
`;

//#endregion GraphQL
