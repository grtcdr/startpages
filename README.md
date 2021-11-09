<div align="center">

<h1>grtcdr's startpages</h1>

<a href="https://grtcdr.github.io/startpages/"><b>Take one for a spin!</b></a>

</div>

Each startpage folder contains: 
- Source code of the startpage
- A brief description
- An image preview

---

# Set Startpage As New Tab Page <a name="set-startpage"></a>
## Build & Sign The Extension for Firefox

I use Mozilla's `web-ext` to build and sign my startpage extensions.

- Please note that this is **not the only way** to set my startpages as a new
  tab page. There are extensions out there, like [New Tab
  Override](https://addons.mozilla.org/en-US/firefox/addon/new-tab-override/)
  that could help you customize your New Tab page, and are browser-agnostic.

- Any modifications you make to the startpages won't take effect unless the
  extension is rebuilt.

### Prerequisites
- [web-ext](https://github.com/mozilla/web-ext)

Install from NPM:
```bash
npm install --global web-ext
```

### Building The Extension
In your terminal:

1. Clone the repository:
```
git clone https://github.com/grtcdr/startpages
```

2. Jump inside the repository:
```
cd startpages
```

3. Navigate inside the __src__ directory of your desired startpage. 
Let's use _startpage_7_ as an example:
```
cd startpage_7/src
```

4. Sign the extension
```bash
web-ext sign --api-key=$AMO_JWT_ISSUER --api-secret=$AMO_JWT_SECRET
```

For more information on how to obtain your `api-key` and `api-secret`, [read
this guide by
Mozilla.](https://extensionworkshop.com/documentation/develop/getting-started-with-web-ext/)
Signing an extension is talked about under _"Signing your extension for
self-distribution"_.

If all goes well during the signing process, you will discover that a new
directory, `web-ext-artifacts` has appeared, and it contains a `.xpi` file.

5. Open Firefox, type `about:addons` in the search bar and drag & drop the
   `.xpi` file into the window.

6. Firefox will now prompt you to add the extension, click `Add`

You're good to go, the startpage will now appear every time you open up a new tab page.
