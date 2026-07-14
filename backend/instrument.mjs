import * as Sentry from "@sentry/node";
import { ENV } from "./src/config/env.js";

Sentry.init({
  dsn: ENV.SENTRY_DSN,
  tracesSampleRate: 1.0,
  profileSessionSampleRate: 1.0,
  environment: ENV.NODE_ENV || "development",
  includeLocalVariables: true,

  // Setting this option to true Will send default PII data to Sentry
  // For Example, authomatic IP address collection on events
  sendDefaultPii: true,
});
