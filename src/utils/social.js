
export const createTwitterShareURL = (title, url) => {
  return `http://twitter.com/share?text=${encodeURIComponent(title)}&url=${url}`
}