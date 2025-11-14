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
