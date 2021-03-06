module.exports = {
    base:'/',
    dest: 'dist',
    title: 'AppGet Docs',
    description: 'Documentation for AppGet',
    head: [
        ['link', { rel: 'icon', href: `/logo.png` }],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
        ['meta', { name: 'theme-color', content: '#3eaf7c' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
        ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
        ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
        ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
    ],
    port: 8000,
    ga: 'UA-56745904-3',
    serviceWorker: false,
    themeConfig: {
        repo: 'appget/appget.docs/',
        editLinks: true,
        docsDir: 'docs',
        lastUpdated: 'Last Updated',
        algolia: {
            apiKey: 'd1275e06d940dd1c21dcd9200a559f8e',
            indexName: 'appget',
            algoliaOptions: { 'facetFilters': [""] },
        },
        nav: [
            // {
            //     text: 'Packages',
            //     link: 'https://github.com/appget/appget.packages/tree/master/manifests/',
            // },
            // {
            //     text: 'Config Reference',
            //     link: '/config/'
            // },
            // {
            //     text: 'Default Theme Config',
            //     link: '/default-theme-config/'
            // }
        ],
        sidebar: [
            '/',
            '/commands/',
            '/manifests/',
            // {
            //     title: 'Manifests',
            //     collapsable: true,
            //     children: [
            //     ]
            // }
        ]
    }
}
