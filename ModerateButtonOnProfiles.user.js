// ==UserScript==
// @name         Moderate Button on Profiles
// @namespace    http://www.reddit.com/u/vCarbonnn
// @updateURL    https://github.com/vCarbonnn/ModerateButtonOnProfiles/raw/master/ModerateButtonOnProfiles.user.js
// @version      1.0
// @description  Adds a button to TagPro profiles which takes you to their moderate user page.
// @author       Carbon
// @include      http://tagpro-*.koalabeast.com/profile/*
// ==/UserScript==

var moderateButtonLink = document.createElement("a");
moderateButtonLink.innerText = "Moderate";
moderateButtonLink.className = "btn btn-default";

var path = document.location.pathname;
moderateButtonLink.href = "/moderate/users/"+path.substring(path.lastIndexOf("/")+1);

var insertionPoint = document.getElementsByClassName("pull-right profile-exit")[0];
insertionPoint.prepend(moderateButtonLink);
