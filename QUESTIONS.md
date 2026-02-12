# Theory reflection

## Exercise 0 – Introduction and Organisation

> **1)** What is the purpose of HTML and CSS in a website?

- **HTML:** Structure, semantics and content of the website
- **CSS:** Design of the website


> **2)** Why are those technologies often separated in files?

- **Separation of Concerns:** Keeps content (HTML) separate from presentation (CSS), making code more maintainable and organized
- **Reusability:** One CSS file can style multiple HTML pages, avoiding code duplication
- **Maintainability:** Changes to styling can be made in one place without touching the HTML structure
- **Collaboration:** Developers can work on structure while designers work on styling independently
- **Performance:** Browsers can cache CSS files separately, improving load times for returning visitors

> **3)** How can I add CSS to HTML? (3 Options)

- **Inline style:** Directly on the HTML element with the style attribute
- **Separation:** In the head of the HTML document inside the style element
- **External file:** By declaring an external CSS file inside the head using a link element, which causes the client to download it to their local machine

> **4)** Consider the following HTML. Create some CSS that ensures the text in each element is shown with a different colour. What is the specificity of each selector?

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

> **5)** Style the "Special Item" list element to have a blue background colour by creating a CSS selector with a specificity score of 0,2,1,1.

```css
#container #bullets li.special {
    background-color: blue;
}
```

> **6)** What causes the “width 50% phenomenon” in inline-block elements?

When something is inline, every whitespace is treated as an actual space. The additional size of the font causes the boxes to exceed the available inline space, pushing the second element to a new line.

> **7)** How can the "width 50% phenomenon" be solved?

1. Remove whitespace using an HTML comment `(<!-- -->)`
2. Set parent font-size to 0 and reset child font size


## Exercise 1 – FE Basics & FE-BE

> **1)** What does the created package.json file look like?

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

> **2)** What `border-radius` is needed in relation to the px of width and height of a box to make it a circle?

To make a square box a circle, set border-radius to 50% of the width/height — or simply use:

`border-radius: 50%;`

This works regardless of the box's size, as long as width and height are equal.

