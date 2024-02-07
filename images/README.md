# Image components

## Install Module

Add the following code to your module list in the `config/_default/module.toml` file.

```toml
[[imports]]
path = "github.com/alex-feel/hugo-modules/images"
```

Add the following code to your `asstes/scss/main.scss` or `asstes/scss/style.scss` file.

```scss
@import 'images';
```

If you want to enable placeholder/lazy-loader, then add the following code to your js plugins list in the `config.toml` file.

```toml
[[params.plugins.js]]
link = "plugins/lazy-loader.js"
```

---

## Logo Implementation

Call it, as a partial in your theme.

```html
<!-- logo -->
{{ partial "logo.html" }}
```

Define the logo in the `config/_default/params.toml` file.

```toml
# logo
logo = "images/logo.png"
# logo_dark only used when theme has a dark mode
logo_dark = "images/logo_darkmode.png"

# use `px` or `x` with logo_width, example: "100px".
# Note: logo_width is not work with .svg file
logo_width = "100px"

# default logo height is the image height that you provided
logo_height = "80px"

# if logo_webp set false, it will not generate WEBP version of logo
logo_webp = true # default is true

# logo text will only show when logo is missing.
logo_text = "Boilerplate"
```

---

## Favicon Implementation

Call it, as a partial in your theme.

```html
<!-- favicon -->
{{ partialCached "favicon" . }}
```

Place your favicon files within the `static` directory of your Hugo project. They will be automatically copied to the root of the site during the build process.

Add the following parameters to your `config/_default/params.toml` file to set specific color values for various favicon functionalities.

```toml
# Theme Colors for Favicon
safari_theme_color = "#color"           # Used for <link rel="mask-icon">
ms_application_tile_color = "#color"    # Used for <meta name="msapplication-TileColor">
chrome_theme_color = "#color"           # Used for <meta name="theme-color">
```

Replace `#color` with your desired color values. The favicon partial will automatically add the appropriate meta tags and favicon links if the files exist within the static directory.

Ensure the files like `apple-touch-icon.png`, `browserconfig.xml`, `favicon.ico`, `favicon-16x16.png`, `favicon-32x32.png`, `mstile-144x144.png`, `mstile-150x150.png`, `mstile-310x150.png`, `mstile-310x310.png`, `mstile-70x70.png`, and `safari-pinned-tab.svg` exist in the static folder for them to be included in the generated HTML.

---

## Image Implementation

Call it, as a partial in your theme.

Available parameters:

* `Src`: image source
* `Alt`: image alt text
* `Size`: image size (example: "100x100")
* `Class`: image class
* `Resize`: image resize option | default: true
* `Webp`: generate webp version | default: true
* `Context`: image context | default: .
* `Command`: image resizing command | default: "Resize"
* `Placeholder`: image placeholder | default: false
* `DisplayXL`: image size for extra large screen | default: "1110px"
* `DisplayLG`: image size for large screen | default: "700px"
* `DisplayMD`: image size for medium screen | default: "600px"
* `DisplaySM`: image size for small screen | default: "545px"

```html
<!-- simple image call -->
{{ partial "image.html" (dict "Src" .Params.image ) }}

<!-- for content folder image, use .Context -->
{{ partial "image.html" (dict "Src" .Params.image "Context" .Page ) }}
```

---

## Background-Image Implementation

Call it, as a partial in your theme.

Available parameters:

* `Src`: background-image source
* `Size`: background-image resize (example: "100x100")
* `Perspective`: background-size | default: "cover"
* `Webp`: generate webp version | default: true
* `Context`: image context | default: .
* `Position`: background-position | default: "center center"
* `Repeat`: background-repeat | default: "no-repeat"
* `Placeholder`: If `Placeholder` is true, then `lazy` class is required to this element. | default: false

```html
{{ partial `bg-image.html` (dict `Src` .background_image ) | safeHTMLAttr }}
```

---

## Shortcode Implementation

Available parameters:

* `src`: image source
* `caption`: image caption
* `alt`: image alt text
* `height`: image height
* `width`: image width
* `position`: image position | available: "center", "left", "right", "float-left", "float-right"
* `command`: image resizing command | available: "Fit", "Fill", "Resize" | default: "Resize"
* `option`: image resizing option
* `class`: image custom class
* `title`: image title
* `webp`: generate webp version | default: true

```md
{{< image src="images/image.png" >}}
```
