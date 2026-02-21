module.exports = [
"[project]/app/components/Copy/Copy.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Copy
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$SplitText$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/SplitText.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@gsap/react/src/index.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$SplitText$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SplitText"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
function Copy({ children, animateOnScroll = true, delay = 0 }) {
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const elementRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const splitRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const lines = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const waitForFonts = async ()=>{
        try {
            await document.fonts.ready;
            const customFonts = [
                "Manrope"
            ];
            const fontCheckPromises = customFonts.map((fontFamily)=>{
                return document.fonts.check(`16px ${fontFamily}`);
            });
            await Promise.all(fontCheckPromises);
            await new Promise((resolve)=>setTimeout(resolve, 100));
            return true;
        } catch (error) {
            await new Promise((resolve)=>setTimeout(resolve, 200));
            return true;
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGSAP"])(()=>{
        if (!containerRef.current) return;
        const initializeSplitText = async ()=>{
            await waitForFonts();
            splitRefs.current = [];
            lines.current = [];
            elementRefs.current = [];
            let elements = [];
            if (containerRef.current.hasAttribute("data-copy-wrapper")) {
                elements = Array.from(containerRef.current.children);
            } else {
                elements = [
                    containerRef.current
                ];
            }
            elements.forEach((element)=>{
                elementRefs.current.push(element);
                const split = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$SplitText$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SplitText"].create(element, {
                    type: "lines",
                    mask: "lines",
                    linesClass: "line",
                    lineThreshold: 0.1
                });
                splitRefs.current.push(split);
                const computedStyle = window.getComputedStyle(element);
                const textIndent = computedStyle.textIndent;
                if (textIndent && textIndent !== "0px") {
                    if (split.lines.length > 0) {
                        split.lines[0].style.paddingLeft = textIndent;
                    }
                    element.style.textIndent = "0";
                }
                lines.current.push(...split.lines);
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(lines.current, {
                y: "100%"
            });
            const animationProps = {
                y: "0%",
                duration: 1,
                stagger: 0.1,
                ease: "power4.out",
                delay: delay
            };
            if (animateOnScroll) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(lines.current, {
                    ...animationProps,
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 90%",
                        once: true
                    }
                });
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(lines.current, animationProps);
            }
        };
        initializeSplitText();
        return ()=>{
            splitRefs.current.forEach((split)=>{
                if (split) {
                    split.revert();
                }
            });
        };
    }, {
        scope: containerRef,
        dependencies: [
            animateOnScroll,
            delay
        ]
    });
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Children.count(children) === 1) {
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].cloneElement(children, {
            ref: containerRef
        });
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        "data-copy-wrapper": "true",
        children: children
    }, void 0, false, {
        fileName: "[project]/app/components/Copy/Copy.jsx",
        lineNumber: 123,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/components/Hero/hero.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Copy$2f$Copy$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Copy/Copy.jsx [app-ssr] (ecmascript)");
"use client";
;
;
;
/* ===== CONFIG ===== */ const FINISH_AT = 0.75;
const MD_BREAKPOINT = 768;
function Hero() {
    const mainRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const relativeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const floatRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const targetX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const currentX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    /* ===== RESPONSIVE SIZE ===== */ const getResponsiveSizes = ()=>{
        const w = window.innerWidth;
        if (w < 1024) {
            return {
                sw: 46,
                sh: 34,
                ew: 100,
                eh: 75
            }; // md
        }
        return {
            sw: 32,
            sh: 44,
            ew: 100,
            eh: 100
        }; // lg
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // ❌ MOBILE → NO ANIMATION, NO LISTENERS
        if (window.innerWidth < MD_BREAKPOINT) {
            return;
        }
        let rafId;
        /* ===== MOUSE ===== */ const handleMouseMove = (e)=>{
            if (!relativeRef.current || !floatRef.current) return;
            const rect = relativeRef.current.getBoundingClientRect();
            const boxRect = floatRef.current.getBoundingClientRect();
            const mouseX = e.clientX - rect.left;
            const center = rect.width / 2;
            const nextX = mouseX - center;
            const maxX = rect.width / 2 - boxRect.width / 2;
            targetX.current = Math.max(-maxX, Math.min(nextX, maxX));
        };
        /* ===== RAF ===== */ const animate = ()=>{
            if (!mainRef.current || !floatRef.current) {
                rafId = requestAnimationFrame(animate);
                return;
            }
            const rect = mainRef.current.getBoundingClientRect();
            const visible = Math.min(Math.max(-rect.top, 0), rect.height);
            const total = rect.height - window.innerHeight;
            const scrolled = Math.min(visible, total);
            const raw = total > 0 ? scrolled / total : 0;
            const progress = Math.min(raw / FINISH_AT, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const { sw, sh, ew, eh } = getResponsiveSizes();
            const width = sw + (ew - sw) * eased;
            const height = sh + (eh - sh) * eased;
            const MAX_Y = Math.min(window.innerHeight * 0.85, 520);
            const y = eased * MAX_Y;
            currentX.current += (targetX.current - currentX.current) * 0.08;
            const blendedX = currentX.current * (1 - progress);
            floatRef.current.style.width = `${width}vw`;
            floatRef.current.style.height = `${height}vh`;
            floatRef.current.style.transform = `
        translateX(-50%)
        translateX(${blendedX}px)
        translateY(${y}px)
      `;
            rafId = requestAnimationFrame(animate);
        };
        relativeRef.current?.addEventListener("mousemove", handleMouseMove);
        rafId = requestAnimationFrame(animate);
        return ()=>{
            relativeRef.current?.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(rafId);
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: mainRef,
            className: "h-[200vh] px-4 sm:px-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: relativeRef,
                className: "relative h-full w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 z-20 overflow-hidden pointer-events-none",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: floatRef,
                            className: "   bg-orange-600   rounded-xl   overflow-hidden   will-change-transform      /* md & lg only floating */   hidden md:block   absolute top-[15vh] left-1/2   ",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                src: "./video/video.mp4",
                                autoPlay: true,
                                muted: true,
                                loop: true,
                                playsInline: true,
                                className: "absolute inset-0 w-full h-full object-cover"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Hero/hero.tsx",
                                lineNumber: 119,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/Hero/hero.tsx",
                            lineNumber: 106,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/Hero/hero.tsx",
                        lineNumber: 105,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "block md:hidden w-full mt-[30vh] px-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full h-[45vh] bg-orange-600 rounded-xl overflow-hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                src: "./video/video.mp4",
                                autoPlay: true,
                                muted: true,
                                loop: true,
                                playsInline: true,
                                className: "w-full h-full object-cover"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Hero/hero.tsx",
                                lineNumber: 133,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/Hero/hero.tsx",
                            lineNumber: 132,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/Hero/hero.tsx",
                        lineNumber: 131,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-screen w-full relative z-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full pt-[clamp(14rem,40vh,28rem)] flex justify-between uppercase text-sm sm:text-md font-semibold tracking-wide",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Copy$2f$Copy$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        delay: 0.1,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "A"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Hero/hero.tsx",
                                            lineNumber: 147,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Hero/hero.tsx",
                                        lineNumber: 147,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Copy$2f$Copy$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        delay: 0.2,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Seriously"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Hero/hero.tsx",
                                            lineNumber: 148,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Hero/hero.tsx",
                                        lineNumber: 148,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Copy$2f$Copy$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        delay: 0.3,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Good"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Hero/hero.tsx",
                                            lineNumber: 149,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Hero/hero.tsx",
                                        lineNumber: 149,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/Hero/hero.tsx",
                                lineNumber: 146,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full flex justify-between uppercase font-saans font-bold tracking-tighter leading-none text-[clamp(3rem,11.5vw,11rem)]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Copy$2f$Copy$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        delay: 0.4,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Design"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Hero/hero.tsx",
                                            lineNumber: 153,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Hero/hero.tsx",
                                        lineNumber: 153,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Copy$2f$Copy$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        delay: 0.5,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Engineer"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Hero/hero.tsx",
                                            lineNumber: 154,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Hero/hero.tsx",
                                        lineNumber: 154,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/Hero/hero.tsx",
                                lineNumber: 152,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full flex justify-between mt-12 p-2 font-saans text-base sm:text-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Copy$2f$Copy$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        delay: 0.6,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Scroll for"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Hero/hero.tsx",
                                            lineNumber: 158,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Hero/hero.tsx",
                                        lineNumber: 158,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Copy$2f$Copy$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        delay: 0.7,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Cool Sh*t"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Hero/hero.tsx",
                                            lineNumber: 159,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Hero/hero.tsx",
                                        lineNumber: 159,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/Hero/hero.tsx",
                                lineNumber: 157,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/Hero/hero.tsx",
                        lineNumber: 145,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-screen w-full rounded-lg overflow-hidden"
                    }, void 0, false, {
                        fileName: "[project]/app/components/Hero/hero.tsx",
                        lineNumber: 164,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/Hero/hero.tsx",
                lineNumber: 103,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/components/Hero/hero.tsx",
            lineNumber: 102,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/Hero/hero.tsx",
        lineNumber: 101,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/components/work/work.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Work
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Copy$2f$Copy$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Copy/Copy.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Marquee$2f$marquee$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Marquee/marquee.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
function Work() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "px-8 min-h-screen ",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full pt-[20vh] text-[11.5vw]  flex flex-row justify-between items-center uppercase text-md font-bold tracking-wide",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Copy$2f$Copy$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        delay: 0.2,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "font-saans  leading-none tracking-tight overflow-hidden",
                            children: "Work"
                        }, void 0, false, {
                            fileName: "[project]/app/components/work/work.tsx",
                            lineNumber: 12,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/work/work.tsx",
                        lineNumber: 10,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Copy$2f$Copy$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        delay: 0.2,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "font-saans  leading-none tracking-tight overflow-hidden",
                            children: "'25"
                        }, void 0, false, {
                            fileName: "[project]/app/components/work/work.tsx",
                            lineNumber: 18,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/work/work.tsx",
                        lineNumber: 16,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/work/work.tsx",
                lineNumber: 9,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "mt-3 w-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-[90vh] flex flex-row gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-[50%] rounded-2xl flex flex-col bg-[#171717] gap-4 items-center p-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-[85%] w-full rounded-2xl bg-pink-400"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/work/work.tsx",
                                    lineNumber: 29,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "  h-[15%]  w-full rounded-2xl text-white",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: " w-full flex flex-row justify-between items-center p-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "   flex flex-row items-center justify-center gap-4 text-xl font-semibold",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "h-8 w-8 rounded-full overflow-hidden",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                src: "/img/lumo.jpg",
                                                                alt: ""
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/work/work.tsx",
                                                                lineNumber: 34,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/work/work.tsx",
                                                            lineNumber: 33,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                            className: "",
                                                            children: "Lumo Studio"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/work/work.tsx",
                                                            lineNumber: 36,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/work/work.tsx",
                                                    lineNumber: 32,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-row items-center justify-center gap-4 text-xl font-semibold",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                            className: "",
                                                            children: "Web Agency "
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/work/work.tsx",
                                                            lineNumber: 38,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                            children: "2025"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/work/work.tsx",
                                                            lineNumber: 39,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/work/work.tsx",
                                                    lineNumber: 37,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/work/work.tsx",
                                            lineNumber: 31,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "px-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Marquee$2f$marquee$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                items: [
                                                    'CT BUILDER,',
                                                    'DESIGN ENGINEER,',
                                                    'NEXT.JS,',
                                                    'REACT,',
                                                    'TAILWIND,',
                                                    'GSAP,',
                                                    'FRAMER MOTION,',
                                                    'THREE.JS,',
                                                    'WEB ANIMATIONS,',
                                                    'INTERACTION DESIGN,',
                                                    'UI / UX,',
                                                    'EDITORIAL LAYOUTS,',
                                                    'MICRO INTERACTIONS,',
                                                    'PERFORMANCE FIRST,',
                                                    'ACCESSIBILITY,',
                                                    'SCROLL SYSTEMS,',
                                                    'CREATIVE DEV,',
                                                    'FRONTEND ARCHITECT,'
                                                ],
                                                repeat: 1,
                                                speed: "slow",
                                                className: "uppercase"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/work/work.tsx",
                                                lineNumber: 43,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/work/work.tsx",
                                            lineNumber: 42,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/work/work.tsx",
                                    lineNumber: 30,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/work/work.tsx",
                            lineNumber: 28,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-[50%] rounded-2xl flex flex-col bg-[#171717] gap-4 items-center p-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-[85%] w-full rounded-2xl bg-pink-400"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/work/work.tsx",
                                    lineNumber: 74,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "  h-[15%]  w-full rounded-2xl text-white",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: " w-full flex flex-row justify-between items-center p-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "   flex flex-row items-center justify-center gap-4 text-xl font-semibold",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "h-8 w-8 rounded-full overflow-hidden",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                src: "/img/lumo.jpg",
                                                                alt: ""
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/work/work.tsx",
                                                                lineNumber: 79,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/work/work.tsx",
                                                            lineNumber: 78,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                            className: "",
                                                            children: "Lumo Studio"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/work/work.tsx",
                                                            lineNumber: 81,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/work/work.tsx",
                                                    lineNumber: 77,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-row items-center justify-center gap-4 text-xl font-semibold",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                            className: "",
                                                            children: "Web Agency "
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/work/work.tsx",
                                                            lineNumber: 83,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                            children: "2025"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/work/work.tsx",
                                                            lineNumber: 84,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/work/work.tsx",
                                                    lineNumber: 82,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/work/work.tsx",
                                            lineNumber: 76,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "px-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Marquee$2f$marquee$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                items: [
                                                    'CT BUILDER,',
                                                    'DESIGN ENGINEER,',
                                                    'NEXT.JS,',
                                                    'REACT,',
                                                    'TAILWIND,',
                                                    'GSAP,',
                                                    'FRAMER MOTION,',
                                                    'THREE.JS,',
                                                    'WEB ANIMATIONS,',
                                                    'INTERACTION DESIGN,',
                                                    'UI / UX,',
                                                    'EDITORIAL LAYOUTS,',
                                                    'MICRO INTERACTIONS,',
                                                    'PERFORMANCE FIRST,',
                                                    'ACCESSIBILITY,',
                                                    'SCROLL SYSTEMS,',
                                                    'CREATIVE DEV,',
                                                    'FRONTEND ARCHITECT,'
                                                ],
                                                repeat: 1,
                                                speed: "slow",
                                                className: "uppercase"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/work/work.tsx",
                                                lineNumber: 88,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/work/work.tsx",
                                            lineNumber: 87,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/work/work.tsx",
                                    lineNumber: 75,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/work/work.tsx",
                            lineNumber: 73,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/work/work.tsx",
                    lineNumber: 26,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/work/work.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/work/work.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/components/service/services.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Service
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
"use client";
;
function Service() {
    const services = [
        {
            title: "Design Engineering",
            desc: "High-fidelity UI with real front-end logic. Not just visuals, but production-ready systems.",
            tag: "UI · UX · Frontend"
        },
        {
            title: "Creative Development",
            desc: "Interactive, motion-driven websites built with Next.js, Tailwind and modern web APIs.",
            tag: "Next.js · Motion · WebGL"
        },
        {
            title: "Product Strategy",
            desc: "From idea to launch. I help founders shape products that feel intentional and usable.",
            tag: "MVP · SaaS · Systems"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "min-h-screen px-8 py-32",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-24",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "uppercase tracking-widest text-xs text-gray-400 mb-4",
                        children: "Services"
                    }, void 0, false, {
                        fileName: "[project]/app/components/service/services.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-[6vw] leading-none font-saans font-bold tracking-tight",
                        children: [
                            "What I",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/app/components/service/services.tsx",
                                lineNumber: 31,
                                columnNumber: 11
                            }, this),
                            "Actually Do"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/service/services.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/service/services.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-16",
                children: services.map((service, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-12 gap-6 border-t border-white/10 pt-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "md:col-span-1 text-gray-500 text-sm",
                                children: [
                                    "0",
                                    index + 1
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/service/services.tsx",
                                lineNumber: 44,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "md:col-span-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-2xl font-semibold",
                                    children: service.title
                                }, void 0, false, {
                                    fileName: "[project]/app/components/service/services.tsx",
                                    lineNumber: 50,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/components/service/services.tsx",
                                lineNumber: 49,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "md:col-span-5 text-gray-400 text-sm leading-relaxed",
                                children: service.desc
                            }, void 0, false, {
                                fileName: "[project]/app/components/service/services.tsx",
                                lineNumber: 56,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "md:col-span-2 text-xs uppercase tracking-widest text-gray-500",
                                children: service.tag
                            }, void 0, false, {
                                fileName: "[project]/app/components/service/services.tsx",
                                lineNumber: 61,
                                columnNumber: 13
                            }, this)
                        ]
                    }, index, true, {
                        fileName: "[project]/app/components/service/services.tsx",
                        lineNumber: 39,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/components/service/services.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/service/services.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/components/StickyCards/sticky-cards.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "card": "sticky-cards-module__mZeUSa__card",
  "card-1": "sticky-cards-module__mZeUSa__card-1",
  "card-2": "sticky-cards-module__mZeUSa__card-2",
  "card-3": "sticky-cards-module__mZeUSa__card-3",
  "card-4": "sticky-cards-module__mZeUSa__card-4",
  "col": "sticky-cards-module__mZeUSa__col",
  "intro": "sticky-cards-module__mZeUSa__intro",
  "outro": "sticky-cards-module__mZeUSa__outro",
  "sticky-cards": "sticky-cards-module__mZeUSa__sticky-cards",
  "sticky-wrapper": "sticky-cards-module__mZeUSa__sticky-wrapper",
});
}),
"[project]/app/components/StickyCards/StickyCards.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StickyCards
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$studio$2d$freight$2f$lenis$2f$dist$2f$lenis$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@studio-freight/lenis/dist/lenis.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$StickyCards$2f$sticky$2d$cards$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/components/StickyCards/sticky-cards.module.css [app-ssr] (css module)");
"use client";
;
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
function StickyCards() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const lenis = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$studio$2d$freight$2f$lenis$2f$dist$2f$lenis$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]({
            smoothWheel: true
        });
        lenis.on("scroll", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollTrigger"].update);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].ticker.add((time)=>{
            lenis.raf(time * 1000);
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].ticker.lagSmoothing(0);
        const cards = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].utils.toArray(".sticky-cards .card");
        const totalCards = cards.length;
        const segmentSize = 1 / totalCards;
        const cardYOffset = 5;
        const cardScaleStep = 0.075;
        cards.forEach((card, i)=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(card, {
                xPercent: -50,
                yPercent: -50 + i * cardYOffset,
                scale: 1 - i * cardScaleStep
            });
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollTrigger"].create({
            trigger: ".sticky-cards",
            start: "top top",
            end: `+=${window.innerHeight * 8}px`,
            pin: true,
            scrub: 1,
            onUpdate: (self)=>{
                const progress = self.progress;
                const activeIndex = Math.min(Math.floor(progress / segmentSize), totalCards - 1);
                const segProgress = (progress - activeIndex * segmentSize) / segmentSize;
                cards.forEach((card, i)=>{
                    if (i < activeIndex) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(card, {
                            yPercent: -250,
                            rotationX: 35
                        });
                    } else if (i === activeIndex) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(card, {
                            yPercent: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].utils.interpolate(-50, -200, segProgress),
                            rotationX: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].utils.interpolate(0, 35, segProgress),
                            scale: 1
                        });
                    } else {
                        const behindIndex = i - activeIndex;
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(card, {
                            yPercent: -50 + (behindIndex - segProgress) * cardYOffset,
                            rotationX: 0,
                            scale: 1 - (behindIndex - segProgress) * cardScaleStep
                        });
                    }
                });
            }
        });
        return ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollTrigger"].getAll().forEach((t)=>t.kill());
            lenis.destroy();
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "intro",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    children: "Enter the Frame"
                }, void 0, false, {
                    fileName: "[project]/app/components/StickyCards/StickyCards.tsx",
                    lineNumber: 88,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/StickyCards/StickyCards.tsx",
                lineNumber: 87,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "sticky-cards",
                children: [
                    {
                        id: "card-1",
                        tag: "Quiet Control",
                        title: "Signal Drift",
                        img: "/card-img-1.jpg"
                    },
                    {
                        id: "card-2",
                        tag: "Fluid Structures",
                        title: "Skyline Drift",
                        img: "/card-img-2.jpg"
                    },
                    {
                        id: "card-3",
                        tag: "Wired Thought",
                        title: "Neural Assembly",
                        img: "/card-img-3.jpg"
                    },
                    {
                        id: "card-4",
                        tag: "Silent Repetition",
                        title: "Learning Loop",
                        img: "/card-img-4.jpg"
                    }
                ].map((card)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "card",
                        id: card.id,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: card.tag
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/StickyCards/StickyCards.tsx",
                                        lineNumber: 120,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        children: card.title
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/StickyCards/StickyCards.tsx",
                                        lineNumber: 121,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/StickyCards/StickyCards.tsx",
                                lineNumber: 119,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "col",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: card.img,
                                    alt: card.title
                                }, void 0, false, {
                                    fileName: "[project]/app/components/StickyCards/StickyCards.tsx",
                                    lineNumber: 124,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/components/StickyCards/StickyCards.tsx",
                                lineNumber: 123,
                                columnNumber: 13
                            }, this)
                        ]
                    }, card.id, true, {
                        fileName: "[project]/app/components/StickyCards/StickyCards.tsx",
                        lineNumber: 118,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/components/StickyCards/StickyCards.tsx",
                lineNumber: 91,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "outro",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    children: "Loop Complete"
                }, void 0, false, {
                    fileName: "[project]/app/components/StickyCards/StickyCards.tsx",
                    lineNumber: 131,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/StickyCards/StickyCards.tsx",
                lineNumber: 130,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Hero$2f$hero$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Hero/hero.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$work$2f$work$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/work/work.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$service$2f$services$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/service/services.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$StickyCards$2f$StickyCards$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/StickyCards/StickyCards.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function Page() {
    const heroRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Hero$2f$hero$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$work$2f$work$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$service$2f$services$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$StickyCards$2f$StickyCards$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/node_modules/gsap/SplitText.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SplitText",
    ()=>SplitText,
    "default",
    ()=>SplitText
]);
/*!
 * SplitText 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2025, GreenSock. All rights reserved. Subject to the terms at https://gsap.com/standard-license.
 * @author: Jack Doyle
 */ let gsap, _fonts, _splitProp = typeof Symbol === "function" ? Symbol() : "_split", _coreInitted, _initIfNecessary = ()=>_coreInitted || SplitText.register(window.gsap), _charSegmenter = typeof Intl !== "undefined" && "Segmenter" in Intl ? new Intl.Segmenter() : 0, _toArray = (r)=>typeof r === "string" ? _toArray(document.querySelectorAll(r)) : "length" in r ? Array.from(r).reduce((acc, cur)=>{
        typeof cur === "string" ? acc.push(..._toArray(cur)) : acc.push(cur);
        return acc;
    }, []) : [
        r
    ], _elements = (targets)=>_toArray(targets).filter((e)=>e instanceof HTMLElement), _emptyArray = [], _context = function() {}, _defaultContext = {
    add: (f)=>f()
}, _spacesRegEx = /\s+/g, _emojiSafeRegEx = new RegExp("\\p{RI}\\p{RI}|\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u{200D}\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?)*|.", "gu"), _emptyBounds = {
    left: 0,
    top: 0,
    width: 0,
    height: 0
}, _findNextValidBounds = (allBounds, startIndex)=>{
    while(++startIndex < allBounds.length && allBounds[startIndex] === _emptyBounds){}
    return allBounds[startIndex] || _emptyBounds;
}, _revertOriginal = ({ element, html, ariaL, ariaH })=>{
    element.innerHTML = html;
    ariaL ? element.setAttribute("aria-label", ariaL) : element.removeAttribute("aria-label");
    ariaH ? element.setAttribute("aria-hidden", ariaH) : element.removeAttribute("aria-hidden");
}, _stretchToFitSpecialChars = (collection, specialCharsRegEx)=>{
    if (specialCharsRegEx) {
        let charsFound = new Set(collection.join("").match(specialCharsRegEx) || _emptyArray), i = collection.length, slots, word, char, combined;
        if (charsFound.size) {
            while(--i > -1){
                word = collection[i];
                for (char of charsFound){
                    if (char.startsWith(word) && char.length > word.length) {
                        slots = 0;
                        combined = word;
                        while(char.startsWith(combined += collection[i + ++slots]) && combined.length < char.length){}
                        if (slots && combined.length === char.length) {
                            collection[i] = char;
                            collection.splice(i + 1, slots);
                            break;
                        }
                    }
                }
            }
        }
    }
    return collection;
}, _disallowInline = (element)=>window.getComputedStyle(element).display === "inline" && (element.style.display = "inline-block"), _insertNodeBefore = (newChild, parent, existingChild)=>parent.insertBefore(typeof newChild === "string" ? document.createTextNode(newChild) : newChild, existingChild), _getWrapper = (type, config, collection)=>{
    let className = config[type + "sClass"] || "", { tag = "div", aria = "auto", propIndex = false } = config, display = type === "line" ? "block" : "inline-block", incrementClass = className.indexOf("++") > -1, wrapper = (text)=>{
        let el = document.createElement(tag), i = collection.length + 1;
        className && (el.className = className + (incrementClass ? " " + className + i : ""));
        propIndex && el.style.setProperty("--" + type, i + "");
        aria !== "none" && el.setAttribute("aria-hidden", "true");
        if (tag !== "span") {
            el.style.position = "relative";
            el.style.display = display;
        }
        el.textContent = text;
        collection.push(el);
        return el;
    };
    incrementClass && (className = className.replace("++", ""));
    wrapper.collection = collection;
    return wrapper;
}, _getLineWrapper = (element, nodes, config, collection)=>{
    let lineWrapper = _getWrapper("line", config, collection), textAlign = window.getComputedStyle(element).textAlign || "left";
    return (startIndex, endIndex)=>{
        let newLine = lineWrapper("");
        newLine.style.textAlign = textAlign;
        element.insertBefore(newLine, nodes[startIndex]);
        for(; startIndex < endIndex; startIndex++){
            newLine.appendChild(nodes[startIndex]);
        }
        newLine.normalize();
    };
}, _splitWordsAndCharsRecursively = (element, config, wordWrapper, charWrapper, prepForCharsOnly, deepSlice, ignore, charSplitRegEx, specialCharsRegEx, isNested)=>{
    var _a;
    let nodes = Array.from(element.childNodes), i = 0, { wordDelimiter, reduceWhiteSpace = true, prepareText } = config, elementBounds = element.getBoundingClientRect(), lastBounds = elementBounds, isPreformatted = !reduceWhiteSpace && window.getComputedStyle(element).whiteSpace.substring(0, 3) === "pre", ignoredPreviousSibling = 0, wordsCollection = wordWrapper.collection, wordDelimIsNotSpace, wordDelimString, wordDelimSplitter, curNode, words, curWordEl, startsWithSpace, endsWithSpace, j, bounds, curWordChars, clonedNode, curSubNode, tempSubNode, curTextContent, wordText, lastWordText, k;
    if (typeof wordDelimiter === "object") {
        wordDelimSplitter = wordDelimiter.delimiter || wordDelimiter;
        wordDelimString = wordDelimiter.replaceWith || "";
    } else {
        wordDelimString = wordDelimiter === "" ? "" : wordDelimiter || " ";
    }
    wordDelimIsNotSpace = wordDelimString !== " ";
    for(; i < nodes.length; i++){
        curNode = nodes[i];
        if (curNode.nodeType === 3) {
            curTextContent = curNode.textContent || "";
            if (reduceWhiteSpace) {
                curTextContent = curTextContent.replace(_spacesRegEx, " ");
            } else if (isPreformatted) {
                curTextContent = curTextContent.replace(/\n/g, wordDelimString + "\n");
            }
            prepareText && (curTextContent = prepareText(curTextContent, element));
            curNode.textContent = curTextContent;
            words = wordDelimString || wordDelimSplitter ? curTextContent.split(wordDelimSplitter || wordDelimString) : curTextContent.match(charSplitRegEx) || _emptyArray;
            lastWordText = words[words.length - 1];
            endsWithSpace = wordDelimIsNotSpace ? lastWordText.slice(-1) === " " : !lastWordText;
            lastWordText || words.pop();
            lastBounds = elementBounds;
            startsWithSpace = wordDelimIsNotSpace ? words[0].charAt(0) === " " : !words[0];
            startsWithSpace && _insertNodeBefore(" ", element, curNode);
            words[0] || words.shift();
            _stretchToFitSpecialChars(words, specialCharsRegEx);
            deepSlice && isNested || (curNode.textContent = "");
            for(j = 1; j <= words.length; j++){
                wordText = words[j - 1];
                if (!reduceWhiteSpace && isPreformatted && wordText.charAt(0) === "\n") {
                    (_a = curNode.previousSibling) == null ? void 0 : _a.remove();
                    _insertNodeBefore(document.createElement("br"), element, curNode);
                    wordText = wordText.slice(1);
                }
                if (!reduceWhiteSpace && wordText === "") {
                    _insertNodeBefore(wordDelimString, element, curNode);
                } else if (wordText === " ") {
                    element.insertBefore(document.createTextNode(" "), curNode);
                } else {
                    wordDelimIsNotSpace && wordText.charAt(0) === " " && _insertNodeBefore(" ", element, curNode);
                    if (ignoredPreviousSibling && j === 1 && !startsWithSpace && wordsCollection.indexOf(ignoredPreviousSibling.parentNode) > -1) {
                        curWordEl = wordsCollection[wordsCollection.length - 1];
                        curWordEl.appendChild(document.createTextNode(charWrapper ? "" : wordText));
                    } else {
                        curWordEl = wordWrapper(charWrapper ? "" : wordText);
                        _insertNodeBefore(curWordEl, element, curNode);
                        ignoredPreviousSibling && j === 1 && !startsWithSpace && curWordEl.insertBefore(ignoredPreviousSibling, curWordEl.firstChild);
                    }
                    if (charWrapper) {
                        curWordChars = _charSegmenter ? _stretchToFitSpecialChars([
                            ..._charSegmenter.segment(wordText)
                        ].map((s)=>s.segment), specialCharsRegEx) : wordText.match(charSplitRegEx) || _emptyArray;
                        for(k = 0; k < curWordChars.length; k++){
                            curWordEl.appendChild(curWordChars[k] === " " ? document.createTextNode(" ") : charWrapper(curWordChars[k]));
                        }
                    }
                    if (deepSlice && isNested) {
                        curTextContent = curNode.textContent = curTextContent.substring(wordText.length + 1, curTextContent.length);
                        bounds = curWordEl.getBoundingClientRect();
                        if (bounds.top > lastBounds.top && bounds.left <= lastBounds.left) {
                            clonedNode = element.cloneNode();
                            curSubNode = element.childNodes[0];
                            while(curSubNode && curSubNode !== curWordEl){
                                tempSubNode = curSubNode;
                                curSubNode = curSubNode.nextSibling;
                                clonedNode.appendChild(tempSubNode);
                            }
                            element.parentNode.insertBefore(clonedNode, element);
                            prepForCharsOnly && _disallowInline(clonedNode);
                        }
                        lastBounds = bounds;
                    }
                    if (j < words.length || endsWithSpace) {
                        _insertNodeBefore(j >= words.length ? " " : wordDelimIsNotSpace && wordText.slice(-1) === " " ? " " + wordDelimString : wordDelimString, element, curNode);
                    }
                }
            }
            element.removeChild(curNode);
            ignoredPreviousSibling = 0;
        } else if (curNode.nodeType === 1) {
            if (ignore && ignore.indexOf(curNode) > -1) {
                wordsCollection.indexOf(curNode.previousSibling) > -1 && wordsCollection[wordsCollection.length - 1].appendChild(curNode);
                ignoredPreviousSibling = curNode;
            } else {
                _splitWordsAndCharsRecursively(curNode, config, wordWrapper, charWrapper, prepForCharsOnly, deepSlice, ignore, charSplitRegEx, specialCharsRegEx, true);
                ignoredPreviousSibling = 0;
            }
            prepForCharsOnly && _disallowInline(curNode);
        }
    }
};
const _SplitText = class _SplitText {
    constructor(elements, config){
        this.isSplit = false;
        _initIfNecessary();
        this.elements = _elements(elements);
        this.chars = [];
        this.words = [];
        this.lines = [];
        this.masks = [];
        this.vars = config;
        this.elements.forEach((el)=>{
            var _a;
            config.overwrite !== false && ((_a = el[_splitProp]) == null ? void 0 : _a._data.orig.filter(({ element })=>element === el).forEach(_revertOriginal));
            el[_splitProp] = this;
        });
        this._split = ()=>this.isSplit && this.split(this.vars);
        let orig = [], timerId, checkWidths = ()=>{
            let i = orig.length, o;
            while(i--){
                o = orig[i];
                let w = o.element.offsetWidth;
                if (w !== o.width) {
                    o.width = w;
                    this._split();
                    return;
                }
            }
        };
        this._data = {
            orig,
            obs: typeof ResizeObserver !== "undefined" && new ResizeObserver(()=>{
                clearTimeout(timerId);
                timerId = setTimeout(checkWidths, 200);
            })
        };
        _context(this);
        this.split(config);
    }
    split(config) {
        (this._ctx || _defaultContext).add(()=>{
            this.isSplit && this.revert();
            this.vars = config = config || this.vars || {};
            let { type = "chars,words,lines", aria = "auto", deepSlice = true, smartWrap, onSplit, autoSplit = false, specialChars, mask } = this.vars, splitLines = type.indexOf("lines") > -1, splitCharacters = type.indexOf("chars") > -1, splitWords = type.indexOf("words") > -1, onlySplitCharacters = splitCharacters && !splitWords && !splitLines, specialCharsRegEx = specialChars && ("push" in specialChars ? new RegExp("(?:" + specialChars.join("|") + ")", "gu") : specialChars), finalCharSplitRegEx = specialCharsRegEx ? new RegExp(specialCharsRegEx.source + "|" + _emojiSafeRegEx.source, "gu") : _emojiSafeRegEx, ignore = !!config.ignore && _elements(config.ignore), { orig, animTime, obs } = this._data, onSplitResult;
            if (splitCharacters || splitWords || splitLines) {
                this.elements.forEach((element, index)=>{
                    orig[index] = {
                        element,
                        html: element.innerHTML,
                        ariaL: element.getAttribute("aria-label"),
                        ariaH: element.getAttribute("aria-hidden")
                    };
                    aria === "auto" ? element.setAttribute("aria-label", (element.textContent || "").trim()) : aria === "hidden" && element.setAttribute("aria-hidden", "true");
                    let chars = [], words = [], lines = [], charWrapper = splitCharacters ? _getWrapper("char", config, chars) : null, wordWrapper = _getWrapper("word", config, words), i, curWord, smartWrapSpan, nextSibling;
                    _splitWordsAndCharsRecursively(element, config, wordWrapper, charWrapper, onlySplitCharacters, deepSlice && (splitLines || onlySplitCharacters), ignore, finalCharSplitRegEx, specialCharsRegEx, false);
                    if (splitLines) {
                        let nodes = _toArray(element.childNodes), wrapLine = _getLineWrapper(element, nodes, config, lines), curNode, toRemove = [], lineStartIndex = 0, allBounds = nodes.map((n)=>n.nodeType === 1 ? n.getBoundingClientRect() : _emptyBounds), lastBounds = _emptyBounds, curBounds;
                        for(i = 0; i < nodes.length; i++){
                            curNode = nodes[i];
                            if (curNode.nodeType === 1) {
                                if (curNode.nodeName === "BR") {
                                    if (!i || nodes[i - 1].nodeName !== "BR") {
                                        toRemove.push(curNode);
                                        wrapLine(lineStartIndex, i + 1);
                                    }
                                    lineStartIndex = i + 1;
                                    lastBounds = _findNextValidBounds(allBounds, i);
                                } else {
                                    curBounds = allBounds[i];
                                    if (i && curBounds.top > lastBounds.top && curBounds.left < lastBounds.left + lastBounds.width - 1) {
                                        wrapLine(lineStartIndex, i);
                                        lineStartIndex = i;
                                    }
                                    lastBounds = curBounds;
                                }
                            }
                        }
                        lineStartIndex < i && wrapLine(lineStartIndex, i);
                        toRemove.forEach((el)=>{
                            var _a;
                            return (_a = el.parentNode) == null ? void 0 : _a.removeChild(el);
                        });
                    }
                    if (!splitWords) {
                        for(i = 0; i < words.length; i++){
                            curWord = words[i];
                            if (splitCharacters || !curWord.nextSibling || curWord.nextSibling.nodeType !== 3) {
                                if (smartWrap && !splitLines) {
                                    smartWrapSpan = document.createElement("span");
                                    smartWrapSpan.style.whiteSpace = "nowrap";
                                    while(curWord.firstChild){
                                        smartWrapSpan.appendChild(curWord.firstChild);
                                    }
                                    curWord.replaceWith(smartWrapSpan);
                                } else {
                                    curWord.replaceWith(...curWord.childNodes);
                                }
                            } else {
                                nextSibling = curWord.nextSibling;
                                if (nextSibling && nextSibling.nodeType === 3) {
                                    nextSibling.textContent = (curWord.textContent || "") + (nextSibling.textContent || "");
                                    curWord.remove();
                                }
                            }
                        }
                        words.length = 0;
                        element.normalize();
                    }
                    this.lines.push(...lines);
                    this.words.push(...words);
                    this.chars.push(...chars);
                });
                mask && this[mask] && this.masks.push(...this[mask].map((el)=>{
                    let maskEl = el.cloneNode();
                    el.replaceWith(maskEl);
                    maskEl.appendChild(el);
                    el.className && (maskEl.className = el.className.trim() + "-mask");
                    maskEl.style.overflow = "clip";
                    return maskEl;
                }));
            }
            this.isSplit = true;
            _fonts && splitLines && (autoSplit ? _fonts.addEventListener("loadingdone", this._split) : _fonts.status === "loading" && console.warn("SplitText called before fonts loaded"));
            if ((onSplitResult = onSplit && onSplit(this)) && onSplitResult.totalTime) {
                this._data.anim = animTime ? onSplitResult.totalTime(animTime) : onSplitResult;
            }
            splitLines && autoSplit && this.elements.forEach((element, index)=>{
                orig[index].width = element.offsetWidth;
                obs && obs.observe(element);
            });
        });
        return this;
    }
    kill() {
        let { obs } = this._data;
        obs && obs.disconnect();
        _fonts == null ? void 0 : _fonts.removeEventListener("loadingdone", this._split);
    }
    revert() {
        var _a, _b;
        if (this.isSplit) {
            let { orig, anim } = this._data;
            this.kill();
            orig.forEach(_revertOriginal);
            this.chars.length = this.words.length = this.lines.length = orig.length = this.masks.length = 0;
            this.isSplit = false;
            if (anim) {
                this._data.animTime = anim.totalTime();
                anim.revert();
            }
            (_b = (_a = this.vars).onRevert) == null ? void 0 : _b.call(_a, this);
        }
        return this;
    }
    static create(elements, config) {
        return new _SplitText(elements, config);
    }
    static register(core) {
        gsap = gsap || core || window.gsap;
        if (gsap) {
            _toArray = gsap.utils.toArray;
            _context = gsap.core.context || _context;
        }
        if (!_coreInitted && window.innerWidth > 0) {
            _fonts = document.fonts;
            _coreInitted = true;
        }
    }
};
_SplitText.version = "3.14.2";
let SplitText = _SplitText;
;
}),
"[project]/node_modules/@gsap/react/src/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useGSAP",
    ()=>useGSAP
]);
/*!
 * @gsap/react 2.1.2
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/ /* eslint-disable */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
;
;
let useIsomorphicLayoutEffect = typeof document !== "undefined" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"], isConfig = (value)=>value && !Array.isArray(value) && typeof value === "object", emptyArray = [], defaultConfig = {}, _gsap = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"]; // accommodates situations where different versions of GSAP may be loaded, so a user can gsap.registerPlugin(useGSAP);
const useGSAP = (callback, dependencies = emptyArray)=>{
    let config = defaultConfig;
    if (isConfig(callback)) {
        config = callback;
        callback = null;
        dependencies = "dependencies" in config ? config.dependencies : emptyArray;
    } else if (isConfig(dependencies)) {
        config = dependencies;
        dependencies = "dependencies" in config ? config.dependencies : emptyArray;
    }
    callback && typeof callback !== "function" && console.warn("First parameter must be a function or config object");
    const { scope, revertOnUpdate } = config, mounted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false), context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(_gsap.context(()=>{}, scope)), contextSafe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])((func)=>context.current.add(null, func)), deferCleanup = dependencies && dependencies.length && !revertOnUpdate;
    deferCleanup && useIsomorphicLayoutEffect(()=>{
        mounted.current = true;
        return ()=>context.current.revert();
    }, emptyArray);
    useIsomorphicLayoutEffect(()=>{
        callback && context.current.add(callback, scope);
        if (!deferCleanup || !mounted.current) {
            return ()=>context.current.revert();
        }
    }, dependencies);
    return {
        context: context.current,
        contextSafe: contextSafe.current
    };
};
useGSAP.register = (core)=>{
    _gsap = core;
};
useGSAP.headless = true; // doesn't require the window to be registered.
}),
];

//# sourceMappingURL=_49ce925d._.js.map