# Angular Command Line Interface (CLI) Journal

## 0 - CLI

```bash
# generate with specific version without global installation
npx -p @angular/cli@14.2.10 ng new minsait-ng_dev-23_03
cd minsait-ng_dev-23_03
# start development server
npm start
# build deployable app
npm run build
```

> 📋 To do....

### Styles

```bash
# Install picocss to add styles to the app
npm install @picocss/pico
# add to angular.json
"node_modules/@picocss/pico/css/pico.min.css",
```

Global styles in `src/styles.css`

```css
body {
  padding: 0.8rem;
}
:root {
  --form-element-spacing-vertical: 0.25rem;
  --form-element-spacing-horizontal: 0.25rem;
}
span {
  display: inline-block;
  margin-right: 0.5rem;
}
```

## 1 - Components

```bash
# Create header component
ng generate component header
## Alternative using remote execution
npx ng generate component header
## Alternative using remote specific version
npx -p @angular/cli@15.0.0 ng generate component header
```

```bash
# Create layout module
ng g m layout
# Create footer component in layout module
ng g c layout/footer
# export footer component
# move header to layout module and export it
# Create copyright component
ng g c layout/copy-right
```

- Use `{{ expression }}` or `attribute="[expression]"` to dynamically bind data
- Call functions in template for complex expressions (keep template simple)
- Use `@Input()` to pass data from parent to child component
- Use `| uppercase` (or any other _pipe_) to transform data presentation
