# 0Auth Setup

- console.developers.google.com
- created a new project
  - Credentials
  - Client Id
- <script src="https://apis.google.com/js/api.js"></script>
- gapi(In Console) should show up load:f
- window.gapi.load('client:auth2', () => {
  window.gapi.client.init({
  clientId: '843348578309-t9rvcl0v3mj7tepbi818abvc0h3l86f7.apps.googleusercontent.com',
  scope: 'email'
  })
  })
- https://developers.google.com/api-client-library/javascript/reference/referencedocs

## Redux Dev Tool

- https://github.com/zalmoxisus/redux-devtools-extension
- localhost:3000?debug_session={some string}
  - saves all data in redux store between refreshes of the page
