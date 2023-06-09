import { createElement, useEffect, useState } from "react";
import "./ui/MultiCarousel.css";
import NormalCarousel from "./components/NormalCarousel";
import ActiveSlideCarousel from "./components/ActiveSlideCarousel";
import { commonClasses } from "./components/helper";

export function MultiCarousel(props) {
    /*
     default undefined - The key is the breakpoint
     (default is the result of: () => window.innerWidth or innerWidth property if the last presented).
    */
    const [defaultResponsive, setDefaultResponsive] = useState(null);

    useEffect(() => {
        setDefaultResponsive({
            0: {
                items: props.items425 > 0 ? props.items425 : 1
            },
            640: {
                items: props.items640 > 0 ? props.items640 : 2
            },
            1024: {
                items: props.items1024 > 0 ? props.items1024 : 3
            },
            1200: {
                items: props.items1200 > 0 ? props.items1200 : 4
            },
            1600: {
                items: props.items1600 > 0 ? props.items1600 : 5
            },
            2560: {
                items: props.items2560 > 0 ? props.items2560 : 6
            }
        });
    }, []);

    return (
        <div>
            {defaultResponsive ? (
                ((props.carouselType === "normal" || props.carouselType === "active") && (
                    <NormalCarousel
                        carouselType={props.carouselType}
                        data={props.data}
                        action={props.action}
                        content={props.content}
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
                        defaultResponsive={defaultResponsive}
                        itemsBehavior={props.itemsBehavior}
                        buttonsStyle={props.buttonsStyle}
                    />
                )) ||
                (props.carouselType === "slide" && (
                    <ActiveSlideCarousel
                        data={props.data}
                        action={props.action}
                        content={props.content}
                        defaultResponsive={defaultResponsive}
                    />
                )) || (
                    <div className={commonClasses.error}>
                        <p>An error occurred while initializing the Carousel</p>
                    </div>
                )
            ) : (
                <div className={commonClasses.loading}>
                    <p>Loading ...</p>
                </div>
            )}
        </div>
    );
}
