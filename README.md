# My startpages

#### What are startpages?

Startpages are the home of your browser, they can contain useful information, recently visited websites, time and weather data.

#### Where to find my startpages?

The code for a startpage can be found under __src/__ of a startpage folder.

#### To-do:
- [x] startpage_3 is on its way: it will be just as minimal as previous startpages, but as with my other two startpages, each one contains a unique feature to make it stand out from the rest.

## How to use my startpages:
### Set as home page:
First, let's clone the repo:
```
git clone https://github.com/grtcdr/startpages
```
Set it as a home page for Firefox:
1. Open Firefox and click on the hamburger menu on the top right
2. Click Preferences
3. Click Home
4. Next to "Homepage and new windows" is a drop down list: select _Custom URLs_, which we will use to specify the URL of the _startpage_1.html_ local file.
5. Paste the URL of _startpage_1.html_, this URL will look like: _file:///path/to/your/startpage.html_
Here's an example: file:///home/user/Startpages/startpage_1/src/startpage.html

### Set as new tab page:
Locate the _XPI_ file under startpage_x>src>web-ext>web-ext-artifacts, this file is an extension and allows you to set my startpage as your new tab page permanently:
1. Open Firefox and click on the _hamburger menu_ on the top right
2. Click _Addons_
3. Drag & Drop the _XPI file_ into the Add-ons page
4. A pop-up will appear, click _Add_.

You now have the startpage set as your new tab page. If you want to disable/remove it, disable/remove the add-on from about:addons and you're back to normal.
_If you don't want to use my extension, you can find a how-to guide to set the startpage as your new tab page using a different method over at https://stpg.tk. 
It didn't work for me, but it might help you out (I heard they're updating it to address some issues)._

## How to build the extension:
I use web-ext to build and sign my startpage extension, if you are making changes to the startpage to fit your 
needs and want them to apply to the extension:
- Install Mozilla's web-ext from [their github page](https://github.com/mozilla/web-ext)
- While in the startpage directory, run in your terminal:
```
web-ext sign --api-key=$AMO_JWT_ISSUER --api-secret=$AMO_JWT_SECRET
```
For more information on how to obtain your api-key and api-secret, [read this guide by Mozilla.](https://extensionworkshop.com/documentation/develop/getting-started-with-web-ext/)
Web-ext sign is talked about under _"Signing your extension for self-distribution"_

_I'm not the only person making these, there's a whole community just as passionate about spicing up the once boring space most people forget about! You can find many more startpages on reddit at **r/startpages**!_
