// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: ['nuxt-svgo'],
    app: {
        head: {
            htmlAttrs: {
                lang: 'en',
                'data-primary-color': 'light'
            },
            meta: [
                { name: 'viewport', content: 'width=device-width, initial-scale=1' }
            ],
            link: [
                // <link rel="stylesheet" href="https://myawesome-lib.css">

            ],
            titleTemplate: 'We\'re friends',
        },

    },
    css: ['/node_modules/normalize.css/normalize.css', '~/assets/css/bootstrap-grid.min.css', '~/assets/scss/main.scss']

})
