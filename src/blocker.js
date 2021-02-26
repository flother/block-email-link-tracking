let pattern = "*://*.safelinks.protection.outlook.com/*";

function redirect(details) {
  const url = new URL(details.url);
  const params = url.searchParams;
  if (params.has("url")) {
    console.log(`Redirecting Safe Links URL '${details.url}'.`);
    return {
      redirectUrl: params.get("url"),
    };
  } else {
    return {
      cancel: true,
    };
  }
}

browser.webRequest.onBeforeRequest.addListener(
  redirect,
  {urls:[pattern]},
  ["blocking"]
);