If using px, `border-radius` needs to be set to half the width/height. For example:
- 100px × 100px box → `border-radius: 50px;`
- 200px × 200px box → ´border-radius: 100px;`

Key requirement: The box must be a square (width === height). If it's a rectangle, `border-radius: 50%;` will produce an ellipse, not a circle.


## Exercise 2 – CORS - AJAX & RESTful BE

> **1)** What does the created package.json file look like?

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


## Exercise 3 – Static Websites & CMS

> **1)** What options exist to resolve the CORS errors between our api and frontend?

1. **Option:** You could do it manually, setting the HTTP Response Header and returning status 200 in case of an OPTIONS request.
<br><small>Hint: in Express.js you can access the incoming request method via „req.method“. You can set HTTP Headers via res.header(‚NAME‘, ‚VALUE‘). And you can reply with more than one response using if/else..</small>
2. **Option:** In Express.js, there is middleware available.
<br><small>Hint: You can check https://expressjs.com/en/resources/middleware/cors.html for usage.</small>


## Exercise 4 – SPA Frameworks

> **1)** What do you see after creating the Vue app? What is the URL (including port number) the frontend is running?

http://localhost:5173/

The default port for Vite (which Vue 3 uses) is port 5173. If that port is already in use, Vite will automatically try the next available port (5174, 5175, etc.) and
display that in the terminal output.

You can see a welcome page in the browser with information about documentation, tooling, ecosystem, community and support.

> **2)** Frameworks like Vue do a lot of complex *magic* internally, simplifying development compared to *vanilla coding*. Use the browser dev tools and the network tab to understand how many HTML, CSS and JS files are loaded to render the app.

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


## Exercise 7 – UI Libraries and NPM Libraries

> **1)** Which files get modified? Is there an Angular package being installed? Does
this give a hint why we need matching versions of Material and Angular?
Look at the changes caused by the schematics scripts that ran on command
line command execution.

**Files modified by Angular Material schematics:**

1. **package.json** – Two new packages added:
   - `@angular/cdk`: ^20.2.14 (Component Dev Kit)
   - `@angular/material`: ^20.2.14

2. **index.html** - Google Fonts links added:
   - Roboto font (weights 300, 400, 500)
   - Material Icons font

3. **styles.scss** – Material theming setup:
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

> **2)** Do you see an advantage of a directive compared to a component now? See https://material.angular.io/components/button/overview

Yes, directives have a significant advantage over components in certain scenarios:

1. **Native element preservation:** A directive like `matButton` can be applied to native HTML elements (`<button>`, `<a>`) without replacing them. This preserves the semantic meaning and native behavior (e.g., `<a>` for navigation, `<button>` for actions).

2. **Flexibility:** The same directive can be applied to different element types. `matButton` works on both `<button>` and `<a>` elements, adding Material styling while keeping the native element's functionality intact.

3. **Accessibility:** Native elements come with built-in accessibility features. Using `<a matButton>` maintains proper link behavior for screen readers and keyboard navigation, whereas a custom `<mat-button>` component would need to re-implement these features.

4. **No wrapper elements:** Directives don't add extra DOM elements. A component would wrap content in its own element, potentially affecting layout and styling.

> **3)** What did you need to import and where to use the directive in a template?

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

> **4)** What did you need to import for the table (there will be multiple imports)? Did sth need to be changed substantially in HTML and/or TS?

**Imports needed:**
- `MatTableModule` from `@angular/material/table` — core table component with directives like `mat-table`, `matColumnDef`, `*matHeaderCellDef`, `*matCellDef`
- `MatButtonModule` from `@angular/material/button` — for styled buttons/links in table cells
- `RouterLink` from `@angular/router` — for navigation links (already used before)

**HTML changes — substantial:**
The HTML template changed significantly. Instead of a simple `*ngFor` loop, the Material table uses a declarative column-based structure:
- `<table mat-table [dataSource]="users">` replaces the regular `<table>`
- Each column is defined in an `<ng-container matColumnDef="...">` with separate `*matHeaderCellDef` and `*matCellDef` templates
- Row definitions use `*matHeaderRowDef` and `*matRowDef` directives
- The entire table structure is fundamentally different from a standard HTML table

**TS changes — minimal:**
- Only the `imports` array in the `@Component` decorator needed updating
- A `displayedColumns` string array property was added to define column order
- The rest of the component logic (service calls, data fetching) stayed the same

> **5)** What do you observe in terms of effort for the forms? Was it less or more complex to modify the template compared to the table? What did you need to import? Did sth need to be changed substantially in HTML or TS?

Forms were slightly less complex to modify than the table. The table required a significant HTML restructuring with `mat-table`, `matColumnDef`, `*matHeaderCellDef`, `*matCellDef`, `mat-header-row`, and `mat-row` directives — essentially a completely different template structure. The form mostly kept its existing structure but wrapped each input in `<mat-form-field>`, replaced `<label>` with `<mat-label>`, and added the `matInput` directive to inputs.

Imports needed for forms:
- `MatFormFieldModule` — container for form fields
- `MatInputModule` — Material styling for `<input>` elements
- `FormsModule` — still needed for `[(ngModel)]` two-way binding

Imports needed for tables (for comparison):
- `MatTableModule`, `MatButtonModule`

HTML vs. TS changes:
- HTML: Changed substantially for both, but the table required more drastic restructuring. The form mostly just wrapped existing elements in Material components.
- TS: Minimal changes in both cases — only the imports array in the component metadata needed updating. The form logic (ngModel binding, service calls) stayed the same. The table needed an additional `displayedColumns property.

Bottom line: The form was easier to migrate because the existing template-driven form structure (`[(ngModel)]`) could largely be preserved, while the table required a fundamentally different HTML structure.


## Exercise 8 – Automated Testing of an Angular Application

> **1)** What is the command to perform the navigation in the typescript code?

```typescript
this.router.navigate(['/route-path']);
```

The `Router` service is injected via the constructor and its `navigate()` method is called with an array containing the target route path. For example, `this.router.navigate(['/dashboard'])` navigates to the dashboard after login.


## Exercise 9 – Communication and State Management

> **1)** From which Angular package do you need to import {computed, Signal, signal, WritableSignal}?

```typescript
import {computed, Signal, signal, WritableSignal} from '@angular/core';
```

## Exercise 10 – Performance & User Experience

> **1)** Analyze CWV using the "Performance" Tab in the Browser Dev Tools

> What properties are displayed? Is there a "poor" property?

On the initial page load, the following properties are displayed:
- Largest Contentful Paint (LCP): 0.29 seconds, which is a good value
- Cumulative Layout Shift (CLS): 0 seconds, which is a good value
- Interaction To Next Paint (INP): 40 ms, which is a good value

> Repeat the measurement simulating 3G network. Is there a "poor" property?

Yes, the Largest Contentful Paint (LCP) value decreases to 4.33 seconds, which is bad.

> Repeat the analysis for https://www.hs-fulda.de/studium/ihre-bewerbung with no network throttling and throttling to 3G. Are there any "poor" properties?

