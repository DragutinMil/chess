// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import { init } from '@sentry/nextjs';
import { config } from './config';

config.SENTRY_DSN &&
  init({
    dsn: config.SENTRY_DSN,

    // Adjust this value in production, or use tracesSampler for greater control ...
    tracesSampleRate: 1,

    // Setting this option to true will print useful information to the console while you're setting up Sentry.
    debug: config.DEBUG_MODE,

    // uncomment the line below to enable Spotlight (https://spotlightjs.com)
    // spotlight: process.env.NODE_ENV === 'development',
  });
