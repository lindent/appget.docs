module.exports = {
    dest: 'dist',
    title: 'AppGet',
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
    serviceWorker: true,
    themeConfig: {
        repo: 'https://github.com/appget/appget.docs/docs/',
        editLinks: true,
        docsDir: 'docs',
        repoLabel: 'Edit This Page',
        lastUpdated: 'Last Updated',
        // nav: [
        //     {
        //         text: 'Guide',
        //         link: '/guide/',
        //     },
        //     {
        //         text: 'Config Reference',
        //         link: '/config/'
        //     },
        //     {
        //         text: 'Default Theme Config',
        //         link: '/default-theme-config/'
        //     }
        // ],
        sidebar: [
            '/',
            {
                title: 'Usage',
                collapsable: false,
                children: [
                    '/usage/commands.md'
                ]
            },
            {
                title: 'Manifests',
                collapsable: true,
                children: [
                    '/manifests/manifest.md',
                    '/manifests/naming.md',
                    '/manifests/versions.md'
                ]
            }
        ]
    }
}
