# LaunchDarkly DevRel Netlify Demo

Basic demo running in Netlify - ensure you've updated the client-key in src/index.js 

### Setup
1. Fork the repo: https://github.com/codyde/ld-netlify-demo
2. Update the code to use Client key ( Create account from launchdarkly to get the key)
    - update the key in `Index.js` file
3. Commit the changes and push to your repository
4. Login to netlify account and deploy the site by choosing the repository
    - Under Basic Build settings
        - Build command: `CI=false npm run build`