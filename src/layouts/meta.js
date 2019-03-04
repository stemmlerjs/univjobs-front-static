import config from '../config'

const meta = [
  // Server side rendering meta data
  { property: 'fb:app_id', content: '1897052653882765' },
  {
    property: 'og:title',
    content: 'Univjobs | Simplifying hiring post-secondary students',
  },
  {
    property: 'og:description',
    content:
      'A place where you can find jobs to earn cash and launch your career.',
  },
  { property: 'og:type', content: 'website' },
  { property: 'og:url', content: config.url },
  { property: 'og:image', content: `${config.url}${config.assets.image.logo}` },
  { property: 'og:image:type', content: 'image/png' },
  { property: 'og:image:width', content: '200' },
  { property: 'og:image:height', content: '200' },

  // Google Tracking
  // {
  //   name: 'google-site-verification',
  //   content: 'hnc0xMxaywTkrqjaD9-r57vX4SF8YTRpQtaiORbyuzk',
  // },
  {
    name: 'google-site-verification',
    content: 'U22OVlRPWeMnqAw53R07dKFHh_6PdjYd9gJ7SJLXeqA',
  },

  // SEO Keywords
  {
    name: 'keywords',
    content: 'univjobs, studentjobs, internship, part-time work',
  },
  { name: 'author', content: 'UnivJobs Team' },
]

export default meta
