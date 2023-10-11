export function renderNews(data) {
    const newsExpandPanel = document.getElementById("news-expand");
    newsExpandPanel.innerHTML = collapsedAccordionHeader(data[0].title);
    const newsSlierContainer = document.getElementById("news-slider");
    data.forEach((element) => {
        const slide = document.createElement("span");
        slide.classList.add("news-slide");
        const timeCode = document.createElement("p");
        timeCode.classList.add("time-code");
        timeCode.textContent = element.timeCode;
        const newsTitle = document.createElement("h2");
        newsTitle.classList.add("news-title");
        newsTitle.textContent = element.title;
        const newsBody = document.createElement("p");
        newsBody.classList.add("news-short");
        newsBody.textContent = element.short;
        slide.appendChild(timeCode);
        slide.appendChild(newsTitle);
        slide.appendChild(newsBody);
        newsSlierContainer.appendChild(slide);
    });
}

export function expandNews(data) {
    const newsExpandPanel = document.getElementById("news-expand");
    const button = document.querySelector(".news-expand");
    const newsContent = document.querySelector(".news-content");
    const btnArrow = document.querySelector(".btn-arrow");
    const slides = document.querySelectorAll(".news-slide");
    const sliderContainer = document.querySelector(".news-content-slider");
    const sliderPosition = parseInt(
        getComputedStyle(sliderContainer).getPropertyValue(
            "--news-slider-index"
        )
    );

    button.classList.toggle("news-expand--active");
    if (button.classList.contains("news-expand--active")) {
        newsContent.style.minHeight = newsContent.scrollHeight + "px";
        newsContent.style.height = "auto";
        btnArrow.style.transform = "rotate(-90deg)";
        newsExpandPanel.innerHTML = expandedAccordionHeader(
            sliderPosition + 1,
            slides.length
        );
    } else {
        newsContent.style.minHeight = 0;
        newsContent.style.height = 0;
        btnArrow.style.transform = "rotate(0deg)";
        newsExpandPanel.innerHTML = collapsedAccordionHeader(
            data[sliderPosition].title
        );
    }
}

export function scrollNewsSlider(direction) {
    const newsExpandPanel = document.getElementById("news-expand");
    const slides = document.querySelectorAll(".news-slide");
    const sliderContainer = document.querySelector(".news-content-slider");
    const sliderPosition = parseInt(
        getComputedStyle(sliderContainer).getPropertyValue(
            "--news-slider-index"
        )
    );
    console.log(sliderPosition + 2 === slides.length);
    if (direction === "next" && sliderPosition < slides.length - 1) {
        sliderContainer.style.setProperty(
            "--news-slider-index",
            sliderPosition + 1
        );
        newsExpandPanel.innerHTML = expandedAccordionHeader(
            sliderPosition + 2,
            slides.length
        );
        if (sliderPosition + 2 === slides.length) {
            nextButton.style.background = "#FFFFFF";
        }
    } else if (direction === "prev" && sliderPosition > 0) {
        sliderContainer.style.setProperty(
            "--news-slider-index",
            sliderPosition - 1
        );
        newsExpandPanel.innerHTML = expandedAccordionHeader(
            sliderPosition,
            slides.length
        );
    }
}

const collapsedAccordionHeader = (curr) => {
    return `
    <div class="col-2 col-lg-2">
        <button
            id="news-expand-btn"
            class="btn btn-light border-0 text-primary d-flex align-items-center"
        >
            <div
                class="btn-arrow rounded-circle d-flex justify-content-center align-items-center me-3"
            >
                <img
                    src="./public/svg/arrow-open.svg"
                    width="16px"
                    height="16px"
                />
            </div>
            Show
        </button>
    </div>
    <div class="col-10 col-lg-4 text-center">
        <h2 class="fs-6 mb-0">AirdropHunter’s NEWS</h2>
    </div>
    <div
        class="expand-counter d-none d-lg-block col-lg-5 text-center"
    >
        <p class="news-expand-description text-muted mb-0">
            ${curr}
        </p>
    </div>
`;
};

const expandedAccordionHeader = (curr, quantity) => {
    return `
    <div class="col-7 col-sm-8 col-lg-3">
        <button
            id="news-expand-btn"
            class="btn btn-light border-0 text-primary d-flex align-items-center"
        >
            <div
                class="btn-arrow rounded-circle d-flex justify-content-center align-items-center me-3"
            >
                <img
                    src="./public/svg/hide-arrow.svg"
                    width="16px"
                    height="16px"
                />
            </div>
            Hide
        </button>
    </div>

    <div
        id="news-scroll-handle"
        class="news-scroll-handle col-5 col-sm-4 col-lg-3"
    >
        <div
            class="d-flex justify-content-around align-items-center"
        >
            <button
                class="btn-arrow rounded-circle d-flex justify-content-center align-items-center border-0"
                id="prev-news"
            >
                <img src="./public/svg/prev.svg" />
            </button>
            <p
                id="slider-counter"
                class="m-0 text-center"
            >
                ${curr} / ${quantity}
            </p>
            <button
                class="btn-arrow rounded-circle d-flex justify-content-center align-items-center border-0"
                id="next-news"
            >
                <img src="./public/svg/next.svg" />
            </button>
        </div>
        
    </div>
    <div class="news-placeholder d-none d-lg-block col-lg-6"></div>
`;
};
