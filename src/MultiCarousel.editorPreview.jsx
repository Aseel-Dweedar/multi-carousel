import { createElement } from "react";
import NormalCarousel from "./components/NormalCarousel";

export function preview() {
    return <NormalCarousel />;
}

export function getPreviewCss() {
    return require("./ui/MultiCarousel.css");
}
