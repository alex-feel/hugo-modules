# Notice Shortcode

## Installation for Gethugothemes themes

Add the following code to your module list in the `config/_default/module.toml` file.

```toml
[[imports]]
path = "github.com/alex-feel/hugo-modules/shortcodes/notice"
```

Add the following code to your `asstes/scss/main.scss` or `asstes/scss/style.scss` file.

```scss
@import 'notice';
```

<hr>

## Shortcode Implementation

The shortcode accepts two parameters, the first one for the type of notice and the second one for the title of the notice.

```md
{{< notice "note" "Note Title" >}}
  This is a simple note.
{{< /notice >}}

{{< notice "tip" "Tip Title" >}}
  This is a simple tip.
{{< /notice >}}

{{< notice "info" "Info Title" >}}
  This is a simple info.
{{< /notice >}}

{{< notice "warning" "Warning Title" >}}
  This is a simple warning.
{{< /notice >}}
```
