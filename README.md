# Facebook Privacy Protector

## Description

Facebook Privacy Protector is a Chrome Extension that prevents Facebook from monitoring the News Feed shared links you visit, improving the privacy.
This extension opens the news feed links in a new Incongnito window, reducing the chances that a hacker steal your cookies or hijack your browser.

## Is it in Chrome Web Store?

Unfortunately not just yet.
Funny story: In order to publish in Chrome Web Store you must pay 5 bucks and right now I can't afford such huge amount of money haha. But, it'll eventually be there.

## So, how do I install it?

1. [Download](https://github.com/richin13/chrome-fpp/archive/master.zip) and extract the files.
2. Go to **Settings** > **Extensions** or paste chrome://extensions in the address bar. In Chrome Browser, in case is not clear enough.
3. Check the top right checkbox **Developer mode**
4. Click **Load unpacked extension** button and select the folder containing the **manifest.json** and all the other files.


## Facebook monitoring?

Have you ever spotted the **l.facebook.com/l.php?u=some-url-here**. It's a simple PHP redirector, you may say. Well, as far as we know, it may be a super-advanced logger or just something like this:

	<?php
	$url = $_GET['u'];
	header("Location: " . $url);

So, why would we take that chance. Let's copy the raw url, open an Incognito window, paste that url and access that website without letting Facebook know about it. But that whole proccess is just boring so this extension does all the required steps for you. Sorry Mark.

## Session or browser haij, hiya, hija.. whatever

Yes! Session or browser **hijacking** is a real issue. Some hot lady could make you click a malicious link where some random hacker will be waiting to steal all you data and money, or just post porn in your friend's timeline, who knows?
Opening those links on Incognito Mode will delete your session cookies, thus, no session to hijack. They could still use Phising method so take care.

## Tracking cookies? Not me.

Tracking cookies are real, do not let the companies know that the guy visiting [16 Times Snapchat Got It Right](http://diply.com/thatjusthappened/snapchat-got-it-right/154082) kind of crappy post is the same that read about quantum physics last night, they may get confused.

### License

See LICENSE 