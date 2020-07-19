# Ken Cavagnolo Personal Website

Welcome to the open source repo for [my personal web site](http://www.kcavagnolo.com/).

## Build

Assuming macOS. Install Xcode CLI tools and Ruby:

```bash
xcode-select --install
brew install ruby
gem install bundler jekyll
```

To rebuild the site from scratch and capture config updates and styles changes, run the gulp command and then build the site:

```bash
gulp default
bundle exec jekyll serve --watch --trace --drafts --verbose
```

Alternatively, use gulp to watch for changes:

```bash
gulp dev
```

## Maintain

To run maintenance tasks:

```bash
bundle update
bundle install
npm audit fix
```

## Credits

- [Github Pages](https://pages.github.com) for hosting.
- [Start Bootstrap](http://startbootstrap.com) for the site template.
- [unsplash](http://unsplash.com) for stock photos.
- [Font Awesome](http://fortawesome.github.io/Font-Awesome) for the CSS toolkit.

## Images

- Photo by [Helloquence](https://unsplash.com/@helloquence) on [Unsplash](https://unsplash.com)
- Photo by [Major Tom Agency](https://unsplash.com/@majortomagency) on [Unsplash](https://unsplash.com)
- Photo by [Nick Fewings](https://unsplash.com/@jannerboy62) on [Unsplash](https://unsplash.com)
- Photo by [Donald Giannatti](https://unsplash.com/@wizwow) on [Unsplash](https://unsplash.com)
- Photo by [Nathan Anderson](https://unsplash.com/@nathananderson) on [Unsplash](https://unsplash.com)

## License

This work is licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](LICENSE).

![Creative Commons License](https://i.creativecommons.org/l/by-sa/4.0/88x31.png "license")

## Disclaimer

Please review the [Disclaimer](DISCLAIMER).
