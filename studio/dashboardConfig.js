export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5e97fbd988903be47e6c5fe2',
                  title: 'Sanity Studio',
                  name: 'sanity-jenfs-studio',
                  apiId: '2ac17f18-2d61-4848-bbde-7808a65bf55d'
                },
                {
                  buildHookId: '5e97fbd999408a08375e9ce4',
                  title: 'Landing pages Website',
                  name: 'sanity-jenfs',
                  apiId: '0a7e847d-8284-4a3c-a32a-8e0e1af0dfad'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/zenflow/sanity-jenfs',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-jenfs.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
