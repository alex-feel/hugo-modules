# Social share components

## Install Module

Add the following code to your module list in the `config/_default/module.toml` file.

```toml
[[imports]]
path = "github.com/alex-feel/hugo-modules/components/social-share"
```

Add the following code to your `assets/scss/main.scss` or `assets/scss/style.scss` file.

```scss
@import 'social-share';
```

<hr>

## Share Implementation

Call it, as a partial in your theme.

Available parameters:

* `Context`: .
* `Class`: wrapper class
* `Title`: share title
* `Facebook`: share facebook | default true
* `Twitter`: share twitter | default true
* `VK`: share vk | default true
* `Email`: share Email | default true
* `Reddit`: share reddit | default true
* `Whatsapp`: share whatsapp | default true
* `Telegram`: share telegram | default true
* `Linkedin`: share linkedin | default true 
* `ImageURL` URL of the image to share

```html
<!-- social share -->
{{ partial "social-share" (dict "Context" .) }}
```

or 

```html
<!-- social share -->
{{ partial "social-share" (dict "Context" $page "Title" (i18n "share")) }}
```

or 

```html
<!-- social share -->
{{ $page := . }}
{{ with .Resources.GetMatch (printf "%s" .Params.image) }}
  {{ partial "social-share" (dict "Context" $page "Title" (i18n "share") "ImageURL" .Permalink) }}
{{ else }}
  {{ partial "social-share" (dict "Context" $page "Title" (i18n "share")) }}
{{ end }}
```
