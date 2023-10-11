function getIcons(arr) {
    const icons = arr.map((element) => element.id);
    return icons;
}
export function renderNavbar(arr) {
    const icons = getIcons(arr);
    const links = icons.map((element) => {
        return `<a class="navigation-slide icon-link m-2" href="#${element}"><img src="/public/icons/${element}.png" alt=${element} /></a>`;
    });
    document.getElementById("tariff-navigation").innerHTML = links
        .join("")
        .repeat(40);
}

// Scrolling behavior
export function scrollProductNav(handle) {
    const slider = document.getElementById("tariff-navigation");
    const sliderIndex = parseInt(
        getComputedStyle(slider).getPropertyValue("--navigation-slider-index")
    );
    if (handle.classList.contains("next-icon")) {
        slider.style.setProperty("--navigation-slider-index", sliderIndex + 1);
    } else if (handle.classList.contains("prev-icon")) {
        if (sliderIndex > 0) {
            slider.style.setProperty(
                "--navigation-slider-index",
                sliderIndex - 1
            );
        }
    }
}
