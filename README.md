# Ken Cavagnolo Personal Website

Welcome to the open source repo for [my personal web site](http://www.kcavagnolo.com/).

## Build

Assuming Linux. Install Ruby and deps follwing the [instructions here](https://jekyllrb.com/docs/).

```bash
gem install bundler jekyll
```

To rebuild the site from scratch and capture config updates and styles changes, run the gulp command and then build the site:

```bash
gulp default
export GITHUB_TOKEN=$GITHUB_KCAVAGNOLO_REPO_TOKEN
bundle exec jekyll serve --watch --trace --drafts --verbose
```

Alternatively, use gulp to watch for changes:

```bash
gulp dev
```

To run maintenance tasks, use `bundle` or `npm`:

```bash
bundle clean --force
gem install bundler jekyll
bundle update
bundle install
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
npm audit
npm audit fix
export GITHUB_TOKEN=$GITHUB_KCAVAGNOLO_REPO_TOKEN
bundle exec jekyll serve --watch --trace --drafts --verbose
```

## Credits

- [Github Pages](https://pages.github.com) for hosting.
- [Start Bootstrap](http://startbootstrap.com) for the site template.
- [unsplash](http://unsplash.com) for stock photos.
- [Font Awesome](http://fortawesome.github.io/Font-Awesome) for the CSS toolkit.

## License

This work is licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](LICENSE).

![Creative Commons License](https://i.creativecommons.org/l/by-sa/4.0/88x31.png "license")

## Disclaimer

Please review the [Disclaimer](DISCLAIMER).
