export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '622b78c2cd20ff2aaa25a2e6',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-qruhvja3',
                  apiId: '05e6ad78-73c0-4d06-8c91-d1a8c0019f72'
                },
                {
                  buildHookId: '622b78c36766ff2eea080dca',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-zz63wknb',
                  apiId: 'd14f4ba6-e4fb-4243-aacb-ea2d6225b76e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kinfield/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-zz63wknb.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
