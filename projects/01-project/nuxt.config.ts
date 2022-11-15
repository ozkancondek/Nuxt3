// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    app: {
        head: {
          meta: [
            // <meta name="viewport" content="width=device-width, initial-scale=1">
            { name: 'viewport', content: 'width=device-width, initial-scale=1' }
          ],
          script: [ 
          ],
          link: [
            // <link rel="stylesheet" href="https://myawesome-lib.css">
            { rel: 'stylesheet', href: 'https://assets.obi.de/css-utilities/public/css-dev/fonts.css' },
            { rel: 'stylesheet', href: 'https://assets.obi.de/css-utilities/public/css-dev/global.css' },
            { rel: 'stylesheet', href: 'https://assets.obi.de/css-utilities/public/css-dev/global-lg.css',media:"(min-width: 960px)"}

          ],
          // please note that this is an area that is likely to change
          style: [ 
          ],
          noscript: [
            // <noscript>Javascript is required</noscript>
            { children: 'Javascript is required' }
          ]
        }
      },
    
 

})
