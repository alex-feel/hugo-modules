# Progressive Web App

## PWA Module

Add the following code to your module list in the `config/_default/module.toml` file.

```toml
[[imports]]
path = "github.com/alex-feel/hugo-modules/pwa"
```

<hr>

## PWA Implementation

Call it, as a partial in your theme head.

```html
<!-- progressive web app -->
{{ partial "manifest.html" . }}
```

Ensure the `site.webmanifest` file exists in the static folder; otherwise, it won't be included in the generated HTML.

Verify that all files referenced within the `site.webmanifest` file, such as `android-chrome-192x192.png` and `android-chrome-512x512.png`, are also present in the static folder. These are typically icon files that need to be accessible for the Progressive Web App (PWA) to function and display correctly.

Here is an illustrative example of what the `site.webmanifest` file might include:

```json
{
    "name": "Example Domain",
    "short_name": "Example Domain",
    "icons": [
        {
            "src": "/android-chrome-192x192.png",
            "sizes": "192x192",
            "type": "image/png"
        },
        {
            "src": "/android-chrome-512x512.png",
            "sizes": "512x512",
            "type": "image/png"
        }
    ],
    "theme_color": "#ffffff",
    "background_color": "#ffffff",
    "start_url": "https://www.example.com/",
    "display": "standalone"
}
```

---

Call it, as a partial in your theme footer.

```html
<!-- progressive web app -->
{{ partial "pwa.html" . }}
```

Add some following configuration to your `config/_default/config.toml` file.

```toml
############################# Outputs ##############################
[outputs]
home = ["WebAppManifest"]

############################ Media types ############################
[mediaTypes]
[mediaTypes."application/manifest+json"]
suffixes = ["webmanifest"]

############################ Output Format ###########################
[outputFormats]
[outputFormats.WebAppManifest]
mediaType = "application/manifest+json"
rel = "manifest"
```
