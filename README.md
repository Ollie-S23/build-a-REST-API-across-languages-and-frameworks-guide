<a id="readme-top"></a>

<!--
  Structure follows the Best-README-Template by Othneil Drew:
  https://github.com/othneildrew/Best-README-Template
-->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<br />
<div align="center">
  <h3 align="center">Build a REST API across languages and frameworks</h3>

  <p align="center">
    An interactive, step-by-step guide to building a contacts API. Pick your language, framework and storage and the code changes to match.
    <br />
    <a href="https://ollie-s23.github.io/build-a-REST-API-across-languages-and-frameworks-guide/"><strong>Open the guide &raquo;</strong></a>
    <br />
    <br />
    <a href="https://github.com/Ollie-S23/build-a-REST-API-across-languages-and-frameworks-guide/issues/new?labels=bug">Report a mistake</a>
    &middot;
    <a href="https://github.com/Ollie-S23/build-a-REST-API-across-languages-and-frameworks-guide/issues/new?labels=enhancement">Request a topic</a>
  </p>
</div>

<details>
  <summary>Table of contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About the project</a>
      <ul>
        <li><a href="#built-with">Built with</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#project-structure">Project structure</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

## About the project

[![Guide screenshot][product-screenshot]](https://ollie-s23.github.io/build-a-REST-API-across-languages-and-frameworks-guide/)

A beginner-friendly guide that builds one small API (a contacts list) in five languages, and shows what changes when you pick a different framework or storage option.

* One guide, many choices: Python, Go, JavaScript, TypeScript, PHP and Rust, with their common frameworks, and in-code, JSON-file, SQL and MongoDB storage.
* Chapters in three parts:
  * **Part 1, steps 0 to 9:** design, folders, database, create/read/update/delete, request safety, a frontend, accounts, and API docs.
  * **Part 2, steps 10 to 16:** Redis, refresh tokens and account locks, CORS and safe headers, logs, caching, audit log, email confirmation and password reset, and shipping.
  * **Part 3, steps 17 to 21:** companies and tags (more than one table), metrics, webhooks, WebSockets, and other topics not covered.
* Each chapter says what was tested and what was not. Not all code is tested, so read the notes before relying on it.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built with

* [![HTML][html-shield]][html-url]
* [![CSS][css-shield]][css-url]
* [![JavaScript][js-shield]][js-url]

There is no framework and no build step on the site itself. The guide content was generated from the tested example projects.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Getting started

The guide is static, so there is nothing to install to read it.

### Prerequisites

* A web browser.
* Optional, to try the example code: the toolchain for the language you pick (for example Python 3, Go, Node.js, PHP or Rust).

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/Ollie-S23/build-a-REST-API-across-languages-and-frameworks-guide.git
   ```
2. Open `index.html` in your browser
3. To publish your own copy on GitHub Pages: **Settings, Pages**, deploy from the `main` branch and the `/ (root)` folder

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Usage

1. Open the start page and choose a part.
2. On each page pick your language, framework, storage and database. The guide changes to match, and your choices are remembered in your browser for that page.
3. Work through the chapters in order, or use the chapter list at the top to jump.
4. Use **Expand all**, **Options** and **Legend** at the top to show or hide the extra explanations.

The parts are separate pages. Settings are saved per page, so set them again on each part.

_Documentation links are given next to the code in every chapter._

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Project structure

```
.
├── index.html          start page
├── part1.html          steps 0 to 9
├── part2.html          steps 10 to 16
├── part3.html          steps 17 to 21
├── assets/
│   ├── guide.css       styles shared by the three parts
│   ├── guide.js        pickers, remembered choices and chapter list
│   └── index.css       styles for the start page
├── images/             README screenshot
├── LICENSE
└── .nojekyll           stops GitHub Pages from running Jekyll over the files
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Roadmap

- [x] Part 1: build it
- [x] Part 2: harden it and run it
- [x] Part 3: more tables, metrics, webhooks, WebSockets
- [ ] WebSockets for PHP (needs a long-running PHP server)
- [ ] Run the MongoDB versions for real
- [ ] More topics (file uploads, cursor pagination, API versioning, idempotency keys, background jobs and others, listed in the last chapter)

See the [open issues](https://github.com/Ollie-S23/build-a-REST-API-across-languages-and-frameworks-guide/issues) for proposed changes and known problems.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contributing

Corrections and suggestions are welcome.

1. Fork the project
2. Create your branch (`git checkout -b fix/short-description`)
3. Commit your changes (`git commit -m 'Fix a mistake in step 5'`)
4. Push to the branch (`git push origin fix/short-description`)
5. Open a pull request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## License

Distributed under the MIT License. See [`LICENSE`](LICENSE) for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contact

Oliver Scott - [oliverscott.business@gmail.com](mailto:oliverscott.business@gmail.com)

Project link: [https://github.com/Ollie-S23/build-a-REST-API-across-languages-and-frameworks-guide](https://github.com/Ollie-S23/build-a-REST-API-across-languages-and-frameworks-guide)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Acknowledgments

* [Best-README-Template](https://github.com/othneildrew/Best-README-Template) for the README structure
* [Claude](https://claude.ai) (Anthropic), co-author of the guide's code and text
* [Choose a License](https://choosealicense.com)
* [Shields.io](https://shields.io)
* [GitHub Pages documentation](https://docs.github.com/en/pages)
* [MDN Web Docs](https://developer.mozilla.org)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
[contributors-shield]: https://img.shields.io/github/contributors/Ollie-S23/build-a-REST-API-across-languages-and-frameworks-guide.svg?style=for-the-badge
[contributors-url]: https://github.com/Ollie-S23/build-a-REST-API-across-languages-and-frameworks-guide/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Ollie-S23/build-a-REST-API-across-languages-and-frameworks-guide.svg?style=for-the-badge
[forks-url]: https://github.com/Ollie-S23/build-a-REST-API-across-languages-and-frameworks-guide/network/members
[stars-shield]: https://img.shields.io/github/stars/Ollie-S23/build-a-REST-API-across-languages-and-frameworks-guide.svg?style=for-the-badge
[stars-url]: https://github.com/Ollie-S23/build-a-REST-API-across-languages-and-frameworks-guide/stargazers
[issues-shield]: https://img.shields.io/github/issues/Ollie-S23/build-a-REST-API-across-languages-and-frameworks-guide.svg?style=for-the-badge
[issues-url]: https://github.com/Ollie-S23/build-a-REST-API-across-languages-and-frameworks-guide/issues
[license-shield]: https://img.shields.io/github/license/Ollie-S23/build-a-REST-API-across-languages-and-frameworks-guide.svg?style=for-the-badge
[license-url]: https://github.com/Ollie-S23/build-a-REST-API-across-languages-and-frameworks-guide/blob/main/LICENSE
[product-screenshot]: images/screenshot.png
[html-shield]: https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white
[html-url]: https://developer.mozilla.org/en-US/docs/Web/HTML
[css-shield]: https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white
[css-url]: https://developer.mozilla.org/en-US/docs/Web/CSS
[js-shield]: https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black
[js-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript
