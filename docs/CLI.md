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

---

> 📋 To do....

---

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
npx -p @angular/cli@14.0.0 ng generate component header
```

```bash
# Create layout module
ng g m layout
# Create footer component in layout module
ng g c layout/footer
# export footer component
# move header to layout module and export it
```

- Use `{{ expression }}` or `attribute="[expression]"` to dynamically bind data
- Call functions in template for complex expressions (keep template simple)
- Use `@Input()` to pass data from parent to child component
- Use `| uppercase` (or any other _pipe_) to transform data presentation

### 🫵🏼 Practice

- [ ] Create a copyright component private in the Layout module

---

## 2 - Templates

Home page with list of published activities

### Models

`src\app\core\models\activity.type.ts`

```typescript
export type Id = string | number;
export type AgeCategory = "adult" | "child" | "family";
export type ActivityStates =
  | "draft"
  | "published"
  | "cancelled"
  | "confirmed"
  | "finished";
export type Activity = {
  ageCategory: AgeCategory;
  currency: string;
  date: string;
  description: string;
  id: Id;
  location: string;
  maxParticipants: number;
  minParticipants: number;
  price: number;
  slug: string;
  state: ActivityStates;
  title: string;
  userId: Id;
};
```

- `*ngFor="let activity of activities"`: iterate over activities
- `*ngIf="activity.price < 100"`: show 🫰🏼 only if price is less than 100
- `{{ activity.price | currency:activity.currency }}`: format price as currency
- `{{ activity.date | date:'mediumDate' }}`: format date as medium date
- `[class]="activity.ageCategory"`: add class to element based on age category
- filter activities by published state
- sort activities by date
- count activities

### 🫵🏼 Practice

- [ ] Extract activity list Item to a component in a Shared module
