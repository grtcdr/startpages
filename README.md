# grtcdr's startpages

## Table of Contents:
- [What is a startpage](#what-is-startpage)
- [Where to find my startpages](#find-startpage)
- [How to use the startpages](#use-startpage)
	- [Set as home page](#sp-home)
	- [Set as new tab page](#sp-newtab)
	- [Build the extension](#build-extension)

### What is a startpage <a name="what-is-startpage"></a>

Startpages are the home of your browser, they can contain useful information such as recently visited websites, time and weather data.

### Where to find my startpages <a name="find-startpage"></a>

The code for these startpages can be found under __src/__ of any startpage folder, there is also an extension available for each one under __src/web-ext-artifacts/__

Each startpage folder contains a preview and a description of that startpage so you can get an idea of what it does/looks like.

### How to use the startpages <a name="use-startpage"></a>
#### Set as home page <a name="sp-home"></a>
First, let's clone the repo:
```
git clone https://github.com/grtcdr/startpages
```
Set it as a home page for Firefox (And other browsers too):
1. Open Firefox and click on the hamburger menu on the top right
2. Click Preferences > Home
3. Next to "Homepage and new windows" is a drop down list: select _Custom URLs_, which we will use to specify the URL of the _startpage_1.html_ local file.
4. Paste the URL of _startpage_1.html_, this URL will look like: _file:///path/to/your/startpage.html_
Here's an example: file:///home/user/Startpages/startpage_1/src/startpage.html

#### Set as new tab page <a name="sp-newtab"></a>
Locate the _XPI_ file under startpage_x>src>web-ext>web-ext-artifacts, this file is an extension and allows you to set the startpage as your new tab page permanently:
1. Open Firefox and click on the _hamburger menu_ on the top right
2. Click _Addons_
3. Drag & Drop the _XPI file_ into the Add-ons page
4. A pop-up will appear, click _Add_.

You now have the startpage set as your new tab page. If you want to disable/remove it, disable/remove the add-on from about:addons and you're back to normal.
_If you don't want to use the extension, you can find a how-to guide to set the startpage as your new tab page using a different method over at https://stpg.tk. 
It didn't work for me, but it might help you out (I heard they're updating it to address some issues)._

#### Build the extension <a name="build-extension"></a>
I use web-ext to build and sign my startpage extension, if you are making changes to the startpage to fit your 
needs and want them to apply to the extension:
- Install Mozilla's web-ext from [their github page](https://github.com/mozilla/web-ext)
- In your terminal, navigate to the startpage directory and run:
```
web-ext sign --api-key=$AMO_JWT_ISSUER --api-secret=$AMO_JWT_SECRET
```
For more information on how to obtain your api-key and api-secret, [read this guide by Mozilla.](https://extensionworkshop.com/documentation/develop/getting-started-with-web-ext/)
Web-ext sign is talked about under _"Signing your extension for self-distribution"_

_I'm not the only person making these, there's a whole community just as passionate about spicing up the once boring space most people forget about! You can find many more startpages on reddit at **r/startpages**!_
