# Custom Script component

## Install Module

Add the following code to your module list in the `config/_default/module.toml` file.

```toml
[[imports]]
path = "github.com/alex-feel/hugo-modules/components/custom-script"
```

<hr>

## custom-script Head Implementation

Call it, as a partial in your theme head.

```html
<!-- custom script head -->
{{ partialCached "custom_script_head.html" . }}
```

Configure it in the `config/_default/params.toml` file.

```toml
# Custom script in head, example: custom_script_head= "<script>console.log(\"Hello World\")</script>"
custom_script_head = ""
```

<hr>

## custom-script Body Implementation

Call it, as a partial before the closing body tag in your theme.

```html
<!-- custom script body -->
{{ partialCached "custom_script_body.html" . }}
```

Configure it in the `config/_default/params.toml` file.

```toml
# Custom script before closing body tag, example: custom_script_body= "<script>console.log(\"Hello from the footer\")</script>"
custom_script_body = ""
```
