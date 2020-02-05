export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e3a9f8227175992d76936de',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-hynhjff3',
                  apiId: '4cfeddef-95e7-47c9-a577-f628a8df3264'
                },
                {
                  buildHookId: '5e3a9f82399c298042079788',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-6v4hfpxj',
                  apiId: '4764d86d-b3ad-46f7-b37a-71f39cd1075a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/maxime-pandacola/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-6v4hfpxj.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
