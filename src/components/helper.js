/*
 default undefined - The key is the breakpoint
 (default is the result of: () => window.innerWidth or innerWidth property if the last presented).
*/
export const defaultResponsive = {
    0: {
        items: 1
    },
    620: {
        items: 2
    },
    1024: {
        items: 3
    },
    1200: {
        items: 4
    },
    1700: {
        items: 5
    },
    2250: {
        items: 6
    }
};

/*
 rebuilt responsive object depending on the container width
 using the ratio of the width of the box to the width of the window
*/
export const getNewResponsiveValues = rate => {
    let newResponsive = {};
    let keys = Object.keys(defaultResponsive);

    keys.forEach(key => {
        let newValue = Math.round(defaultResponsive[key].items / rate);
        newResponsive[key] = { items: Math.max(newValue, 1) };
    });

    return newResponsive;
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
    no_dots: "multi-carousel__no-dots"
};

export const normalCarouselClasses = {
    normal_container: "normal-carousel__container",
    normal_item: "normal-carousel__item"
};

export const activeClickClasses = {
    active_click_container: "active-click-carousel__container",
    active_click_item: "active-click-carousel__item",
    active_click_with_btn: "active-click-carousel__with-btn"
};

export const activeSlideClasses = {
    active_slide_container: "active-slide-carousel__container",
    active_slide_wrapper: "active-slide-carousel__wrapper",
    first_item: "active-slide-carousel__first-item",
    last_item: "active-slide-carousel__last-item",
    prev_btn: "active-slide-carousel__prev-btn",
    next_btn: "active-slide-carousel__next-btn"
};
