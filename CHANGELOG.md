# Changelog

## [1.2.4] - [2018-12-01]
### Added
- [Company Jobs] Added flex cards so that these always look aligned left.
- [Company Articles] Added flex cards so that these always look aligned left.

## [1.2.3] - [2018-11-29]
### Changed
- [Header] Changed the header to come from the univjobs-ui-components library instead.

## [1.2.2] - [2018-11-28]
### Changed
- [Blog] Changed the design for the blog.

## [1.2.1] - [2018-10-05] - [2018-10-10]
### Added
- [Landing Pages] Added a landing pages template so that we can scaffold new landing pages.

### Changed
- [Landing Pages] Updated the primary landing page.

##[1.2.0] - [2018-10-01]
### Added
- [Directory] Added directory page to show a map of companies.
- [Directory Companies] Added directory company routes to show basic info for each company.
- [SEO] Improved SEO on most pages by using the SEO component everywhere possible.

### Changed
- [Prerendering] Started research on Prerender.io. We're going to use this instead of our Lambda functions. This will allow us to only use Helmet to put the correct SEO stuff on each page. We're going to hook it up on CloudFront using Terraform.

##[1.1.1] - [2018-09-19]
### Fixed
- [Company Template] Fixed social media links to only show links that were present.

## [1.1.0] - [2018-08-31]
### Added
- Finished the univjobs-datasource-api plugin.
- Added a /companies page to show Explore Companies.
- Added a Companies template page to show details on a particular company.

## [1.0.1] - [2018-08-22]
### Added 
- Added .editorConfig
- Added .eslint and linting script.
- Started the explore page for companies.
- Added the univjobs-datasource-api plugin.

## [1.0.0] - [2018-07-01]
### Added 
- Created and finalized the static website and the blog. Next is to setup different environment.
- Added Judy and Gurdeep to the About and Press pages.

### Changed
- Removed TD mention from our front page because we haven't heard back from TD.
- Refactored Press page components into /components/Press
- Updated styles on index and press pages.
- Removed the underline on the nav overlay items on mobile.
