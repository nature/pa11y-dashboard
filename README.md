# Pa11y Dashboard

Pa11y Dashboard is a web interface to the [Pa11y][pa11y] accessibility reporter; allowing you to focus on *fixing* issues rather than hunting them down.

![Version][shield-version]
[![Node.js version support][shield-node]][info-node]
[![Build status][shield-build]][info-build]
[![GPL-3.0 licensed][shield-license]][info-license]

![dashboard](https://user-images.githubusercontent.com/6110968/61603347-0bce1000-abf2-11e9-87b2-a53f91d315bb.jpg)
![results-page](https://user-images.githubusercontent.com/6110968/62183438-05851580-b30f-11e9-9bc4-b6a4823ae9e8.jpg)

---

## Requirements

- [Node.js][node]: Pa11y Dashboard 4 requires a stable (even-numbered) version of Node.js of 12 or above.
- [MongoDB][mongodb]: This project depends on Pa11y Webservice, which stores test results in a MongoDB database and expects one to be available and running.

### Pally Dashboard 4 and Linux/Ubuntu

Pa11y (and therefore this service) uses Headless Chrome to perform accessibility testing. On Linux and other Unix-like systems, Pa11y's attempt to install it as a dependency sometimes fails since additional operating system packages will be required. Your distribution's documentation should describe how to install these.

In addition, to use Pa11y Dashboard 4 with a version of Ubuntu above 20.04, a path to the Chrome executable must be defined in `chromeLaunchConfig`, as `chromeLaunchConfig.executablePath`. Version 5 of Pa11y Dashboard, which will use Pa11y 8 along with a more recent version of Puppeteer, will resolve this issue.

## Setting up Pa11y Dashboard

In order to run Pa11y Dashboard, we recommend cloning this repository locally:

```sh
git clone https://github.com/pa11y/pa11y-dashboard.git
```

Then installing the dependencies:

```sh
cd pa11y-dashboard
npm install
```

### Installing MongoDB

Instructions for installing and running MongoDB are outside the scope of this document. When in doubt, please refer to the [MongoDB installation instructions](https://docs.mongodb.com/manual/installation/) for details of how to install and run MongoDB on your specific operating system. An example of the installation and configuration process for macOS follows.

Pa11y Dashboard uses [MongoDB Node.js Driver][mongodb-package] version 3, which [may not support some features][mongodb-package-compatibility] of MongoDB versions 6 and beyond. We do however test against MongoDB versions 2 to 6, plus the latest major version, which at the time of writing is `7`.

#### Example MongoDB installation for macOS

On recent versions of macOS (10.13 or later), you can use [Homebrew] to install MongoDB Community Edition.

Tap the MongoDB Homebrew Tap:

```sh
brew tap mongodb/brew
```

Install a supported Community version of MongoDB:

```sh
brew install mongodb-community@4.4
```

Start the MongoDB server:

```sh
brew services start mongodb/brew/mongodb-community@4.4
```

Check that the service has started properly:

```console
$ brew services list

Name              Status  User       Plist
mongodb-community started pa11y      /Users/pa11y/Library/LaunchAgents/homebrew.mxcl.mongodb-community.plist
```

### Configuring Pa11y Dashboard

The last step before being able to run Pa11y Dashboard is to define a configuration for it. This can be done in two ways:

#### Option 1: Using environment variables

Each configuration can be set with an environment variable rather than a config file. For example to run the application on port `8080` you can use the following:

```sh
PORT=8080 node index.js
```

The [available configurations](#configurations) are documented in the next section.

#### Option 2: Using config files

You can store the configuration for Pa11y Dashboard on a JSON file. You can use a different configuration file for each environment you're planning to run Pa11y Dashboard on. You can choose a specific environment to run the application from by setting the `NODE_ENV` environment variable:

```sh
NODE_ENV=development node index.js
```

Three example files are provided in this repository, you can copy and customise them to your liking:

```sh
cp config/development.sample.json config/development.json
```

```sh
cp config/production.sample.json config/production.json
```

```sh
cp config/test.sample.json config/test.json
```

The [available configurations](#configurations) are documented in the next section.

If you run into problems, check the [troubleshooting guide](#troubleshooting).

## Configurations

The boot configurations for Pa11y Dashboard are as follows. Look at the sample JSON files in the repo for example usage.

### `port`

*(number)* The port to run the application on. Set via a config file or the `PORT` environment variable.

### `noindex`

*(boolean)* If set to `true` (default), the dashboard will not be indexed by search engines. Set to `false` to allow indexing. Set via a config file or the `NOINDEX` environment variable.

### `readonly`

*(boolean)* If set to `true`, users will not be able to add, delete or run URLs (defaults to `false`). Set via a config file or the `READONLY` environment variable.

### `siteMessage`

*(string)* A message to display prominently on the site home page. Defaults to `null`.

### `webservice`

This can either be an object containing [Pa11y Webservice configurations][pa11y-webservice-config], or a string which is the base URL of a Pa11y Webservice instance you are running separately. If using environment variables, prefix the webservice vars with `WEBSERVICE_`.

## Contributing

There are many ways to contribute to Pa11y Dashboard, we cover these in the [contributing guide](CONTRIBUTING.md) for this repo.

If you're ready to contribute some code, you'll need to clone the repo and get set up as outlined in the [setup guide](#setting-up-pa11y-dashboard). You'll then need to start the application in test mode with:

```sh
NODE_ENV=test node index.js
```

You'll now be able to run the following commands:

```sh
npm run lint   # Lint the code
npm test       # Run all tests
```

To compile the client-side JavaScript and CSS, you'll need the following commands. Compiled code is committed to the repository.

```sh
make less    # Compile the site CSS from LESS files
make uglify  # Compile and uglify the client-side JavaScript
```

## Useful resources

- [Setting up An Accessibility Dashboard from Scratch with Pa11y on DigitalOcean](https://una.im/pa11y-dash/)
- [Monitoring Web Accessibility Compliance With Pa11y Dashboard](https://www.lullabot.com/articles/monitoring-web-accessibility-compliance-with-pa11y-dashboard)

## Troubleshooting

### Common issues

- `500` errors or `Could not connect to pa11y-webservice` messages are often related to MongoDB. Ensure that you have the [appropriate version of MongoDB](#installing-mongodb) installed, and that it's running - it doesn't always start automatically.
- Error messages saying that pa11y-webservice isn't running may be due to dependency installation problems. Try deleting your `pa11y-dashboard/node_modules` directory and running `npm install` again.

### Create a new issue

Check the [issue tracker][issues] for similar issues before creating a new one. If the problem that you're experiencing is not covered by one of the existing issues, you can [create a new issue][issues-create]. Please include your node.js and MongoDB version numbers, and your operating system, as well as any information that may be useful in debugging the issue.

## Support and migration

> [!NOTE]
> We maintain a [migration guide](MIGRATION.md) to help you migrate between major versions.

When we release a new major version we will continue to support the previous major version for 6 months. This support will be limited to fixes for critical bugs and security issues. If you're opening an issue related to this project, please mention the specific version that the issue affects.

The following table lists the major versions available and, for each previous major version, its end-of-support date, and its final minor version released.

| Major version | Last minor release | Node.js support              | Support end date |
| :------------ | :----------------- | :--------------------------- | :--------------- |
| `4`           | `4.3`              | `12`, `14`, `16`, `18`, `20` | ✅ Current major version |
| `3`           | `3.3`              | `8`, `10`                    | 2022-05-26       |
| `2`           | `2.4`              | `4`, `6`                     | 2020-01-16       |
| `1`           | `1.12`             | `0.10`, `0.12`, `4`, `6`     | 2016-12-05       |

## License

Pa11y Dashboard is licensed under the [GNU General Public License 3.0][info-license].  
Copyright &copy; 2016-2024, Team Pa11y and contributors

[homebrew]: https://brew.sh/
[issues]: https://github.com/pa11y/pa11y-dashboard/issues?utf8=%E2%9C%93&q=is%3Aissue
[issues-create]: https://github.com/pa11y/pa11y-dashboard/issues/new
[mongodb]: http://www.mongodb.org/
[mongodb-package]: https://www.npmjs.com/package/mongodb
[mongodb-package-compatibility]: https://docs.mongodb.com/drivers/node/current/compatibility
[node]: http://nodejs.org/
[pa11y]: https://github.com/pa11y/pa11y
[pa11y-webservice-config]: https://github.com/pa11y/webservice#configurations

[info-node]: package.json
[info-build]: https://github.com/pa11y/pa11y-dashboard/actions/workflows/tests.yml
[info-license]: LICENSE

[shield-version]: https://img.shields.io/github/package-json/v/pa11y/pa11y-dashboard.svg
[shield-node]: https://img.shields.io/node/v/pa11y/pa11y-dashboard.svg
[shield-build]: https://github.com/pa11y/pa11y-dashboard/actions/workflows/tests.yml/badge.svg
[shield-license]: https://img.shields.io/badge/license-GPL%203.0-blue.svg
