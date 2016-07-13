# [SVG on the web](https://svgontheweb.com/)

Techniques you can use to prepare, implement, and work with SVGs on the web.

There are many in-depth articles out there on specific SVG things, but I wanted to create a place which has an overview with key information for anyone to use as a reference. All the content is open source and free for you to do whatever you want with.

## Contributing

Contributions are more than welcome. To add / change / update anything, please either create an issue or fork and DIY.

I’ve added a simple gulp setup so you can run the page locally and update styles etc.

1. In Terminal `cd` into the directory
2. Run `npm install -g gulp` to get gulp setup globally (this might need `sudo`)
3. Run `npm install` to get the dependencies running

Once that is done you can start the server with `gulp` and stop it with `ctrl` + `c`.

The page will run at http://localhost:1234/

The page uses Sass which compiles to CSS. Make changes in the Sass folder and the page will reload automagically with the changes. The Base folder contains site wide base styles and the Modules folder has some page styles. It is built with [Sassline](https://github.com/jakegiltsoff/sassline).

## Translations

If you would like to translate the page, please fork the repo and duplicate the `zz-ZZ` folder. This has the latest content without the `span`s used to style some OpenType features so it should be a little easier to work from.

Thank you [janily](https://github.com/janily) for the Chinese translation and [meritt](https://github.com/meritt) for the Russian translation.

---

Love,
Jake
