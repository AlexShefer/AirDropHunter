import { removeDemoHeader } from "./src/header.js";
import { expandNews, scrollNewsSlider, renderNews } from "./src/news.js";
import { newsList } from "./src/newsList.js";
import { data } from "./src/data.js";
import { renderProductGrid } from "./src/productGrid.js";
import { renderNavbar, scrollProductNav } from "./src/navigation.js";

renderNews(newsList);
renderNavbar(data);
renderProductGrid(data);

document.addEventListener("click", (e) => {
    let handle;
    if (e.target.matches("#close-demo img")) {
        removeDemoHeader();
    } else if (
        e.target.matches("#news-expand-btn") ||
        e.target.closest("#news-expand-btn")
    ) {
        expandNews(newsList);
    } else if (
        e.target.matches("#next-news") ||
        e.target.closest("#next-news")
    ) {
        scrollNewsSlider("next");
    } else if (
        e.target.matches("#prev-news") ||
        e.target.closest("#prev-news")
    ) {
        scrollNewsSlider("prev");
    } else if (e.target.matches(".handle-nav")) {
        scrollProductNav(e.target);
    } else if (e.target.closest(".handle-nav")) {
        scrollProductNav(e.target.closest(".handle-nav"));
    }
});
