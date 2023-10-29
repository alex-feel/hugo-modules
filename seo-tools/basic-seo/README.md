# Basic SEO with Opengraph and Twitter Card

## Basic Seo Module

Add the following code to your module list in the `config/_default/module.toml` file.

```toml
[[imports]]
path = "github.com/alex-feel/hugo-modules/seo-tools/basic-seo"
```

<hr>

## Basic Seo Implementation

Call it, as a partial in your theme head.

```html
<!-- opengraph -->
{{ partial "basic-seo.html" . }}
```

### Configuration

Add the following configuration to your `config/_default/params.toml` file to set global SEO metadata:

```toml
# SEO meta data for OpenGraph / Twitter Card
[metadata]
keywords = ["Boilerplate", "Hugo", "Themefisher", "GetHugoThemes"]
description = "This is default meta description"
author = "Default Author"
image = "images/website-thumb.png" # this image will be used as fallback if a page has no image of its own
title_suffix = "| Cool Site" # this string will be appended to the title tag
```

In your `config/_default/hugo.toml` file, specify your site's Twitter username:

```toml
# Twitter username for twitter:site meta tag
[social]
twitter = 'your_twitter_handle'
```

### Author Information

Create a `data/authors.json` file to specify the authors and their Twitter handles:

```json
{
  "author1": {
    "twitter": "author1_twitter_handle"
  },
  "author2": {
    "twitter": "author2_twitter_handle"
  }
}
```

In the front matter of each page, you can specify the authors like so:

```markdown
---
authors: ["author1", "author2"]
---
```

With these configurations, the `twitter:creator` meta tag will be set to the Twitter handles of the authors specified in the front matter of each page. If the authors parameter is missing, invalid, or if none of the specified authors are found in `authors.json`, the `twitter:creator` meta tag will fall back to the Twitter username specified in the `hugo.toml` file.

The `author` meta tag will be set for each author specified in the front matter of each page. If a translation for the author's name is available in the site's i18n files, it will be used; otherwise, the name from the front matter will be used directly. If the `authors` parameter is missing or empty, the `author` meta tag will fall back to the global author specified in the `params.toml` file.

### Page-Specific SEO Parameters

You can also specify other SEO related parameters in the front matter of each page:

```markdown
---
noindex: true # Set to true if you want to prevent search engines from indexing this page
canonical: "https://example.com/canonical-url" # Specify the canonical URL for this page
keywords: ["keyword1", "keyword2"] # Specify keywords for this page. Overrides site-wide keywords if set.
description: "This is a custom description for this page" # Specify description for this page. Overrides site-wide description if set.
---
```
