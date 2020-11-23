maxTries = 5;
delayMs = 1000;

tries = 0;
prevScrollY = -100;
function loadMore() {
    if (prevScrollY === window.scrollY) {
        tries++;
        // we might be done, or the page might still be loading
        if (tries === maxTries) {
            return;
        }
    } else {
        tries = 0;
    }
    prevScrollY = window.scrollY;
    window.scrollTo(0, prevScrollY + 100000);
    setTimeout(loadMore, delayMs);
}
loadMore();
