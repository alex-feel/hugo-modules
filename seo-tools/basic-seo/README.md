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

Add the following configuration to your `config/_default/params.toml` file.

```toml
# SEO meta data for OpenGraph / Twitter Card
[metadata]
keywords = ["Boilerplate", "Hugo", "Themefisher", "GetHugoThemes"]
description = "This is default meta description"
author = "GetHugoThemes"
image = "images/website-thumb.png" # this image will be used as fallback if a page has no image of its own
title_suffix = "| Cool Site" # this string will be appended to the title tag
```

You can also specify other SEO related parameters in the front matter of each page:

```markdown
---
noindex: true # Set to true if you want to prevent search engines from indexing this page
canonical: "https://example.com/canonical-url" # Specify the canonical URL for this page
keywords: ["keyword1", "keyword2"] # Specify keywords for this page. Overrides site-wide keywords if set.
description: "This is a custom description for this page" # Specify description for this page. Overrides site-wide description if set.
---
```
