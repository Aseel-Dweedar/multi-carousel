/* get the required number of items in the current screen size depend on responsive object */
export const getRequiredItems = responsive => {
    let screeWidth = window.innerWidth;

    if (screeWidth < 640) {
        return responsive[0]?.items;
    } else if (screeWidth >= 640 && screeWidth < 1024) {
        return responsive[640]?.items;
    } else if (screeWidth >= 1024 && screeWidth < 1200) {
        return responsive[1024]?.items;
    } else if (screeWidth >= 1200 && screeWidth < 1600) {
        return responsive[1200]?.items;
    } else if (screeWidth >= 1600 && screeWidth < 2560) {
        return responsive[1600]?.items;
    } else {
        return responsive[2560]?.items;
    }
};

/*
    Constants
*/
export const statusList = {
    reset: "reset",
    goLast: "goLast",
    next: "next",
    prev: "prev"
};

export const classesAction = {
    add: "add",
    remove: "remove"
};

export const commonClasses = {
    multi_container: "multi-carousel__container",
    multi_empty_container: "multi-carousel__empty-container",
    item: "multi-carousel__item",
    active: "multi-carousel__active",
    extra_item: "multi-carousel__extra-item",
    no_dots: "multi-carousel__no-dots",
    error: "multi-carousel__error",
    loading: "multi-carousel__loading"
};

export const normalCarouselClasses = {
    normal_container: "normal-carousel__container",
    normal_item: "normal-carousel__item",
    normal_styled_btn: "normal-carousel__styled-btn"
};

export const activeClickClasses = {
    active_click_container: "active-click-carousel__container",
    active_click_item: "active-click-carousel__item",
    active_click_styled_btn: "active-click-carousel__styled-btn"
};

export const activeSlideClasses = {
    active_slide_container: "active-slide-carousel__container",
    active_slide_wrapper: "active-slide-carousel__wrapper",
    first_item: "active-slide-carousel__first-item",
    last_item: "active-slide-carousel__last-item",
    prev_btn: "active-slide-carousel__prev-btn",
    next_btn: "active-slide-carousel__next-btn"
};
