import { createElement, useEffect, useState, useRef } from "react";
import "../ui/NormalCarousel.scss";
import "../ui/ActiveClickCarousel.scss";
import AliceCarousel from "react-alice-carousel";
import { v4 as uuidv4 } from "uuid";
import { getRequiredItems, commonClasses, normalCarouselClasses, activeClickClasses, classesAction } from "./helper";

export default function NormalCarousel(props) {
    const carouselParent = useRef();

    const [renderCarousel, setRenderCarousel] = useState(false);
    const [dataItems, setDataItems] = useState([]);
    const [carouselItems, setCarouselItems] = useState([]);
    const [uniqueClass, setUniqueClass] = useState("");
    const [carouselInfinite, setCarouselInfinite] = useState(props.infinite);
    const [responsive, setResponsive] = useState(null);

    const addOrRemoveClassName = (node, action) => {
        if (action === classesAction.remove) {
            node?.classList?.remove(commonClasses.active);
        } else {
            node?.classList?.add(commonClasses.active);
        }
    };

    /*
        in case of "infinite" carousel the node will be node list "Array"
        because the carousel create a copy of all the items
        that why we need change the active class on both nodes - the carousel render both -
        and with no "infinite" the node list will be length of "1"
    */
    const changeActiveClass = (node, action) => {
        if (node?.length) {
            node.forEach(item => {
                addOrRemoveClassName(item, action);
            });
        }
    };

    /*
        idx-"" is the common unique class between original item and the cloned one
    */
    const getIdxClassName = e => {
        let clickedItem = e.target;

        // in case of clicking element inside the item we need the main div with "idx-" class name
        while (clickedItem) {
            if (clickedItem.classList.contains(commonClasses.item)) break;
            clickedItem = clickedItem.parentNode;
        }

        let classNames = clickedItem.className.split(" ");
        return classNames?.filter(item => item.includes("idx"))?.[0];
    };

    const onCardClicked = (e, action) => {
        if (action?.canExecute) action.execute();

        // remove active class from original and cloned item
        let activeNode = document.querySelector(`.${uniqueClass}`)?.querySelectorAll(`.${commonClasses.active}`);
        changeActiveClass(activeNode, classesAction.remove);

        let idxClass = getIdxClassName(e);

        // add active class for both original and cloned item
        let itemToSetActive = document.querySelector(`.${uniqueClass}`)?.querySelectorAll(`.${idxClass}`);
        changeActiveClass(itemToSetActive, classesAction.add);
    };

    /*
      if the item behavior "create extra items" calculate the number of extra items and get the final number of carousel items
    */
    const createCarouselItems = () => {
        let extraItems = [];
        if (props.itemsBehavior === "extra" && dataItems.length) {
            let currentRequiredItems = getRequiredItems(props.defaultResponsive);

            if (dataItems.length < currentRequiredItems) {
                for (let i = 0; i < currentRequiredItems - dataItems.length; i++) {
                    extraItems.push(<div className={commonClasses.extra_item}></div>);
                }
                setCarouselInfinite(false);
            } else {
                setCarouselInfinite(props.infinite);
            }
        }
        setCarouselItems([...dataItems, ...extraItems]);
        setRenderCarousel(true);
    };

    /*
      set the items when render the widget or update the data
    */
    const setupCarouse = items => {
        let carouselItems = items.map((item, i) => (
            <div
                key={i}
                onClick={props.carouselType === "active" ? e => onCardClicked(e, props.action?.get(item)) : undefined}
                className={`${commonClasses.item} idx-${i} ${
                    props.carouselType === "active"
                        ? activeClickClasses.active_click_item
                        : normalCarouselClasses.normal_item
                }`}
            >
                {props.dataType === "static" ? item.staticContent : props.content.get(item)}
            </div>
        ));
        setDataItems(carouselItems);
    };

    /*
      set the active item after the carousel has already been initialized
    */
    const onInitialized = () => {
        if (props.carouselType === "active") {
            let firstCarouselItem = document.querySelector(`.${uniqueClass}`)?.querySelector(".idx-0");
            firstCarouselItem?.click();
        }
    };

    /*
      on resize rerender the carousel to recalculate the extra items if necessary and reset the active item
    */
    const onResized = () => {
        setRenderCarousel(false);
        createCarouselItems();
    };

    /*
      when getting the item or updated it, rerender the carousel to recalculate the extra items if necessary and reset the active item 
    */
    useEffect(() => {
        if (props.dataType === "static") {
            setupCarouse(props.staticItems);
        } else if (props.data?.status === "available") {
            setRenderCarousel(false);
            setupCarouse(props.data.items);
        }
    }, [props.data?.items]);

    /*
      after getting the item or updated it and the item behavior "create extra items" calculate the number of extra items
    */
    useEffect(() => {
        // This condition is to prevent calling createCarouselItems before get the items "This happens at the first widget render"
        if (props.data?.status === "available" || props.dataType === "static") {
            createCarouselItems();
        }
    }, [dataItems]);

    useEffect(() => {
        // set a unique class in case of using two different carousel instances in the same document
        setUniqueClass("a-" + uuidv4());

        // set the responsive object after initialize the container so the carousel re-render and take the correct dimensions
        // NOTE : force rerendering fix the bug with carousel overflow the parent container
        const resizeObserver = new ResizeObserver(() => {
            setResponsive({ ...props.defaultResponsive });
        });
        resizeObserver.observe(carouselParent.current);

        return () => resizeObserver.disconnect();
    }, []);

    return (
        <div
            ref={carouselParent}
            className={[
                commonClasses.multi_container,
                uniqueClass,
                props.carouselType === "active"
                    ? activeClickClasses.active_click_container
                    : normalCarouselClasses.normal_container,
                props.disableDotsControls ? commonClasses.no_dots : "",
                !props.disableButtonsControls && props.buttonsStyle === "styled"
                    ? props.carouselType === "active"
                        ? activeClickClasses.active_click_styled_btn
                        : normalCarouselClasses.normal_styled_btn
                    : ""
            ].join(" ")}
        >
            {dataItems?.length && renderCarousel ? (
                <AliceCarousel
                    items={carouselItems}
                    responsive={responsive}
                    infinite={carouselInfinite}
                    autoPlay={props.autoPlay}
                    autoPlayDirection={props.autoPlayDirection}
                    autoPlayControls={props.autoPlayControls}
                    disableButtonsControls={props.disableButtonsControls}
                    disableDotsControls={props.disableDotsControls}
                    animationDuration={props.animationDuration}
                    animationType={props.animationType}
                    keyboardNavigation={props.keyboardNavigation}
                    mouseTracking={props.mouseTracking}
                    touchTracking={props.touchTracking}
                    onInitialized={onInitialized}
                    onResized={onResized}
                />
            ) : (
                <div className={commonClasses.multi_empty_container}></div>
            )}
        </div>
    );
}
