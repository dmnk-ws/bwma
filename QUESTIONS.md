# Theory reflection

---

> **T1)** What is the purpose of HTML and CSS in a website? Why are those technologies often separated in files?

**What is the purpose of HTML and CSS in a website?**
- **HTML:** Structure, semantics and content of the website
- **CSS:** Design of the website

**Why separate them?**
- **Separation of Concerns:** Keeps content (HTML) separate from presentation (CSS), making code more maintainable and organized
- **Reusability:** One CSS file can style multiple HTML pages, avoiding code duplication
- **Maintainability:** Changes to styling can be made in one place without touching the HTML structure
- **Collaboration:** Developers can work on structure while designers work on styling independently
- **Performance:** Browsers can cache CSS files separately, improving load times for returning visitors

> **T2)** How can I add CSS to HTML? (3 Options)
- **Inline style:** Directly on the HTML element with the style attribute
- **Separation:** In the head of the HTML document inside the style element
- **External file:** By declaring an external CSS file inside the head using a link element, which causes the client to download it to their local machine

> **T3)** Consider the following HTML. Create some CSS that ensures the text in each element is shown with a different colour. What is the specificity of each selector?

```html
<!DOCTYPE html>

<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>My first exercise</title>
    </head>
    <body>
        <div id="container">
            <section class="content">
                <h1>Welcome to Specificity Exercises</h1>
                <p class="text">
                    This is a paragraph with
                    <span class="highlight">highlighted</span>
                    text.
                </p>
                <p id="unique">An element with a unique identifier.</p>
                <ul id="bullets">
                    <li class="item">Item 1</li>
                    <li>Item 2</li>
                    <li class="special item">Special Item</li>
                </ul>
            </section>
            <a href="#" class="link">More exercises</a>
        </div>
    </body>
</html>
```

```css
.content > h1 {
    color: red;
}

p.text {
    color: blue;
}

span.highlight {
    color: salmon;
}

#unique {
    color: green;
}

#bullets li {
    color: pink;
}

#bullets .item {
    color: orange;
}

#bullets .special {
    color: purple;
}

a.link {
    color: black;
}
```

- **`.content > h1`**: (0, 0, 1, 1)
- **`p.text`**: (0, 0, 1, 1)
- **`span.highlight`**: (0, 0, 1, 1)
- **`#unique`**: (0, 1, 0, 0)
- **`#bullets li`**: (0, 1, 0, 1)
- **`#bullets .item`**: (0, 1, 1, 0)
- **`#bullets .special`**: (0, 1, 1, 0)
- **`a.link`**: (0, 0, 1, 1)


> **T4)** Style the "Special Item" list element to have a blue background colour by creating a CSS selector with a specificity score of 0,2,1,1.
```css
#container #bullets li.special {
    background-color: blue;
}
```

> **T5)** Frameworks like Vue do a lot of complex *magic* internally, simplifying development compared to *vanilla coding*. Use the browser dev tools and the network tab to understand how many HTML, CSS and JS files are loaded to render the app.

**Vue App File Loading Analysis (Development Mode with Vite):**

To inspect: Open http://localhost:5174/ in your browser, open DevTools (F12), go to the Network tab, and refresh the page.

**Files loaded in development mode:**
1. **One HTML file** - `index.html`
2. **Multiple JavaScript modules** loaded separately:
   - `client` - Vite's hot module replacement (HMR) client
   - `src/main.js` - Application entry point
   - `src/App.vue` - Root Vue component (compiled to JS)
   - Individual `.vue` component files (each loaded as separate JS modules)
   - `node_modules/vue/dist/vue.runtime.esm-bundler.js` - Vue framework (~500KB uncompressed)
3. **CSS files** - Loaded as separate requests or injected via JavaScript:
   - Component-scoped styles
   - Global stylesheets (if any)
4. **Static assets** - Images, fonts, logo, etc.
    - Favicon.ico
    - logo.svg

Around 30+ separate files depending on the number of components.



# Other questions

---

> **1)** What causes the “width 50% phenomenon” in inline-block elements?

When something is inline, every whitespace is treated as an actual space. The additional size of the font causes the boxes to exceed the available inline space, pushing the second element to a new line.

> **2)** How can the “width 50% phenomenon” be solved?

1. Remove whitespace using an HTML comment `(<!-- -->)`
2. Set parent font-size to 0 and reset child font size

> **3)** How does the created package.json file look like?

