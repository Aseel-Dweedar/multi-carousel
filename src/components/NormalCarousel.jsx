import { createElement, useEffect, useState, useRef } from "react";
import '../ui/NormalCarousel.scss'
import '../ui/ActiveClickCarousel.scss'
import AliceCarousel from 'react-alice-carousel'
import { v4 as uuidv4 } from 'uuid';
import { defaultResponsive, getNewResponsiveValues, commonClasses, normalCarouselClasses, activeClickClasses, classesAction } from "./helper"

export default function NormalCarousel(props) {

    const carouselParent = useRef();
    const [carousel_items, set_carousel_items] = useState([]);
    const [responsive, setResponsive] = useState({ ...defaultResponsive });
    const [uniqueClass, setUniqueClass] = useState("");

    /*
        this method built to handle if the carousel has been rendered inside a container
        that is not covering the window's full width
    */
    const setNewResponsive = () => {
        let rate = window.innerWidth / carouselParent.current.clientWidth
        if (rate > 1.35) {
            let newResponsive = getNewResponsiveValues(rate)
            setResponsive({ ...newResponsive })
        } else {
            setResponsive({ ...defaultResponsive })
        }
    }

    const addOrRemoveClassName = (node, action) => {
        if (action === classesAction.remove) {
            node.classList.remove(commonClasses.active)
        } else {
            node.classList.add(commonClasses.active)
        }
    }

    /*
        in case of "infinite" carousel the node will be node list "Array"
        because the carousel create a copy of all the items
        that why we need change the active class on both nodes - the carousel render both -
    */
    const changeActiveClass = (node, action) => {
        if (node?.length) {
            node.forEach((item) => {
                addOrRemoveClassName(item, action)
            });
        } else if (node) {
            addOrRemoveClassName(node, action)
        }
    }

    /*
        idx-"" is the common unique class between original item and the cloned one
    */
    const getIdxClassName = (e) => {
        let clickedItem = e.target;

        // in case of clicking element inside the item we need the main div with "idx-" class name
        while (clickedItem) {
            if (clickedItem.classList.contains(commonClasses.item)) break;
            clickedItem = clickedItem.parentNode;
        }

        let classNames = clickedItem.className.split(' ');
        return classNames?.filter(item => item.includes('idx'))?.[0]

    }

    const onCardClicked = (e, action) => {

        if (action?.canExecute) action.execute()

        // remove active class from original and cloned item
        let activeNode = document.querySelector(`.${uniqueClass}`)?.querySelectorAll(`.${commonClasses.active}`);
        changeActiveClass(activeNode, classesAction.remove)

        let idxClass = getIdxClassName(e)

        // add active class for both original and cloned item
        let itemToSetActive = document.querySelector(`.${uniqueClass}`)?.querySelectorAll(`.${idxClass}`);
        changeActiveClass(itemToSetActive, classesAction.add)
    }

    /*
      set the active item after the carousel has already been initialized
    */
    const onInitialized = () => {
        if (props.carouselType === 'active') {
            let itemToSetActive = document.querySelector(`.${uniqueClass}`)?.querySelectorAll('.idx-0');
            changeActiveClass(itemToSetActive, classesAction.add)
        }
    }

    useEffect(() => {

        // set a unique class in case of using two different carousel instances in the same document
        setUniqueClass("a-" + uuidv4())

        if (!carouselParent.current) return;

        // handle resize window or carousel container
        const resizeObserver = new ResizeObserver(() => {
            setNewResponsive()
        });

        resizeObserver.observe(carouselParent.current);

        return () => resizeObserver.disconnect();
    }, [])

    useEffect(() => {
        if (props.data?.status === "available" && !carousel_items?.length) {
            set_carousel_items(props.data.items.map((item, i) => (
                <div
                    key={i}
                    onClick={props.carouselType === 'active' ? (e) => onCardClicked(e, props.action?.get(item)) : undefined}
                    className={`${commonClasses.item} idx-${i} ${props.carouselType === 'active' ? activeClickClasses.active_click_clickable_item : normalCarouselClasses.normal_item}`}>
                    {props.content.get(item)}
                </div>
            )))
        }
    }, [props.data])

    return <div
        className={[commonClasses.multi_container, uniqueClass,
            props.carouselType === 'active' ? activeClickClasses.active_click_container : normalCarouselClasses.normal_container,
            props.disableDotsControls ? commonClasses.no_dots : "",
            (!props.disableButtonsControls && props.carouselType === 'active') ? activeClickClasses.active_click_with_btn : ""].join(" ")}
        ref={carouselParent}>
        {
            carousel_items?.length ?
                <AliceCarousel
                    items={carousel_items}
                    responsive={responsive}

                    infinite={props.infinite}

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
                /> : 
                <div className={commonClasses.multi_empty_container}></div>
        }
    </div>;
}
