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

* [Github Pages](https://pages.github.com) for hosting.
* [Start Bootstrap](http://startbootstrap.com) for the site template.
* [unsplash](http://unsplash.com) for stock photos.
* [Font Awesome](http://fortawesome.github.io/Font-Awesome) for the CSS toolkit.

## Images

* [unsplash-logoHelloquence](https://unsplash.com/@helloquence?utm_medium=referral&utm_campaign=photographer-credit&utm_content=creditBadge "Download free do whatever you want high-resolution photos from Helloquence")
* [unsplash-logoMajor Tom Agency](https://unsplash.com/@majortomagency?utm_medium=referral&utm_campaign=photographer-credit&utm_content=creditBadge "Download free do whatever you want high-resolution photos from Major Tom Agency")
* [unsplash-logoNick Fewings](https://unsplash.com/@jannerboy62?utm_medium=referral&utm_campaign=photographer-credit&utm_content=creditBadge "Download free do whatever you want high-resolution photos from Nick Fewings")
* [unsplash-logoDonald Giannatti](https://unsplash.com/@wizwow?utm_medium=referral&utm_campaign=photographer-credit&utm_content=creditBadge "Download free do whatever you want high-resolution photos from Donald Giannatti")

## License

This work is licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](LICENSE).

![Creative Commons License](https://i.creativecommons.org/l/by-sa/4.0/88x31.png "license")

## Disclaimer

Please review the [Disclaimer](DISCLAIMER).
