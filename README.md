# mongo-viewer

[![Join the chat at https://gitter.im/marcdelalonde/mongo-viewer](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/marcdelalonde/mongo-viewer?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

[![Dependencies](http://img.shields.io/david/marcdelalonde/mongo-viewer.svg?style=flat)](https://david-dm.org/marcdelalonde/mongo-viewer)
[![Download Month](http://img.shields.io/npm/dm/mongo-viewer.svg?style=flat)](https://www.npmjs.org/package/mongo-viewer)
[![NPM Version](http://img.shields.io/npm/v/mongo-viewer.svg?style=flat)](https://www.npmjs.org/package/mongo-viewer)
[![Gitter](http://img.shields.io/badge/Gitter-room-brightgreen.svg?style=flat)](https://gitter.im/marcdelalonde/mongo-viewer)
[![Gratipay](http://img.shields.io/gratipay/marcdelalonde.svg?style=flat)](https://gratipay.com/marcdelalonde/)

MongoDB data viewer based on Express & Angular

![Mongo-Viewer UI](https://github.com/marcdelalonde/mongo-viewer/blob/master/screen.png)

> The project is currently under active development. Do not hesitate to ask for features and/or make pull requests.

## Install & Use Mongo-Viewer

Install via NPM

```bash
npm install -g mongo-viewer
```

Start the app with a simple command line:


```bash
mongo-viewer
```

By default it will serve on port 8080: [http://localhost:8080/](http://localhost:8080/). You can use the **-p** or **--port** parameter to set a convenient port for you.

> Do not forget to have your mongodb service running

## Developing Mongo-Viewer

Clone the repo:

```bash
git clone https://github.com/marcdelalonde/mongo-viewer.git
```

Install dependencies:

```bash
npm install
bower install
```

Start your developing environment:

```bash
gulp serve
```

## License

Copyright (c) 2015 Marc Delalonde

Licensed under the MIT License