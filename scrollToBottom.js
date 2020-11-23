prevScrollY = -100;
function loadMore() {
    if (prevScrollY === window.scrollY) {
        // we're done
        return;
    }
    prevScrollY = window.scrollY;
    window.scrollTo(0, prevScrollY + 100000);
    setTimeout(loadMore, 1000);
}
loadMore();
