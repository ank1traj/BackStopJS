---
name: "Backstop JS"
about: "Creates a set of test screenshots and compares them with your reference screenshots \U0001F914."
framework: 'JavaScript'

---

## Readme

**Backstop JS** - 
BackstopJS creates a set of test screenshots and compares them with your reference screenshots. Any changes show up in a visual report

**How to install Backstop JS**
```js
npm install -g backstopjs
```

**The BackstopJS workflow**
- `backstop init` -  Set up a new BackstopJS instance -- specify URLs, cookies, screen sizes, DOM selectors, interactions etc. (see examples directory)
- `backstop reference` - Capture the reference screenshots
- `backstop test` - BackstopJS creates a set of test screenshots and compares them with your reference screenshots. Any changes show up in a visual report. (Run this after making CSS changes as many times as needed.)
- `backstop approve` - If the test you ran looks good, then go ahead and approve it. Approving changes will update your reference files with the results from your last test. Future tests are compared against your most recent approved test screenshots.


**How to Contribute**

Fork the repo by using `Fork` button, make changes and create a pull request.