No throttling:
- Largest Contentful Paint (LCP): 0.11 seconds, which is value is good
- Cumulative Layout Shift (CLS): 0 seconds, which is a good value
- Interaction To Next Paint (INP): 32 ms, which is a good value

Throttling to 3G:
- Largest Contentful Paint (LCP): 5.61 seconds, which is a pretty bad value
- Cumulative Layout Shift (CLS): 0,0 seconds, which is a good value
- Interaction To Next Paint (INP): 48 ms, which is a good value


> What could be done to improve the poor score?

- Compress images and use modern formats (WebP, AVIF)
- Implement responsive images with srcset and sizes attributes
- Progressive image rendering


> **2)** AnalyZe both URLs using the "Lighthouse" Tab in the Chrome Browser Dev Tools. Perform a scan both for mobile and desktop and check recommendations.

> Is there a difference between mobile and desktop?

There are significant differences between the mobile and desktop versions. The mobile performance of the start page (77) is worse than the desktop performance (93), and even worse for the other URL on the mobile version (67).

> What metrics feed into the performance score?

The performance score is based on the following metrics:
- First Contentful Paint (FCP)
- Speed Index (SI)
- Largest Contentful Paint (LCP)
- Total Blocking Time (TBT)
- Cumulative Layout Shift (CLS)

> What are the two top recommendations to improve mobile performance?

- **Render blocking requests**: Requests are blocking the page's initial render, which may delay LCP. Deferring or inlining can move these network requests out of the critical path
- **Use efficient cache lifetimes**: A long cache lifetime can speed up repeat visits to your page.

> Find out a potential SEO improvement by checking the recommendations

- **Links do not have descriptive text**: Descriptive link text helps search engines understand your content.


## Exercise 11 – PWAs, Hybrid and Native Apps

> **1)** Add PWA capabilities to your app using an Angular schematic to install PWA content.

> Which existing files are modified?

- `angular.json`
- `package.json`
- `package-lock.json`
- `src/app/app/app-module.ts`
- `src/index.html`

> Which ones are added?

- `ngsw-config.json`
- `public/manifest.webmanifest`
- `public/icons/` (directory with PWA icon files)

> **2)** How can you be sure all browsers support the Service-Worker JS API?

You can check browser support on [caniuse.com](https://caniuse.com/serviceworkers). To ensure the API is available at runtime, use feature detection:

```javascript
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js');
}
```


## Exercise 12 – Modern concepts: Microfrontends, Web components, Custom Events, Broadcast Channel

> **1)** Does the CSS affect our web component?

No, the CSS does not affect the web component's internal content.

The reason is **Shadow DOM encapsulation**. Looking at the `hello-world.js` implementation:

```javascript
constructor() {
    super();
    this.attachShadow({ mode: 'open' });
}
```

Because the component uses `attachShadow()`, it creates a **style boundary** that isolates the component from external styles.

**Ways to style shadow DOM content:**

1. **Internal styles:** Add `<style>` tags inside the shadow root
2. **CSS Custom Properties:** CSS variables can pierce the shadow boundary
3. **`::part()` selector:** Expose specific elements for external styling

This encapsulation is one of the main benefits of Shadow DOM — components are protected from unintended style conflicts with the rest of the page.

> **2)** Replace the code in our web component by commenting out the `attachShadow` command and changing `this.shadowRoot.innerHTML` to `this.innerHTML`. Does the external CSS change the style now?

Yes, now the external CSS affects the web component! 

Without Shadow DOM, the `<div>Hello, World!</div>` is rendered directly into the **light DOM** (the main document).

**Key takeaway:** Without Shadow DOM, web components have no style encapsulation. The component's internal elements become part of the regular DOM and are subject to all CSS rules in the document — both intentional and accidental style "leakage"

> **3)** Add the <hello-world></hello-world> custom element in the index.html and serve Angular. Inspect the browser for errors. What is the error message?

**Error messages in the browser console:**

1. `Failed to load resource: the server responded with a status of 404 (Not Found)`
2. `Refused to execute script from 'http://localhost:4200/public/custom.js' because its MIME type ('text/html') is not executable, and strict MIME type checking is enabled.`

> **4)** Which command from `@angular/elements` do you need?

`import { createCustomElement } from '@angular/elements';`

createCustomElement() converts an Angular component into a class that can be registered with the browser's native customElements.define() API.

Usage pattern:
```javascript
const element = createCustomElement(MyComponent, { injector: this.injector });                                                                                                
customElements.define('my-tag', element); 
```
