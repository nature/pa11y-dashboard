# Changelog

## 4.3.0 (2024-03-26)

### Changes

* Improve console messaging (thanks @sangitamane)
* Address linting issues (thanks @josebolos and @hollsk)
* Various accessibility improvements to dashboard pages (thanks @sangitamane)
* Improve version support and its verification
  * Support Node 16-20
  * Support MongoDB `2`, `4`, `5`, `6`, `latest`
  * Fix various integration test issues
  * Add info to readme about Ubuntu `> 20.04` workaround (issue will be fixed by `pa11y-dashboard@5.0.0`)
* Minor dependency upgrades
* Update support policy

### New contributors

* @danyalaytekin made their first contribution in https://github.com/pa11y/pa11y-dashboard/pull/315

### Full diff

* [4.2.0...4.3.0](https://github.com/pa11y/pa11y-dashboard/compare/4.2.0...4.3.0)

## 4.2.0 (2022-03-30)

* Add request logging for easier debugging
* Dependencies update

## 4.1.0 (2021-11-26)

* Add support for new WCAG 2.1 rules and remove all references to Section 508.
* Move troubleshooting guide to the README.

## 4.0.0 (2021-11-26)

* Update pa11y to version 6.
* Drop support for versions of Node.js older than 12.
* Update MongoDB Node driver from v2 to v3, which adds support for MongoDB v4 databases.

## 3.3.0 (2021-04-27)

* Add new list view to the dashboard (thanks @sangitamane)
* Upgrade express-hbs to the latest version in order to address several potential vulnerabilities
* Fixes a MongoDB "ObjectID generation failed" error.
* Update pa11y-webservice to version 3.2.1 and pa11y to version 5.3.1

## 3.2.0 (2020-10-05)

* Update pa11y to version 5.3.0, which means better compatibility with sites using AMD modules
* Update pa11y-webservice to version 3.2.0, which adds the ability to configure the number of workers running pa11y tests
* Update several dependencies
* Replace chalk with kleur

## 3.1.0 (2019-09-27)

* Display the task ID before each line of output, so it's clear to which task a line of output belongs to when they run in parallel.
* Bump pa11y-webservice version, which fixes an issue with some pages failing to run.
* Fix incorrect routes passing an invalid value to Mongo's ObjectID.

## 3.0.0 (2019-07-16)

* Update pa11y to v5, which replaces Phantomjs with Headless Chrome
* Update dependencies
* Several bug fixes and documentation updates
* See the [migration guide](https://github.com/pa11y/pa11y-dashboard/blob/master/MIGRATION.md#migrating-from-20-to-30) for details of the breaking changes in this release

## 2.4.2 (2018-06-21)

* Update dependencies
* body-parser: ~1.17.1 to ^1.18.3
* compression: ~1.6 to ^1.7.2
* express: ~4.15.2 to ^4.16.3
* moment: ~2.15.2 to ^2.22.2

## 2.4.1 (2017-11-28)

* Update dependencies
* pa11y-webservice: ^2.3.0 to ^2.3.1

## 2.4.0 (2017-11-23)

* Add the ability to export the results graph as a PNG, see #197 for more information

## 2.3.0 (2017-10-31)

* Large overhaul of the results page, see #196 for more information

## 2.2.2 (2017-03-23)

* Upgrades `body-parser` and `express`. Fixes a vulnerability in `qs`: https://snyk.io/vuln/npm:qs:20170213

## 2.2.1 (2017-02-07)

* Fix task editing when no actions are specified

## 2.2.0 (2017-01-27)

* Add support for Pa11y actions
* Update dependencies
  * pa11y-webservice: ~2.1.2 to ^2.3.0

## 2.1.2 (2016-12-12)

* Hide the "add" button in readonly mode
* Add a contributing guide

## 2.1.1 (2016-11-20)

* Use arrows instead of plus and minus for collapsibles/expanders
* Supply more detailed 500 messages

## 2.1.0 (2016-11-07)

* Allow for configuration files to be JavaScript rather than JSON
* Allow setting of HTTP headers for task runs
* Allow hiding/ignoring elements for task runs
* Update dependencies and devDependencies
  * pa11y-webservice: ~2.0.1 to ^2.1.2
  * mocha: ^3 to ^2 (temporary – tests weren't running)

## 2.0.1 (2016-09-12)

* Update dependencies and devDependencies
  * express: ~4.13 to ~4.14
  * pa11y-webservice: ~2.0 to ^2.0.1
  * request: ^2 to ^2.74
  * mocha: ^2 to ^3
  * pa11y-webservice-client-node: ~1.2 to ^1.2.1
  This fixes the following vulnerabilities:
  * https://nodesecurity.io/advisories/45
  * https://nodesecurity.io/advisories/63
  * https://nodesecurity.io/advisories/65
  * https://nodesecurity.io/advisories/106
  * https://nodesecurity.io/advisories/121
  * https://nodesecurity.io/advisories/130

## 2.0.0 (2016-06-05)

* Drop Node.js 0.10–0.12 support
* Update dependencies
  * pa11y-webservice: ~1.11 to ~2.0
* See the [migration guide](https://github.com/pa11y/dashboard/blob/master/MIGRATION.md#migrating-from-10-to-20) for details

## 1.12.1 (2016-06-05)

* Update references/links after a repo rename

## 1.12.0 (2016-05-26)

* Update Node.js version support to 0.10–6.0
* Update dependencies
  * body-parser: added at ~1.15
  * chalk: ~0.2 to ~1.1
  * compression: added at ~1.6
  * express: ~3.4 to ~4.13
  * express-hbs: ~0.2 to ~1.0
  * moment: ~2.2 to ~2.13
  * pa11y-webservice: ~1.10 to ~1.11
  * pa11y-webservice-client-node: ~1.1 to ~1.2
  * bower: ~1.2 to ~1.7
  * cheerio: added at ~0.20
  * jsdom: removed
  * request: ~2.27 to ^2
  * uglify-js: ~2.4 to ~2.6

## 1.11.0 (2016-05-23)

* Add the ability to configure task wait times
* Allow configuration by environment variables
* Update repository references to the new Pa11y organisation
* Add a changelog

## 1.10.0 (2016-05-18)

* Automatically focus on the filter input box when you select the filter
* Make a task URL clickable
* Tweak the documentation to make it more usable
* Add a resources section to the README

## 1.9.0 (2016-04-25)

* Show errors' context and selector on the results page
* Add context and selector to CSV output
* Fix lint errors
* Switch from Grunt to Make
* Add a `SIGINT` handler
* Update dependencies
  * pa11y-webservice: ~1.6 to ~1.8

## 1.8.2 (2016-02-10)

* Update the license in the footer

## 1.8.1 (2016-02-10)

* Update repository references to springernature

## 1.8.0 (2016-02-04)

* Make the graph more accessible to color-blind users
* Fix lint errors

## 1.7.0 (2016-01-29)

* Hide the date list from individual result pages
* Make the date selector properly keyboard accessible
* Change the options button into a more accessible list
* Make the errors/warnings/notices lists keyboard accessible

## 1.6.1 (2016-01-26)

* Add keyboard access for filters
* Fix lint errors

## 1.6.0 (2015-08-20)

* Hide all graph data except for errors by default

## 1.5.0 (2015-07-06)

* Add the ability to use HTTP basic auth with task URLs
* Update dependencies
  * pa11y-webservice: ~1.5 to ~1.6

## 1.4.0 (2015-07-02)

* Add the ability to set a per-task timeout

## 1.3.2 (2015-01-17)

* Update dependencies
  * pa11y-webservice: ~1.3 to ~1.4

## 1.3.1 (2014-03-05)

* Fix the URL filter position when in demo mode

## 1.3.0 (2014-03-04)

* Add filtering of tasks on the home page
* Add the ability to ignore certain rules
* Add the ability to ignore a rule from the result page
* Tweak the display of task cards

## 1.2.3 (2014-01-13)

* Fix CSV export for the OS X version of Excel

## 1.2.2 (2014-01-09)

* Fix spacing issues when the graph is not visible
* Add notes on publishing a release

## 1.2.1 (2014-01-08)

* Fix dropdown positioning in Internet Explorer 7 and 8

## 1.2.0 (2013-12-12)

* Add HTML Codesniffer links on the results page
* Display the ignore rules for results on the results page
* Link the breadcrumbs on task sub-pages
* Fix an issue with saving empty ignore rules
* Cache-bust the CSS and JavaScript
* Add the ability to edit tasks
* Fix lint errors
* Tweaks to the display of the graphs
* Update dependencies
  * pa11y-webservice: ~1.1 to ~1.2
  * pa11y-webservice-client-node: ~1.0 to ~1.1

## 1.1.0 (2013-11-22)

* Add a functional test suite
* Allow the webservice to run automatically
* Documentation improvements
* Add a Travis config
* Fix lint errors

## 1.0.0 (2013-11-19)

* Initial stable release
* Add the ability to set a site-wide message
* Add a demo mode for demo/public-facing sites
* Disable search engine indexing by default
* Tweak the task header at smaller screen sizes
* Make checkboxes on the graph WCAG2AA compliant
* Make checkbox inputs and labels WCAG2AA compliant on new URL page
* Colour changes to ensure there are no contrast issues
* Make the copy more consistent
* Update screenshots
* Update dependencies
  * pa11y-webservice-client-node: 1.0.0-beta.7 to ~1.0

## 1.0.0-beta.3 pre-release (2013-11-12)

* Fix lint errors
* Add descriptive labels to tasks
* Add a name field to "New URL" form
* Add a WCAG 2.0 link to the footer
* Tweak the layout at smaller screen sizes
* Notify users when there are no ignored rules
* Fix the expires headers for front end assets
* Move from Make to Grunt
* Compress static files
* Minify the site JavaScript
* Compile LESS files with grunt
* Add a watch task to recompile assets on change
* Commit compiled front-end code to the repo
* Add development instructions
* Update screenshots
* Update dependencies
  * pa11y-webservice-client-node: 1.0.0-beta.4 to 1.0.0-beta.7

## 1.0.0-beta.2 pre-release (2013-10-04)

* Add screenshots to the README
* Fix margins
* Add bower package management
* Stop the graph from appearing if there's only one result
* Add the ability to run tasks ad-hoc
* Add more useful information to the footer
* General copy edits
* Update dependencies
  * pa11y-webservice-client-node: 1.0.0-beta.3 to 1.0.0-beta.4

## 1.0.0-beta.1 pre-release (2013-09-27)

* Initial release