**The created `package.json` file:**
```json
{
  "name": "vanilla",
  "version": "1.0.0",
  "description": "building web and mobile apps",
  "main": "users.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "dmnkws",
  "license": "ISC"
}
```

**Explanation of the default structure:**
- **name:** The project name (taken from the folder name)
- **version:** Starting version number following semantic versioning
- **description:** Empty by default, can be filled in later
- **main:** Entry point file for the project
- **scripts:** Command shortcuts that can be run with `npm run`
- **author:** Package creator information
- **license:** ISC is the default open-source license

> **4)** How does the created package.json file in `/api` look like?

```json
{
  "name": "api",
  "version": "1.0.0",
  "description": "building web and mobile apps backend",
  "main": "app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "dmnkws",
  "license": "ISC",
  "dependencies": {
    "express": "^5.1.0"
  }
}
```

- **dependencies:** List of all the external packages the project needs to run in production


> **5)** What do you see after creating the Vue app? What is the URL (including port number) the frontend is running?

http://localhost:5173/

The default port for Vite (which Vue 3 uses) is port 5173. If that port is already in use, Vite will automatically try the next available port (5174, 5175, etc.) and
display that in the terminal output.

You can see a welcome page in the browser with information about documentation, tooling, ecosystem, community and support.

> **6)** Which files get modified? Is there an Angular package being installed? Does
this give a hint why we need matching versions of Material and Angular?
Look at the changes caused by the schematics scripts that ran on command
line command execution.

**Files modified by Angular Material schematics:**

1. **package.json** - Two new packages added:
   - `@angular/cdk`: ^20.2.14 (Component Dev Kit)
   - `@angular/material`: ^20.2.14

2. **index.html** - Google Fonts links added:
   - Roboto font (weights 300, 400, 500)
   - Material Icons font

3. **styles.scss** - Material theming setup:
   - Imports `@angular/material` as a Sass module
   - Configures Material 3 theming with `mat.theme()` mixin
   - Sets color palettes (azure primary, blue tertiary)
   - Configures typography (Roboto) and density
   - Applies system-level CSS variables for background, text color, and fonts

**Angular package being installed:**

Yes, `@angular/cdk` (Component Dev Kit) is automatically installed alongside `@angular/material`. The CDK is a foundational library that Material depends on - it provides behavior primitives like accessibility, overlays, drag-and-drop, etc.

**Why matching versions are required:**

The version numbers tell the story:
- Angular core packages: `^20.3.0`
- Angular Material/CDK: `^20.2.14`

Both use major version 20. This is necessary because:
1. **Internal API dependencies:** Material components use Angular's internal APIs (change detection, dependency injection, rendering). These APIs can change between major versions.
2. **Build system compatibility:** Material uses Angular's compiler and build tools, which must be compatible.
3. **The CDK dependency chain:** Material → CDK → Angular Core. If any link breaks, the whole chain fails.
4. **Synchronized releases:** The Angular team releases Material alongside Angular to ensure compatibility. Using Material v19 with Angular v20 (or vice versa) could cause runtime errors or build failures.


> **7)** Do you see an advantage of a directive compared to a component now? See https://material.angular.io/components/button/overview

Yes, directives have a significant advantage over components in certain scenarios:

1. **Native element preservation:** A directive like `matButton` can be applied to native HTML elements (`<button>`, `<a>`) without replacing them. This preserves the semantic meaning and native behavior (e.g., `<a>` for navigation, `<button>` for actions).

2. **Flexibility:** The same directive can be applied to different element types. `matButton` works on both `<button>` and `<a>` elements, adding Material styling while keeping the native element's functionality intact.

3. **Accessibility:** Native elements come with built-in accessibility features. Using `<a matButton>` maintains proper link behavior for screen readers and keyboard navigation, whereas a custom `<mat-button>` component would need to re-implement these features.

4. **No wrapper elements:** Directives don't add extra DOM elements. A component would wrap content in its own element, potentially affecting layout and styling.

> **8)** What did you need to import and where to use the directive in a template?

**Import in the component TypeScript file (`users-component.ts`):**
```typescript
import { MatButtonModule } from '@angular/material/button';
```

**Add to the component's imports array:**
```typescript
@Component({
  selector: 'app-users-component',
  imports: [RouterLink, MatButtonModule],
  // ...
})
```

**Use in the template (`users-component.html`):**
```html
<a matButton="filled" [routerLink]="['/user', user.id]">Show</a>
```

The directive is applied as an attribute on native elements. The value `"filled"` specifies the button appearance variant (other options include `"outlined"`, `"elevated"`, `"tonal"`).

