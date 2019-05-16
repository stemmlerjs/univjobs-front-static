# Gatsby Univjobs API

> This API plugin exists because in order to do SEO well, we need to have a combination of server-side rendered data in addition to dynamic data for certain things.

So here's what we need to retrieve so far:

### Index Page
- Latest Jobs
- Featured Companies

(let's just start with that)

## What does it take to create pages and nodes?

1. First, we source the data from the API
2. Then, we use the 'createNodeId' and 'createNode' methods in order to create the nodes that we want, passing in the data for each node.
2.1. We have to ensure that we create the dummy nodes that we need though so that we can always build the site.
3. Create pages/slugs for anything that needs a page and specify the template to create that page with 'boundActionCreators.createPage'.


