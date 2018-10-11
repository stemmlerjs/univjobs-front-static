/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

 // You can delete this file if you're not using it

const currentEnv = process.env.CURRENT_ENV;
const isProd = currentEnv === "production";

exports.onClientEntry = () => {
  console.log(`[Univjobs]: Hello! ${currentEnv}`)

  if (isProd && typeof window !== undefined) {
    require('./gatsby-prod-scripts')
  }
  
}