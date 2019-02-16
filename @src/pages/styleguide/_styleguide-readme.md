<!--This file is exclusively used for the style guide. All style-guide-related comments must be enclosed by SG tags.
-->

<SG>
## Setup: Style Guide generation
The style guide you are reading is generated on the fly by the `gulp` task `styleguide` (using the markdown-styleguide-generator node module).

To create style guide entries, create a comment block with the `SG` in the first line. The next immediate line should be title of your style guide entry (using a `#` to demarcate the start). A `/` will indicate a sub-section title. So `#Title/Sub-section` will create a parent section named "Title", with a child named "Sub-section".

Create `html` examples (with a code snippet) by creating a code block followed by "html_example" (\`\`\`html_example).

    /* SG
    # Section/Component
    This is an example Component.

    ```html_example
    <div>...</div>
    ```
    */

Separating "development" comments from "styles" requires adding a `[[dev]]` anywhere within the title of that section.

    /* SG
    # Section/Component [[dev]]


Everything will be run through [Markdown (GitHub-flavored)](https://guides.github.com/features/mastering-markdown/). This allows text formatting and code samples.

#### Markdown Use

Sometimes meta information that does not fit logically into a scss file is necessary. In those cases, you can use a plain markdown file. To start a style guide block, wrap your comments in an `<SG>` "tag" rather than a `/* SG */` comment.

---

</SG>
