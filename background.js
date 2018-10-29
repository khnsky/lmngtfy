browser.webRequest.onBeforeRequest.addListener(
    (detail) => {
        return {
            redirectUrl : detail.url.replace(
                /(http|https):\/\/(www.)?lmgtfy.com\/\?.*q=/,
                "https://google.com/search?q="
            );
        };
    },
    { urls : ["*://lmgtfy.com/\?*", "*://www.lmgtfy.com/\?*"] },
    ["blocking"]
);
