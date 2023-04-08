import { createElement, useEffect, useState, useRef, useCallback } from "react";
import AliceCarousel from "react-alice-carousel";
import "../ui/ActiveSlideCarousel.scss";
import { defaultResponsive, getNewResponsiveValues, commonClasses, activeSlideClasses, statusList } from "./helper";
import { v4 as uuidv4 } from "uuid";

export default function ActiveSlideCarousel(props) {
    const sliderContainer = useRef();
    const [carousel_items, set_carousel_items] = useState([]);
    const [responsive, setResponsive] = useState(null);
    const [uniqueClass, setUniqueClass] = useState("");
    const [currentActiveIdx, setCurrentActiveIdx] = useState(0);
    const [numberOfDisplayedItems, setNumberOfDisplayedItems] = useState(0);
    const [numberOfAllItems, setNumberOfAllItems] = useState(0);

    // get the 'react-alice-carousel' built-in all method and properties
    const [carouselProperties, setCarouselProperties] = useState(null);

    /*
        this method built to handle if the carousel has been rendered inside a container
        that is not covering the window's full width
    */
    const setNewResponsive = () => {
        let rate = window.innerWidth / sliderContainer?.current?.clientWidth;
        if (rate > 1.4) {
            let newResponsive = getNewResponsiveValues(rate);
            setResponsive({ ...newResponsive });
        } else {
            setResponsive({ ...defaultResponsive });
        }
    };

    /*
        Fired when reach the end of the slider or when resize the carousel
        => move to the first item
    */
    const resetSlider = () => {
        setCurrentActiveIdx(0);
        setActiveClass(statusList.reset, null, 0);
    };

    /*
       Fired when ge back when step from the first item
       => move to the last item
   */
    const slideToTheEnd = () => {
        carouselProperties?.slideTo(numberOfAllItems - numberOfDisplayedItems + 1);
        setActiveClass(statusList.goLast, null, numberOfAllItems);
        setCurrentActiveIdx(numberOfAllItems);
    };

    /*
        Fired when clicking "previous" button
    */
    const prevClicked = () => {
        if (!currentActiveIdx) {
            // currentActiveIdx === 0, the active item is the first one, move to the last
            slideToTheEnd();
        } else {
            setActiveClass(statusList.prev, carouselProperties?.slidePrev, currentActiveIdx - 1);
            setCurrentActiveIdx(currentActiveIdx - 1);
        }
    };

    /*
        Fired when clicking "Next" button
    */
    const nextClicked = () => {
        if (currentActiveIdx === numberOfAllItems) {
            // the active item is the last one, move to the first
            carouselProperties?.slideTo(0);
            resetSlider();
        } else {
            setActiveClass(statusList.next, carouselProperties?.slideNext, currentActiveIdx + 1);
            setCurrentActiveIdx(currentActiveIdx + 1);
        }
    };

    /*
        Remove previous active item and get the index of the item that we want to set it active
    */
    const removeActiveClass = (status, allItems) => {
        let itemIdxToSetActive = 0;

        for (let i = 0; i < allItems?.length; i++) {
            // get the index of the item that we want to set it active in the "all items" array
            // NOTE: we can't use the state "currentActiveIdx" because "allItems" is containing the cloned item also
            if (
                allItems[i].classList?.contains(commonClasses.active) &&
                !allItems[i]?.parentElement?.classList?.contains("__cloned")
            ) {
                // if next pressed will be the next index, if previous pressed will be the previous index
                itemIdxToSetActive = status === statusList.next ? i + 1 : i - 1;
            }
            allItems[i].classList?.remove(commonClasses.active);
        }

        return itemIdxToSetActive;
    };

    /*
        setting the curren active class, and slide left or right when needed
    */
    const setActiveClass = (status, slideLeftOrRight, actionIdx) => {
        let allItems = document.querySelector(`.${uniqueClass}`)?.querySelectorAll(`.${commonClasses.item}`);
        let itemIdxToSetActive = removeActiveClass(status, allItems);

        // Set current active item
        if (status === statusList.reset) {
            // querySelectorAll ==> the original item and the cloned one
            // in this case the first one is the original -"react-alice-carouse" way of work-
            let firstSlide = document
                .querySelector(`.${uniqueClass}`)
                ?.querySelectorAll(`.${activeSlideClasses.first_item}`);
            firstSlide[0]?.classList?.add(commonClasses.active);
        } else if (status === statusList.goLast) {
            // querySelectorAll ==> the original item and the cloned one
            // in this case the second one is the original -"react-alice-carouse" way of work-
            let lastSlide = document
                .querySelector(`.${uniqueClass}`)
                ?.querySelectorAll(`.${activeSlideClasses.last_item}`);
            lastSlide[1]?.classList?.add(commonClasses.active);
        } else {
            // not containing active means that the next/prev item is not appearing in the screen right now
            // slide when reach to the start/end of the active item
            if (!allItems[itemIdxToSetActive]?.parentElement?.classList?.contains("__active")) {
                slideLeftOrRight();
            }
            allItems[itemIdxToSetActive]?.classList?.add(commonClasses.active);
        }

        // fire the action that related to the new active item
        let actionToFire = props.action?.get(props.data.items?.[actionIdx]);
        onSlideClicked(actionToFire);
    };

    /*
        fired when initialization the carousel
    */
    const onCarouselInit = e => {
        setNumberOfDisplayedItems(e.itemsInSlide);
        setResponsive({ ...responsive });

        let firstItemAction = props.action?.get(props.data.items?.[0]);
        onSlideClicked(firstItemAction);
    };

    /*
        fired when resizing the carousel, carousel will always slide to the first item when resizing -"react-alice-carouse" way of work-
    */
    const onCarouselResize = e => {
        setNumberOfDisplayedItems(e.itemsInSlide);
        setNewResponsive();
        resetSlider();
    };

    /*
        fired the current active item action if found
    */
    const onSlideClicked = action => {
        if (action?.canExecute) action.execute();
    };

    useEffect(() => {
        if (props.data?.status === "available" && !carousel_items?.length) {
            let newData = props.data.items.map((item, idx) => (
                <div
                    key={idx}
                    className={`${commonClasses.item} ${
                        idx === 0 ? activeSlideClasses.first_item + " " + commonClasses.active : ""
                    } ${idx === props.data.items.length - 1 ? activeSlideClasses.last_item : ""}`}
                >
                    {props.content.get(item)}
                </div>
            ));

            setNumberOfAllItems(newData.length - 1);
            set_carousel_items(newData);
        }
    }, [props.data]);

    useEffect(() => {
        // set a unique class in case of using two different carousel instances in the same document
        setUniqueClass("a-" + uuidv4());
    }, []);

    /*
        set the responsive object after initialize the container so it take the correct dimensions
    */
    const carouselContainer = useCallback(node => {
        if (node) setNewResponsive();
    }, []);

    return carousel_items?.length ? (
        <div className={activeSlideClasses.active_slide_container} ref={carouselContainer}>
            <button className={activeSlideClasses.prev_btn} onClick={prevClicked}></button>
            <div className={[uniqueClass, activeSlideClasses.active_slide_wrapper].join(" ")} ref={sliderContainer}>
                {responsive && (
                    <AliceCarousel
                        // get the 'react-alice-carousel' all method and properties so we can override default next and previous buttons behavior
                        ref={el => setCarouselProperties(el)}
                        items={carousel_items}
                        responsive={responsive}
                        infinite={true}
                        autoPlay={false}
                        disableButtonsControls={true}
                        disableDotsControls={true}
                        // increasing the animation Duration more than 100 will crash the sliding in the carousel
                        animationDuration={100}
                        keyboardNavigation={false}
                        mouseTracking={false}
                        touchTracking={false}
                        onInitialized={onCarouselInit}
                        onResized={onCarouselResize}
                    />
                )}
            </div>
            <button className={activeSlideClasses.next_btn} onClick={nextClicked}></button>
        </div>
    ) : (
        <div className={commonClasses.multi_empty_container}></div>
    );
}
