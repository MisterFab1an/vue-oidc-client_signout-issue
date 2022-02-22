import { createOidcAuth, LogLevel, OidcAuth, SignInType } from 'vue-oidc-client/vue3'

const appUrl: string = 'http://localhost:8080/';

const oidcAuthInstance: OidcAuth = createOidcAuth(
  'main',
  SignInType.Window,
  appUrl,
  {
    authority: 'https://demo.identityserver.io/',
    client_id: 'interactive.public',
    response_type: 'code',
    scope: 'openid profile email'
  },
  console,
  LogLevel.Debug
);

export default oidcAuthInstance