# Styling in React

## 1. Different Styling Approaches in React

React supports multiple ways to style UI components. The most commonly used approaches are:

- Inline Styles
- CSS Stylesheets
- CSS Modules
- Utility-First CSS (Tailwind CSS)
- Styled Components / CSS-in-JS (advanced, optional)

Each approach has different use cases depending on scalability, maintainability, and team workflow.

## 2. Importance of Component-Based Styling

React follows a component-based architecture, so styling should align with this philosophy.

Why component-based styling is important:

- Styles remain scoped to a component
- Avoids global CSS conflicts
- Improves code readability
- Makes components reusable
- Easier to maintain in large applications

Component-based styling ensures that UI logic and styles evolve together.

## CSS Modules

### What are CSS Modules?

CSS files where class names are locally scoped to the component.

File naming convention:

- `ComponentName.module.css`

### Example CSS (Button.module.css)

```css
.btn {
  background-color: blue;
  color: white;
  padding: 10px 20px;
}
```

### Example React Component

```jsx
import styles from "./Button.module.css";

function Button() {
  return <button className={styles.btn}>Click Me</button>;
}
```

### Benefits:

- No class name collision
- Clean and maintainable
- Works well with large projects

## 5. Tailwind CSS with React (Vite)

### What is Tailwind CSS?

A utility-first CSS framework that provides small, reusable classes for styling.

### Setup (One-Line Instruction as Requested):

Go to the Tailwind CSS website, click Get Started, then go to the Using Vite section and follow the steps provided to set up Tailwind CSS with React.

## 6. Basic Tailwind CSS Utilities

### Height & Width

```html
<div class="h-24 w-24 bg-orange-500"></div>
```

### Flexbox

```html
<div class="flex"></div>
```

### Center Items (Both Axis)

```html
<div class="flex items-center justify-center"></div>
```

### Space Between Items

```html
<div class="flex justify-between"></div>
```

### Background Color

```html
<div class="bg-blue-500"></div>
```

### Background Opacity

```html
<div class="bg-black bg-opacity-50"></div>
```

## 7. Custom CSS Values in Tailwind ([] syntax)

Tailwind allows custom values using square brackets.

### Examples:

```html
<div class="h-[120px] w-[300px]"></div>

<div class="bg-[#1e293b]"></div>

<div class="text-[18px]"></div>
```

### Why it's useful:

- No need to write custom CSS files
- Keeps everything inside JSX
- Fast UI experimentation

## 8. Why Tailwind Works Well with React

- Perfect for component-based styling
- No context switching between CSS and JSX
- Faster development
- Consistent design system
- Eliminates unused CSS

## Summary

- Inline Styles → Quick, dynamic, but limited
- CSS Modules → Scoped, maintainable, production-ready
- Tailwind CSS → Utility-first, fast, scalable, modern

Component-based styling is essential for clean React architecture