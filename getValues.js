values = []
document.querySelectorAll("a._3cb8").forEach((element) => {
    value = element.getAttribute("href").replace("/", "");
    values.push(value);
});
values.join(",");
