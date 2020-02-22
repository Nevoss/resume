// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const resume = require('./content/resume')

module.exports = function(api) {
  api.loadSource(store => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/

    const resumeContentType = store.addCollection('Intros')
    resume.intros.forEach(node => resumeContentType.addNode(node))

    const experienceContentType = store.addCollection('Experience')
    resume.experience.forEach(node => experienceContentType.addNode(node))

    const educationContentType = store.addCollection('Education')
    resume.education.forEach(node => educationContentType.addNode(node))
  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
    resume.intros.forEach(node => {
      createPage({
        path: `/resume/${node.id}`,
        component: './src/templates/Resume.vue',
        context: {
          id: node.id,
        },
      })
    })
  })
}
