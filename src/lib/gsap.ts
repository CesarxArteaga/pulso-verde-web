export * from "gsap";
export * from "@gsap/react";
export * from "gsap/Draggable";
import { useGSAP } from "@gsap/react";
import { Draggable } from "gsap/Draggable";
import { gsap } from "gsap";
import { InertiaPlugin } from "gsap/InertiaPlugin";
gsap.registerPlugin(useGSAP, Draggable, InertiaPlugin);
