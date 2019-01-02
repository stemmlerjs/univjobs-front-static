const contentful = require('contentful')

const client = contentful.createClient({
  space: 'twqisuqhjtce',
  accessToken: '331fe6543a7fd1b59cf4a81d49c1b846439b6e8c4e762de52a519e61a6d7cfd3'
})

/**
 * @func getBlogPosts
 * @desc Retrieves all of the blog posts from Contentful.
 */

const getBlogPosts = async () => {
  try {
    const response = await client.getEntries();
    const { items } = response;
    items.map((item) => {
      item.contentSource = "CONTENTFUL"
      return item;
    })
    return items;
  } catch (err) {
    throw err;
  }
}

module.exports = {
  getBlogPosts
}