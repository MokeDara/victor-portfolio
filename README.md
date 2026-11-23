# Victor Moke – Portfolio

A scrapbook-style personal portfolio. Plain HTML, CSS and JavaScript:
no build step, no npm install. It runs as-is on Vercel.

## Folder layout

```
content.js        <- ALL your text lives here. This is the file you edit.
index.html        Home
about.html        About
experience.html   Experience, leadership, education, certifications
projects.html     Projects
assets/styles.css Colours, fonts, layout
assets/app.js     Builds the pages from content.js (no need to touch)
assets/space.js   The moving starfield background
assets/terminal.js The pop-up terminal (commands: help, about, projects…)
assets/cursor.js  The inverting square that drifts across your name on the home page (turn off with cursorLens: false in content.js)
assets/img/       Your photos (victor-casual.jpg, victor-suit.jpg, avatars)
assets/fonts/     Self-hosted fonts (free open licences)
assets/Victor-Daramola-Moke-CV.pdf   The CV visitors download
images/           Put project screenshots here
vercel.json       Gives clean URLs (/about instead of /about.html)
```

## 1. Put it on GitHub (first time)

1. Go to github.com → **New repository** → name it `portfolio` → **Create**.
2. On the new repo page click **uploading an existing file**.
3. Unzip this folder on your computer, open it, select **everything inside it**
   (not the folder itself) and drag it into the GitHub page.
4. Click **Commit changes**.

## 2. Host it on Vercel (first time)

1. Go to vercel.com → sign in with GitHub.
2. **Add New → Project** → pick your `portfolio` repo → **Import**.
3. Framework preset: **Other**. Leave everything else as it is → **Deploy**.
4. In about a minute you get a live link like `portfolio-xxxx.vercel.app`.
   You can rename it in Vercel → Project → Settings → Domains.

## 3. Updating it later (the easy way)

1. On GitHub, open `content.js` → click the ✏️ pencil icon.
2. Change the text you want (keep the quotes `" "` and commas `,`).
3. Click **Commit changes**. Vercel republishes automatically in about a minute.

### Add a photo or project image
1. On GitHub open the `images` folder → **Add file → Upload files** → upload e.g. `victor.jpg`.
2. In `content.js` set `photo: "images/victor.jpg"` (or a project's `image:`).

### Add a new project
In `content.js`, copy one `{ ... }` block inside `projects: [ ... ]`, paste it after the
last one with a comma between them, and change the text. Colours: `blue`, `ink`, `yellow`, `pink`.

### Update your CV download
Upload your new CV PDF into `assets/`, named `Victor-Daramola-Moke-CV.pdf` (it replaces the old one).

## The terminal
Visitors open it with the green `> about` button, the round `>_` button, or Ctrl+K / Cmd+K.
What `about` prints is the `terminalAbout` list in `content.js`. To add a new command,
add a line to the `commands` list in `assets/terminal.js`.

## Changing the sky
The sky colours are the `--space-*` values in the SPACE THEME part of `assets/styles.css`.

## Preview on your computer
Double-click `index.html` to open it in your browser.
