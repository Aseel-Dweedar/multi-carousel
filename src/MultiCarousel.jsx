import { createElement } from "react"
import "./ui/MultiCarousel.css"
import NormalCarousel from "./components/NormalCarousel"
import ActiveSlideCarousel from "./components/ActiveSlideCarousel"

export function MultiCarousel(props) {
    return (
        ((props.carouselType === 'normal' || props.carouselType === 'active') &&
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
            />) ||
        ((props.carouselType === 'slide') &&
            <ActiveSlideCarousel
                data={props.data}
                action={props.action}
                content={props.content}
            />) || 
        <div>Error</div>
    )
}