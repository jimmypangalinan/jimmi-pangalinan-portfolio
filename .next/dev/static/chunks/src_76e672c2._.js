(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/config/content.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "siteConfig",
    ()=>siteConfig
]);
const siteConfig = {
    name: "Someone's Portfolio",
    description: "A showcase of my work and thoughts",
    nav: {
        home: "Home",
        posts: "Posts",
        projects: "Projects",
        about: "About"
    },
    home: {
        greeting: "Hello, I'm Jimmi.",
        description: "A passionate DevOps engineer with a strong focus on automation, scalability, and building reliable, efficient infrastructure.",
        buttons: {
            viewProjects: "View Projects",
            readPosts: "Read Posts"
        }
    },
    projects: {
        title: "My Projects",
        description: "Here are some of the current projects I've been working on. I really enjoy creating new projects and coming up with new ideas. I'm always working on something new, so check back often!",
        backButton: "Back to Home",
        noProjects: "No projects found.",
        items: [
            {
                title: "TempMail.Best",
                description: "Best Temporary Email.",
                href: "https://tempmail.best",
                imageUrl: "/assets/images/projects/tempmail.best.png"
            },
            {
                title: "DNS.Surf",
                description: "Querying DNS Resolution Results in Different Regions Worldwide.",
                href: "https://dns.surf",
                imageUrl: "/assets/images/projects/dns.surf.png"
            },
            {
                title: "HTML.ZONE",
                description: "Web Toolbox.",
                href: "https://html.zone",
                imageUrl: "/assets/images/projects/html.zone.png"
            },
            {
                title: "Sink",
                description: "A Simple / Speedy / Secure Link Shortener with Analytics.",
                href: "https://sink.cool",
                imageUrl: "/assets/images/projects/sink.cool.png"
            },
            {
                title: "BroadcastChannel",
                description: "Turn your Telegram Channel into a MicroBlog.",
                href: "https://github.com/ccbikai/BroadcastChannel",
                imageUrl: "/assets/images/projects/broadcast-channel.png"
            },
            {
                title: "L(O*62).ONG",
                description: "Make your URL looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooonger",
                href: "https://loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo.ong",
                imageUrl: "/assets/images/projects/long.png"
            }
        ]
    },
    posts: {
        title: "My Writing",
        description: "My thoughts and ideas about technology and development.",
        backButton: "Back to Home",
        noPosts: "No posts found matching your search.",
        searchPlaceholder: "Filter posts by title...",
        pagination: {
            previous: "Previous",
            next: "Next"
        },
        items: [
            {
                title: "Run MCP Server in a Docker sandbox",
                description: "Run MCP Server in a Docker sandbox to avoid supply chain attacks.",
                date: "Apr 25, 2025",
                href: "/post/guide-to-running-mcp-server-in-a-sandbox",
                imageUrl: "/assets/images/posts/post1.jpg",
                readingTime: 8
            },
            {
                title: "Use Cloudflare Workers to concat audio files",
                description: "How to use Cloudflare Workers to merge audio files using FFmpeg in the browser.",
                date: "April 19, 2025",
                href: "/post/cloudflare-audio-concat",
                imageUrl: "/assets/images/posts/post2.jpg",
                readingTime: 12
            },
            {
                title: "RSS.Beauty - Make Your RSS Beautiful!",
                description: "Beautify your RSS feeds with RSS.Beauty, featuring elegant interfaces, responsive design, and self-hosting support. Try it now!",
                date: "Dec 31, 2024",
                href: "/post/rss-beauty",
                imageUrl: "/assets/images/posts/post3.jpg",
                readingTime: 6
            },
            {
                title: "Building a Modern Web App with Next.js",
                description: "Learn how to build a modern web application using Next.js, React, and Tailwind CSS.",
                date: "Dec 15, 2024",
                href: "/post/nextjs-web-app",
                imageUrl: "/assets/images/posts/post1.jpg",
                readingTime: 15
            },
            {
                title: "The Future of Web Development",
                description: "Exploring the latest trends and technologies shaping the future of web development.",
                date: "Dec 1, 2024",
                href: "/post/future-web-dev",
                imageUrl: "/assets/images/posts/post2.jpg",
                readingTime: 10
            },
            {
                title: "Mastering TypeScript in 2024",
                description: "A comprehensive guide to TypeScript features and best practices for modern web development.",
                date: "Nov 20, 2024",
                href: "/post/typescript-guide",
                imageUrl: "/assets/images/posts/post3.jpg",
                readingTime: 20
            },
            {
                title: "The Art of Clean Code",
                description: "Learn the principles and practices of writing clean, maintainable code that stands the test of time.",
                date: "Nov 10, 2024",
                href: "/post/clean-code",
                imageUrl: "/assets/images/posts/post1.jpg",
                readingTime: 12
            },
            {
                title: "Building Scalable APIs with Node.js",
                description: "Best practices and patterns for building robust and scalable APIs using Node.js and Express.",
                date: "Oct 28, 2024",
                href: "/post/nodejs-apis",
                imageUrl: "/assets/images/posts/post2.jpg",
                readingTime: 18
            },
            {
                title: "Getting Started with GraphQL",
                description: "A beginner's guide to GraphQL: concepts, implementation, and real-world examples.",
                date: "Oct 15, 2024",
                href: "/post/graphql-intro",
                imageUrl: "/assets/images/posts/post3.jpg",
                readingTime: 14
            },
            {
                title: "The Power of CSS Grid",
                description: "Master CSS Grid layout and create complex, responsive designs with ease.",
                date: "Oct 1, 2024",
                href: "/post/css-grid",
                imageUrl: "/assets/images/posts/post1.jpg",
                readingTime: 9
            }
        ]
    },
    about: {
        title: "About",
        description: "Learn more about me and my journey.",
        backButton: "Back to Home"
    },
    theme: {
        dayMode: "Day mode",
        nightMode: "Night mode"
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ThemeToggle.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ThemeToggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/content.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function ThemeToggle() {
    _s();
    const { theme, setTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThemeToggle.useEffect": ()=>{
            setMounted(true);
        }
    }["ThemeToggle.useEffect"], []);
    const handleThemeToggle = ()=>{
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };
    if (!mounted) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative flex items-center pl-6 ml-4 font-medium tracking-wide text-neutral-800 dark:text-white",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute left-0 flex items-center justify-center w-6 h-6 overflow-hidden border-b border-transparent horizon group-hover:border-neutral-600",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: "absolute w-6 h-6",
                    fill: "none",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ThemeToggle.tsx",
                        lineNumber: 32,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ThemeToggle.tsx",
                    lineNumber: 23,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ThemeToggle.tsx",
                lineNumber: 22,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ThemeToggle.tsx",
            lineNumber: 21,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: handleThemeToggle,
        className: "relative flex items-center pl-6 ml-4 font-medium tracking-wide cursor-pointer text-neutral-800 group dark:text-white",
        "aria-label": `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute left-0 flex items-center justify-center w-6 h-6 overflow-hidden border-b border-transparent horizon group-hover:border-neutral-600",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: `absolute w-6 h-6 transition duration-700 transform ease ${theme === 'dark' ? 'hidden' : ''}`,
                        fill: "none",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "2",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ThemeToggle.tsx",
                            lineNumber: 55,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ThemeToggle.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: `absolute w-6 h-6 transition duration-700 transform ease ${theme === 'light' ? 'hidden' : ''}`,
                        fill: "none",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "2",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ThemeToggle.tsx",
                            lineNumber: 66,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ThemeToggle.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ThemeToggle.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "hidden sm:inline-block",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `ml-2 ${theme === 'dark' ? 'hidden' : ''}`,
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].theme.dayMode
                    }, void 0, false, {
                        fileName: "[project]/src/components/ThemeToggle.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `ml-2 ${theme === 'light' ? 'hidden' : ''}`,
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].theme.nightMode
                    }, void 0, false, {
                        fileName: "[project]/src/components/ThemeToggle.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ThemeToggle.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ThemeToggle.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
_s(ThemeToggle, "uGU5l7ciDSfqFDe6wS7vfMb29jQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = ThemeToggle;
var _c;
__turbopack_context__.k.register(_c, "ThemeToggle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/config/global.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "globalConfig",
    ()=>globalConfig
]);
const globalConfig = {
    site: {
        name: "Your Portfolio Name",
        author: "Jimmi Pangalinan",
        description: "A brief description of your portfolio website",
        url: "/"
    },
    navigation: {
        aria: "Main Navigation",
        items: [
            {
                title: "Home",
                href: "/"
            },
            {
                title: "Projects",
                href: "/projects"
            },
            {
                title: "Posts",
                href: "/posts"
            },
            {
                title: "About",
                href: "/about"
            }
        ]
    },
    footer: {
        aria: "Footer Navigation",
        copyright: "© 2025 Jimmi Pangalinan. All rights reserved.",
        social: {
            twitter: "https://x.com/JimmiPangg",
            github: "https://github.com/jimmypangalinan",
            email: "pangalinan.jimmi@gmail.com"
        }
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ThemeToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ThemeToggle.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$global$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/global.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function Navbar() {
    _s();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMenuOpen, setIsMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            setMounted(true);
        }
    }["Navbar.useEffect"], []);
    // Close menu when route changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            setIsMenuOpen(false);
        }
    }["Navbar.useEffect"], [
        pathname
    ]);
    const toggleMenu = ()=>{
        setIsMenuOpen(!isMenuOpen);
    };
    const closeMenu = ()=>{
        setIsMenuOpen(false);
    };
    if (!mounted) {
        return null;
    }
    const isActive = (path)=>{
        if (path === '/') {
            return pathname === '/';
        }
        return pathname.startsWith(path);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        id: "header",
        className: "absolute top-0 z-50 w-full h-20",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between h-full max-w-7xl pl-6 pr-4 mx-auto border-b border-l-0 border-r-0 border-transparent select-none lg:border-r lg:border-l lg:rounded-b-xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    className: "h-5 text-base group relative z-30 flex items-center space-x-1.5 text-black dark:text-white font-semibold whitespace-nowrap",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xl -translate-y-0.5 group-hover:-rotate-12 group-hover:scale-[1.2] ease-in-out duration-300",
                            children: "✦"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Navbar.tsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "-translate-y-0.5",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$global$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalConfig"].site.author
                        }, void 0, false, {
                            fileName: "[project]/src/components/Navbar.tsx",
                            lineNumber: 47,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Navbar.tsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    id: "mobileMenuBackground",
                    onClick: closeMenu,
                    className: `fixed inset-0 z-20 w-screen h-screen duration-300 ease-out bg-white/90 dark:bg-neutral-950/90 ${isMenuOpen ? 'block' : 'hidden'}`
                }, void 0, false, {
                    fileName: "[project]/src/components/Navbar.tsx",
                    lineNumber: 50,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "relative z-30 flex flex-row-reverse justify-start w-full text-sm sm:justify-end text-neutral-500 dark:text-neutral-400 sm:flex-row",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            id: "openMenu",
                            onClick: toggleMenu,
                            className: `flex flex-col items-end justify-center w-6 h-6 ml-4 cursor-pointer sm:hidden ${isMenuOpen ? 'hidden' : 'block'}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-8 h-8 dark:text-neutral-200",
                                fill: "none",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: "2",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M4 8h16M4 16h16"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.tsx",
                                    lineNumber: 75,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 66,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Navbar.tsx",
                            lineNumber: 59,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            id: "closeMenu",
                            onClick: toggleMenu,
                            className: `flex flex-col items-end justify-center w-6 h-6 ml-4 -translate-x-1 cursor-pointer sm:hidden ${isMenuOpen ? 'block' : 'hidden'}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-6 h-6 text-neutral-600 dark:text-neutral-200",
                                fill: "none",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: "2",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M6 18L18 6M6 6l12 12"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.tsx",
                                    lineNumber: 95,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 86,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Navbar.tsx",
                            lineNumber: 79,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            id: "menu",
                            className: `fixed top-[75px] ease-out duration-300 sm:top-0 w-full left-0 sm:py-0 pt-7 pb-4 dm:mx-0 left-0 z-40 flex-col items-end justify-start ${isMenuOpen ? 'flex' : 'hidden'} w-full h-auto text-sm sm:text-base sm:h-auto sm:relative sm:flex-row sm:flex sm:text-sm sm:w-auto sm:pr-0 sm:pt-0`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 top-0 right-0 block w-full h-full px-3 sm:hidden",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative w-full h-full bg-white border border-dashed border-neutral-300 dark:border-neutral-700 backdrop-blur-sm rounded-xl dark:bg-neutral-950"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navbar.tsx",
                                        lineNumber: 106,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.tsx",
                                    lineNumber: 105,
                                    columnNumber: 13
                                }, this),
                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$global$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalConfig"].navigation.items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: item.href,
                                        onClick: closeMenu,
                                        className: `relative flex items-center justify-center w-full px-3 py-2 font-medium tracking-wide text-center duration-200 ease-out sm:py-0 sm:mb-0 md:w-auto hover:text-neutral-900 dark:hover:text-white ${isActive(item.href) ? 'text-neutral-900 dark:text-white' : ''}`,
                                        children: item.title
                                    }, item.href, false, {
                                        fileName: "[project]/src/components/Navbar.tsx",
                                        lineNumber: 110,
                                        columnNumber: 15
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Navbar.tsx",
                            lineNumber: 99,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ThemeToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/src/components/Navbar.tsx",
                            lineNumber: 123,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Navbar.tsx",
                    lineNumber: 58,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Navbar.tsx",
            lineNumber: 44,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Navbar.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_s(Navbar, "jmdSuw10omQsx5neD8wb6UyKx+8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$global$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/global.ts [app-client] (ecmascript)");
'use client';
;
;
;
function Footer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "text-gray-700 bg-white border-t dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container flex flex-col items-center justify-center min-h-[40px] mx-auto px-7 max-w-7xl sm:flex-row sm:min-h-[50px]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    className: "h-5 text-base group relative z-30 flex items-center space-x-1.5 text-black dark:text-white font-semibold",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xl -translate-y-0.5 group-hover:-rotate-12 group-hover:scale-[1.2] ease-in-out duration-300",
                            children: "✦"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Footer.tsx",
                            lineNumber: 11,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "-translate-y-0.5",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$global$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalConfig"].site.author
                        }, void 0, false, {
                            fileName: "[project]/src/components/Footer.tsx",
                            lineNumber: 12,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Footer.tsx",
                    lineNumber: 10,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-2 text-sm text-neutral-700 dark:text-neutral-100 sm:ml-4 sm:pl-4 sm:border-l sm:border-neutral-300 dark:sm:border-neutral-700 sm:mt-0",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$global$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalConfig"].footer.copyright
                }, void 0, false, {
                    fileName: "[project]/src/components/Footer.tsx",
                    lineNumber: 14,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "inline-flex justify-center mt-2 space-x-5 sm:ml-auto sm:mt-0 sm:justify-start",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$global$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalConfig"].footer.social.twitter,
                            target: "_blank",
                            className: "text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "sr-only",
                                    children: "𝕏"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer.tsx",
                                    lineNumber: 19,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-5 h-5 dark:stroke-black stroke-white",
                                    viewBox: "0 0 100 100",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            fillRule: "evenodd",
                                            clipRule: "evenodd",
                                            d: "M95 50c0 24.853-20.147 45-45 45S5 74.853 5 50 25.147 5 50 5s45 20.147 45 45Zm-51.21 2.688-21.51-28.76h16.578l14.1 18.855 17.453-18.855h4.872L55.135 45.694l22.72 30.377H61.279L45.967 55.598l-18.95 20.473h-4.873L43.79 52.688Zm-6.73-25.172h-7.616l33.63 44.967h7.616L37.06 27.516Z",
                                            fill: "currentColor"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 21,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M22.28 23.928v-.5h-.998l.597.8.4-.3Zm21.51 28.76.366.34.283-.306-.25-.334-.4.3Zm-4.932-28.76.4-.3-.15-.2h-.25v.5Zm14.1 18.855-.4.3.36.48.408-.44-.367-.34Zm17.453-18.855v-.5h-.219l-.148.16.367.34Zm4.872 0 .367.34.777-.84h-1.144v.5ZM55.135 45.694l-.367-.34-.282.306.249.333.4-.3Zm22.72 30.377v.5h.999l-.598-.8-.4.3Zm-16.577 0-.4.3.15.2h.25v-.5ZM45.967 55.598l.4-.3-.36-.48-.407.44.367.34Zm-18.95 20.473v.5h.218l.148-.16-.367-.34Zm-4.873 0-.367-.34-.777.84h1.144v-.5Zm7.3-48.554v-.5h-.998l.598.799.4-.3Zm7.616 0 .4-.3-.15-.2h-.25v.5Zm26.015 44.966-.4.3.15.2h.25v-.5Zm7.615 0v.5h.999l-.598-.8-.4.3ZM50 95.5c25.129 0 45.5-20.371 45.5-45.5h-1c0 24.577-19.923 44.5-44.5 44.5v1ZM4.5 50c0 25.129 20.371 45.5 45.5 45.5v-1C25.423 94.5 5.5 74.577 5.5 50h-1ZM50 4.5C24.871 4.5 4.5 24.871 4.5 50h1C5.5 25.423 25.423 5.5 50 5.5v-1ZM95.5 50C95.5 24.871 75.129 4.5 50 4.5v1c24.577 0 44.5 19.923 44.5 44.5h1ZM21.88 24.228l21.509 28.76.8-.6-21.509-28.76-.8.6Zm16.978-.8H22.28v1h16.578v-1Zm14.501 19.055L39.258 23.63l-.8.599 14.1 18.854.801-.599ZM70.044 23.59 52.592 42.443l.734.68 17.452-18.855-.734-.68Zm5.239-.16H70.41v1h4.872v-1Zm-19.78 22.605L75.65 24.268l-.734-.68-20.148 21.766.734.68Zm22.753 29.738-22.72-30.378-.801.6 22.72 30.377.8-.6Zm-16.978.799h16.578v-1H61.278v1ZM45.566 55.898 60.877 76.37l.801-.599L46.368 55.3l-.802.599ZM27.383 76.41l18.95-20.473-.733-.68-18.95 20.473.733.68Zm-5.239.16h4.872v-1h-4.872v1Zm21.278-24.223L21.777 75.731l.734.68 21.645-23.383-.734-.68ZM29.444 28.017h7.616v-1h-7.616v1Zm34.031 44.166-33.63-44.966-.801.599 33.63 44.966.801-.599Zm7.215-.2h-7.615v1h7.615v-1ZM36.66 27.816l33.63 44.966.8-.599-33.63-44.966-.8.599Z",
                                            fill: "currentStroke"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 22,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Footer.tsx",
                                    lineNumber: 20,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Footer.tsx",
                            lineNumber: 18,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$global$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalConfig"].footer.social.github,
                            target: "_blank",
                            className: "text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "sr-only",
                                    children: "GitHub"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer.tsx",
                                    lineNumber: 26,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-5 h-5",
                                    fill: "currentColor",
                                    viewBox: "0 0 24 24",
                                    "aria-hidden": "true",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        fillRule: "evenodd",
                                        d: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",
                                        clipRule: "evenodd"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Footer.tsx",
                                        lineNumber: 28,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer.tsx",
                                    lineNumber: 27,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Footer.tsx",
                            lineNumber: 25,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$global$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalConfig"].footer.social.email}`,
                            className: "text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "sr-only",
                                    children: "Email"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer.tsx",
                                    lineNumber: 32,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-5 h-5",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Footer.tsx",
                                        lineNumber: 34,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer.tsx",
                                    lineNumber: 33,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Footer.tsx",
                            lineNumber: 31,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Footer.tsx",
                    lineNumber: 17,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Footer.tsx",
            lineNumber: 9,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Footer.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/config/posts.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// This file is auto-generated. Do not edit manually.
__turbopack_context__.s([
    "postsConfig",
    ()=>postsConfig
]);
const postsConfig = {
    "title": "Blog Posts",
    "description": "Technical articles, tutorials, and insights about web development and EdgeOne platform.",
    "backButton": "Back to Home",
    "noPosts": "No posts found matching your search.",
    "searchPlaceholder": "Search posts by title...",
    "pagination": {
        "previous": "Previous",
        "next": "Next"
    },
    "posts": [
        {
            "title": "Docker Basics for Developers",
            "description": "Learn the fundamentals of Docker and containerization",
            "date": "2024-03-20",
            "image": "/assets/images/posts/post1.jpg",
            "slug": "posts/docker-basics",
            "tags": [
                "docker",
                "devops",
                "containers",
                "deployment"
            ],
            "author": "Lisa Wang",
            "readTime": "5",
            "content": "\n# Docker Basics for Developers\n\nDocker has revolutionized how we deploy and run applications. Let's learn the basics of containerization with Docker.\n\n## Core Concepts\n\n- Containers\n- Images\n- Dockerfile\n- Docker Compose\n\n## Example Dockerfile\n\n```dockerfile\n# Base image\nFROM node:18-alpine\n\n# Set working directory\nWORKDIR /app\n\n# Copy package files\nCOPY package*.json ./\n\n# Install dependencies\nRUN npm install\n\n# Copy source code\nCOPY . .\n\n# Build application\nRUN npm run build\n\n# Expose port\nEXPOSE 3000\n\n# Start application\nCMD [\"npm\", \"start\"]\n```\n\n## Common Commands\n\n1. `docker build -t myapp .`\n2. `docker run -p 3000:3000 myapp`\n3. `docker-compose up`\n4. `docker ps`\n",
            "html": "<h1>Docker Basics for Developers</h1>\n<p>Docker has revolutionized how we deploy and run applications. Let&#39;s learn the basics of containerization with Docker.</p>\n<h2>Core Concepts</h2>\n<ul>\n<li>Containers</li>\n<li>Images</li>\n<li>Dockerfile</li>\n<li>Docker Compose</li>\n</ul>\n<h2>Example Dockerfile</h2>\n<pre><code class=\"language-dockerfile\"># Base image\nFROM node:18-alpine\n\n# Set working directory\nWORKDIR /app\n\n# Copy package files\nCOPY package*.json ./\n\n# Install dependencies\nRUN npm install\n\n# Copy source code\nCOPY . .\n\n# Build application\nRUN npm run build\n\n# Expose port\nEXPOSE 3000\n\n# Start application\nCMD [&quot;npm&quot;, &quot;start&quot;]\n</code></pre>\n<h2>Common Commands</h2>\n<ol>\n<li><code>docker build -t myapp .</code></li>\n<li><code>docker run -p 3000:3000 myapp</code></li>\n<li><code>docker-compose up</code></li>\n<li><code>docker ps</code></li>\n</ol>\n"
        },
        {
            "title": "Getting Started with Next.js 14",
            "description": "A comprehensive guide to building modern web applications with Next.js 14",
            "date": "2024-03-20",
            "image": "/assets/images/posts/post2.jpg",
            "slug": "posts/getting-started-with-nextjs",
            "tags": [
                "nextjs",
                "react",
                "web development",
                "tutorial"
            ],
            "author": "Jane Smith",
            "readTime": "5",
            "content": "\n# Getting Started with Next.js 14\n\nNext.js 14 brings exciting new features and improvements to the React framework. In this guide, we'll explore the key features and learn how to build modern web applications.\n\n## Key Features\n\n- Server Components\n- App Router\n- Server Actions\n- Improved Performance\n\n## Getting Started\n\n```bash\nnpx create-next-app@latest my-app\ncd my-app\nnpm run dev\n```\n\n## Best Practices\n\n1. Use Server Components by default\n2. Implement proper error boundaries\n3. Optimize images with next/image\n4. Leverage the new App Router\n",
            "html": "<h1>Getting Started with Next.js 14</h1>\n<p>Next.js 14 brings exciting new features and improvements to the React framework. In this guide, we&#39;ll explore the key features and learn how to build modern web applications.</p>\n<h2>Key Features</h2>\n<ul>\n<li>Server Components</li>\n<li>App Router</li>\n<li>Server Actions</li>\n<li>Improved Performance</li>\n</ul>\n<h2>Getting Started</h2>\n<pre><code class=\"language-bash\">npx create-next-app@latest my-app\ncd my-app\nnpm run dev\n</code></pre>\n<h2>Best Practices</h2>\n<ol>\n<li>Use Server Components by default</li>\n<li>Implement proper error boundaries</li>\n<li>Optimize images with next/image</li>\n<li>Leverage the new App Router</li>\n</ol>\n"
        },
        {
            "title": "Designing GraphQL APIs",
            "description": "Best practices for designing and implementing GraphQL APIs",
            "date": "2024-03-20",
            "image": "/assets/images/posts/post3.jpg",
            "slug": "posts/graphql-api",
            "tags": [
                "graphql",
                "api",
                "backend",
                "web development"
            ],
            "author": "Tom Wilson",
            "readTime": "5",
            "content": "\n# Designing GraphQL APIs\n\nGraphQL provides a powerful way to build flexible APIs. Let's explore how to design and implement GraphQL APIs effectively.\n\n## Schema Design\n\n```graphql\ntype User {\n  id: ID!\n  name: String!\n  email: String!\n  posts: [Post!]!\n}\n\ntype Post {\n  id: ID!\n  title: String!\n  content: String!\n  author: User!\n  comments: [Comment!]!\n}\n\ntype Query {\n  user(id: ID!): User\n  posts: [Post!]!\n}\n\ntype Mutation {\n  createPost(input: CreatePostInput!): Post!\n  updatePost(id: ID!, input: UpdatePostInput!): Post!\n}\n```\n\n## Best Practices\n\n1. Use proper types\n2. Implement pagination\n3. Handle errors gracefully\n4. Use fragments for reusability\n\n## Implementation Tips\n\n- Use DataLoader for batching\n- Implement proper caching\n- Handle authentication\n- Monitor performance\n",
            "html": "<h1>Designing GraphQL APIs</h1>\n<p>GraphQL provides a powerful way to build flexible APIs. Let&#39;s explore how to design and implement GraphQL APIs effectively.</p>\n<h2>Schema Design</h2>\n<pre><code class=\"language-graphql\">type User {\n  id: ID!\n  name: String!\n  email: String!\n  posts: [Post!]!\n}\n\ntype Post {\n  id: ID!\n  title: String!\n  content: String!\n  author: User!\n  comments: [Comment!]!\n}\n\ntype Query {\n  user(id: ID!): User\n  posts: [Post!]!\n}\n\ntype Mutation {\n  createPost(input: CreatePostInput!): Post!\n  updatePost(id: ID!, input: UpdatePostInput!): Post!\n}\n</code></pre>\n<h2>Best Practices</h2>\n<ol>\n<li>Use proper types</li>\n<li>Implement pagination</li>\n<li>Handle errors gracefully</li>\n<li>Use fragments for reusability</li>\n</ol>\n<h2>Implementation Tips</h2>\n<ul>\n<li>Use DataLoader for batching</li>\n<li>Implement proper caching</li>\n<li>Handle authentication</li>\n<li>Monitor performance</li>\n</ul>\n"
        },
        {
            "title": "My Blog Journey",
            "description": "A personal journey of learning and growth in web development",
            "date": "2024-03-20",
            "image": "/assets/images/posts/post1.jpg",
            "slug": "posts/mcp-template-list",
            "tags": [
                "web development",
                "learning",
                "personal"
            ],
            "author": "John Doe",
            "readTime": "5",
            "content": "\n# My Blog Journey\n\nWelcome to my personal blog where I share my experiences and insights about web development. This is a space where I document my learning journey and share knowledge with others.\n\n## What I've Learned\n\n- Modern web development practices\n- Frontend frameworks and tools\n- Backend technologies\n- Best practices and tips\n\n## Getting Started\n\n```bash\nnpm install\nnpm run dev\n```\n\n## About This Blog\n\nThis blog is built using modern web technologies and follows best practices in web development. Feel free to explore and learn from my experiences.\n",
            "html": "<h1>My Blog Journey</h1>\n<p>Welcome to my personal blog where I share my experiences and insights about web development. This is a space where I document my learning journey and share knowledge with others.</p>\n<h2>What I&#39;ve Learned</h2>\n<ul>\n<li>Modern web development practices</li>\n<li>Frontend frameworks and tools</li>\n<li>Backend technologies</li>\n<li>Best practices and tips</li>\n</ul>\n<h2>Getting Started</h2>\n<pre><code class=\"language-bash\">npm install\nnpm run dev\n</code></pre>\n<h2>About This Blog</h2>\n<p>This blog is built using modern web technologies and follows best practices in web development. Feel free to explore and learn from my experiences.</p>\n"
        },
        {
            "title": "Building Microservices with Node.js",
            "description": "A practical guide to building scalable microservices using Node.js",
            "date": "2024-03-20",
            "image": "/assets/images/posts/post2.jpg",
            "slug": "posts/nodejs-microservices",
            "tags": [
                "nodejs",
                "microservices",
                "backend",
                "architecture"
            ],
            "author": "David Brown",
            "readTime": "5",
            "content": "\n# Building Microservices with Node.js\n\nMicroservices architecture has become a popular approach for building scalable applications. Let's explore how to implement it using Node.js.\n\n## Architecture Overview\n\n- Service Discovery\n- API Gateway\n- Message Queues\n- Containerization\n\n## Implementation Example\n\n```javascript\n// Example of a microservice using Express\nconst express = require(\"express\");\nconst app = express();\n\napp.get(\"/api/users\", async (req, res) => {\n  try {\n    const users = await userService.getAllUsers();\n    res.json(users);\n  } catch (error) {\n    res.status(500).json({ error: error.message });\n  }\n});\n\n// Service registration\nconst serviceRegistry = {\n  register: (service) => {\n    // Implementation\n  },\n};\n```\n\n## Best Practices\n\n1. Use containerization\n2. Implement circuit breakers\n3. Handle service discovery\n4. Monitor service health\n",
            "html": "<h1>Building Microservices with Node.js</h1>\n<p>Microservices architecture has become a popular approach for building scalable applications. Let&#39;s explore how to implement it using Node.js.</p>\n<h2>Architecture Overview</h2>\n<ul>\n<li>Service Discovery</li>\n<li>API Gateway</li>\n<li>Message Queues</li>\n<li>Containerization</li>\n</ul>\n<h2>Implementation Example</h2>\n<pre><code class=\"language-javascript\">// Example of a microservice using Express\nconst express = require(&quot;express&quot;);\nconst app = express();\n\napp.get(&quot;/api/users&quot;, async (req, res) =&gt; {\n  try {\n    const users = await userService.getAllUsers();\n    res.json(users);\n  } catch (error) {\n    res.status(500).json({ error: error.message });\n  }\n});\n\n// Service registration\nconst serviceRegistry = {\n  register: (service) =&gt; {\n    // Implementation\n  },\n};\n</code></pre>\n<h2>Best Practices</h2>\n<ol>\n<li>Use containerization</li>\n<li>Implement circuit breakers</li>\n<li>Handle service discovery</li>\n<li>Monitor service health</li>\n</ol>\n"
        },
        {
            "title": "React Performance Optimization Techniques",
            "description": "Learn how to optimize your React applications for better performance",
            "date": "2024-03-20",
            "image": "/assets/images/posts/post3.jpg",
            "slug": "posts/react-performance",
            "tags": [
                "react",
                "performance",
                "optimization",
                "frontend"
            ],
            "author": "Mike Chen",
            "readTime": "5",
            "content": "\n# React Performance Optimization Techniques\n\nPerformance optimization is crucial for delivering a smooth user experience. Let's explore various techniques to optimize React applications.\n\n## Key Optimization Areas\n\n- Component Memoization\n- Code Splitting\n- Virtual Lists\n- State Management\n\n## Code Examples\n\n```jsx\n// Using React.memo for component memoization\nconst MemoizedComponent = React.memo(({ data }) => {\n  return (\n    <div>\n      {data.map((item) => (\n        <Item key={item.id} {...item} />\n      ))}\n    </div>\n  );\n});\n\n// Using useMemo for expensive calculations\nconst memoizedValue = useMemo(() => {\n  return computeExpensiveValue(a, b);\n}, [a, b]);\n```\n\n## Best Practices\n\n1. Use React.memo for pure components\n2. Implement proper code splitting\n3. Optimize re-renders\n4. Use proper key props\n",
            "html": "<h1>React Performance Optimization Techniques</h1>\n<p>Performance optimization is crucial for delivering a smooth user experience. Let&#39;s explore various techniques to optimize React applications.</p>\n<h2>Key Optimization Areas</h2>\n<ul>\n<li>Component Memoization</li>\n<li>Code Splitting</li>\n<li>Virtual Lists</li>\n<li>State Management</li>\n</ul>\n<h2>Code Examples</h2>\n<pre><code class=\"language-jsx\">// Using React.memo for component memoization\nconst MemoizedComponent = React.memo(({ data }) =&gt; {\n  return (\n    &lt;div&gt;\n      {data.map((item) =&gt; (\n        &lt;Item key={item.id} {...item} /&gt;\n      ))}\n    &lt;/div&gt;\n  );\n});\n\n// Using useMemo for expensive calculations\nconst memoizedValue = useMemo(() =&gt; {\n  return computeExpensiveValue(a, b);\n}, [a, b]);\n</code></pre>\n<h2>Best Practices</h2>\n<ol>\n<li>Use React.memo for pure components</li>\n<li>Implement proper code splitting</li>\n<li>Optimize re-renders</li>\n<li>Use proper key props</li>\n</ol>\n"
        },
        {
            "title": "Web Security Best Practices",
            "description": "Essential security practices for modern web applications",
            "date": "2024-03-20",
            "image": "/assets/images/posts/post1.jpg",
            "slug": "posts/security-best-practices",
            "tags": [
                "security",
                "web development",
                "best practices",
                "authentication"
            ],
            "author": "John Security",
            "readTime": "5",
            "content": "\n# Web Security Best Practices\n\nSecurity is crucial for any web application. Let's explore essential security practices to protect your applications.\n\n## Key Security Areas\n\n- Authentication\n- Authorization\n- Data Encryption\n- Input Validation\n\n## Implementation Examples\n\n```javascript\n// Example of secure password hashing\nconst bcrypt = require(\"bcrypt\");\n\nasync function hashPassword(password) {\n  const salt = await bcrypt.genSalt(12);\n  return bcrypt.hash(password, salt);\n}\n\n// Example of JWT implementation\nconst jwt = require(\"jsonwebtoken\");\n\nfunction generateToken(user) {\n  return jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, {\n    expiresIn: \"1h\",\n  });\n}\n```\n\n## Security Checklist\n\n1. Use HTTPS\n2. Implement proper authentication\n3. Sanitize user input\n4. Use secure headers\n5. Regular security audits\n",
            "html": "<h1>Web Security Best Practices</h1>\n<p>Security is crucial for any web application. Let&#39;s explore essential security practices to protect your applications.</p>\n<h2>Key Security Areas</h2>\n<ul>\n<li>Authentication</li>\n<li>Authorization</li>\n<li>Data Encryption</li>\n<li>Input Validation</li>\n</ul>\n<h2>Implementation Examples</h2>\n<pre><code class=\"language-javascript\">// Example of secure password hashing\nconst bcrypt = require(&quot;bcrypt&quot;);\n\nasync function hashPassword(password) {\n  const salt = await bcrypt.genSalt(12);\n  return bcrypt.hash(password, salt);\n}\n\n// Example of JWT implementation\nconst jwt = require(&quot;jsonwebtoken&quot;);\n\nfunction generateToken(user) {\n  return jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, {\n    expiresIn: &quot;1h&quot;,\n  });\n}\n</code></pre>\n<h2>Security Checklist</h2>\n<ol>\n<li>Use HTTPS</li>\n<li>Implement proper authentication</li>\n<li>Sanitize user input</li>\n<li>Use secure headers</li>\n<li>Regular security audits</li>\n</ol>\n"
        },
        {
            "title": "Advanced Tailwind CSS Tips and Tricks",
            "description": "Learn how to leverage Tailwind CSS for better UI development",
            "date": "2024-03-20",
            "image": "/assets/images/posts/post2.jpg",
            "slug": "posts/tailwind-css-tips",
            "tags": [
                "css",
                "tailwind",
                "frontend",
                "design"
            ],
            "author": "Sarah Wilson",
            "readTime": "5",
            "content": "\n# Advanced Tailwind CSS Tips and Tricks\n\nTailwind CSS has revolutionized how we build user interfaces. Here are some advanced tips to help you get the most out of this utility-first CSS framework.\n\n## Custom Configuration\n\n```javascript\n// tailwind.config.js\nmodule.exports = {\n  theme: {\n    extend: {\n      colors: {\n        primary: \"#1a73e8\",\n        secondary: \"#34a853\",\n      },\n    },\n  },\n};\n```\n\n## Best Practices\n\n1. Use @apply for repeated patterns\n2. Leverage custom plugins\n3. Optimize for production\n4. Use arbitrary values when needed\n\n## Component Examples\n\n```html\n<div\n  class=\"flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm\"\n>\n  <h2 class=\"text-xl font-semibold text-gray-900 dark:text-white\">\n    Card Title\n  </h2>\n  <button\n    class=\"px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark\"\n  >\n    Click Me\n  </button>\n</div>\n```\n",
            "html": "<h1>Advanced Tailwind CSS Tips and Tricks</h1>\n<p>Tailwind CSS has revolutionized how we build user interfaces. Here are some advanced tips to help you get the most out of this utility-first CSS framework.</p>\n<h2>Custom Configuration</h2>\n<pre><code class=\"language-javascript\">// tailwind.config.js\nmodule.exports = {\n  theme: {\n    extend: {\n      colors: {\n        primary: &quot;#1a73e8&quot;,\n        secondary: &quot;#34a853&quot;,\n      },\n    },\n  },\n};\n</code></pre>\n<h2>Best Practices</h2>\n<ol>\n<li>Use @apply for repeated patterns</li>\n<li>Leverage custom plugins</li>\n<li>Optimize for production</li>\n<li>Use arbitrary values when needed</li>\n</ol>\n<h2>Component Examples</h2>\n<pre><code class=\"language-html\">&lt;div\n  class=&quot;flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm&quot;\n&gt;\n  &lt;h2 class=&quot;text-xl font-semibold text-gray-900 dark:text-white&quot;&gt;\n    Card Title\n  &lt;/h2&gt;\n  &lt;button\n    class=&quot;px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark&quot;\n  &gt;\n    Click Me\n  &lt;/button&gt;\n&lt;/div&gt;\n</code></pre>\n"
        },
        {
            "title": "Testing React Applications",
            "description": "A comprehensive guide to testing React applications with Jest and React Testing Library",
            "date": "2024-03-20",
            "image": "/assets/images/posts/post3.jpg",
            "slug": "posts/testing-react",
            "tags": [
                "react",
                "testing",
                "jest",
                "frontend"
            ],
            "author": "Emma Davis",
            "readTime": "5",
            "content": "\n# Testing React Applications\n\nTesting is crucial for maintaining high-quality React applications. Let's explore different testing strategies and tools.\n\n## Testing Tools\n\n- Jest\n- React Testing Library\n- Cypress\n- MSW (Mock Service Worker)\n\n## Example Tests\n\n```jsx\nimport { render, screen, fireEvent } from \"@testing-library/react\";\nimport userEvent from \"@testing-library/user-event\";\nimport Counter from \"./Counter\";\n\ndescribe(\"Counter\", () => {\n  test(\"renders counter with initial value\", () => {\n    render(<Counter />);\n    expect(screen.getByText(\"Count: 0\")).toBeInTheDocument();\n  });\n\n  test(\"increments counter when button is clicked\", async () => {\n    render(<Counter />);\n    const button = screen.getByRole(\"button\", { name: /increment/i });\n    await userEvent.click(button);\n    expect(screen.getByText(\"Count: 1\")).toBeInTheDocument();\n  });\n});\n```\n\n## Testing Strategies\n\n1. Unit Testing\n2. Integration Testing\n3. End-to-End Testing\n4. Snapshot Testing\n",
            "html": "<h1>Testing React Applications</h1>\n<p>Testing is crucial for maintaining high-quality React applications. Let&#39;s explore different testing strategies and tools.</p>\n<h2>Testing Tools</h2>\n<ul>\n<li>Jest</li>\n<li>React Testing Library</li>\n<li>Cypress</li>\n<li>MSW (Mock Service Worker)</li>\n</ul>\n<h2>Example Tests</h2>\n<pre><code class=\"language-jsx\">import { render, screen, fireEvent } from &quot;@testing-library/react&quot;;\nimport userEvent from &quot;@testing-library/user-event&quot;;\nimport Counter from &quot;./Counter&quot;;\n\ndescribe(&quot;Counter&quot;, () =&gt; {\n  test(&quot;renders counter with initial value&quot;, () =&gt; {\n    render(&lt;Counter /&gt;);\n    expect(screen.getByText(&quot;Count: 0&quot;)).toBeInTheDocument();\n  });\n\n  test(&quot;increments counter when button is clicked&quot;, async () =&gt; {\n    render(&lt;Counter /&gt;);\n    const button = screen.getByRole(&quot;button&quot;, { name: /increment/i });\n    await userEvent.click(button);\n    expect(screen.getByText(&quot;Count: 1&quot;)).toBeInTheDocument();\n  });\n});\n</code></pre>\n<h2>Testing Strategies</h2>\n<ol>\n<li>Unit Testing</li>\n<li>Integration Testing</li>\n<li>End-to-End Testing</li>\n<li>Snapshot Testing</li>\n</ol>\n"
        },
        {
            "title": "TypeScript Best Practices in 2024",
            "description": "Essential TypeScript patterns and practices for modern web development",
            "date": "2024-03-20",
            "image": "/assets/images/posts/post1.jpg",
            "slug": "posts/typescript-best-practices",
            "tags": [
                "typescript",
                "javascript",
                "programming",
                "best practices"
            ],
            "author": "Alex Johnson",
            "readTime": "5",
            "content": "\n# TypeScript Best Practices in 2024\n\nTypeScript has become an essential tool in modern web development. Let's explore the best practices that will help you write more maintainable and type-safe code.\n\n## Type Safety\n\n- Use strict mode\n- Leverage type inference\n- Define proper interfaces\n- Use type guards effectively\n\n## Code Organization\n\n```typescript\n// Example of a well-organized TypeScript module\ninterface User {\n  id: string;\n  name: string;\n  email: string;\n}\n\nclass UserService {\n  async getUser(id: string): Promise<User> {\n    // Implementation\n  }\n}\n```\n\n## Advanced Features\n\n1. Generics\n2. Utility Types\n3. Decorators\n4. Type Guards\n",
            "html": "<h1>TypeScript Best Practices in 2024</h1>\n<p>TypeScript has become an essential tool in modern web development. Let&#39;s explore the best practices that will help you write more maintainable and type-safe code.</p>\n<h2>Type Safety</h2>\n<ul>\n<li>Use strict mode</li>\n<li>Leverage type inference</li>\n<li>Define proper interfaces</li>\n<li>Use type guards effectively</li>\n</ul>\n<h2>Code Organization</h2>\n<pre><code class=\"language-typescript\">// Example of a well-organized TypeScript module\ninterface User {\n  id: string;\n  name: string;\n  email: string;\n}\n\nclass UserService {\n  async getUser(id: string): Promise&lt;User&gt; {\n    // Implementation\n  }\n}\n</code></pre>\n<h2>Advanced Features</h2>\n<ol>\n<li>Generics</li>\n<li>Utility Types</li>\n<li>Decorators</li>\n<li>Type Guards</li>\n</ol>\n"
        }
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/PostCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PostCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
'use client';
;
;
;
function PostCard({ title, description, date, href, pattern = 'dots', imageUrl = '/placeholder.jpg', readingTime }) {
    const patterns = {
        dots: "bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] dark:bg-[radial-gradient(#404040_1px,transparent_1px)]",
        grid: "bg-[linear-gradient(#e5e7eb_1px,transparent_1px),linear-gradient(90deg,#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] dark:bg-[linear-gradient(#404040_1px,transparent_1px),linear-gradient(90deg,#404040_1px,transparent_1px)]",
        waves: "bg-[linear-gradient(45deg,transparent_25%,#e5e7eb_25%,#e5e7eb_50%,transparent_50%,transparent_75%,#e5e7eb_75%)] [background-size:20px_20px] dark:bg-[linear-gradient(45deg,transparent_25%,#404040_25%,#404040_50%,transparent_50%,transparent_75%,#404040_75%)]",
        circles: "bg-[radial-gradient(circle_at_center,#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] dark:bg-[radial-gradient(circle_at_center,#404040_1px,transparent_1px)]"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: href,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative border border-transparent border-dashed cursor-pointer p-7 group rounded-2xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 z-20 w-full h-full duration-300 ease-out bg-white dark:bg-neutral-950 border border-dashed rounded-2xl border-neutral-300 dark:border-neutral-700 group-hover:-translate-x-1 group-hover:-translate-y-1",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `absolute inset-0 ${patterns[pattern]} opacity-50`
                    }, void 0, false, {
                        fileName: "[project]/src/components/PostCard.tsx",
                        lineNumber: 28,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/PostCard.tsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 z-10 w-full h-full duration-300 ease-out border border-dashed rounded-2xl border-neutral-300 dark:border-neutral-700 group-hover:translate-x-1 group-hover:translate-y-1"
                }, void 0, false, {
                    fileName: "[project]/src/components/PostCard.tsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative z-30 duration-300 ease-out group-hover:-translate-x-1 group-hover:-translate-y-1",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "flex items-center mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-lg font-bold leading-tight tracking-tight sm:text-xl lg:text-2xl text-neutral-900 dark:text-neutral-100",
                                                children: title
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/PostCard.tsx",
                                                lineNumber: 35,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "group-hover:translate-x-0 flex-shrink-0 translate-y-0.5 -translate-x-1 w-4 h-4 stroke-current ml-1 transition-all ease-in-out duration-200 transform opacity-0 group-hover:opacity-100 text-neutral-600 dark:text-neutral-400",
                                                viewBox: "0 0 13 15",
                                                version: "1.1",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                xmlnsXlink: "http://www.w3.org/1999/xlink",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                    stroke: "none",
                                                    strokeWidth: "1",
                                                    fill: "none",
                                                    fillRule: "evenodd",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                        id: "svg",
                                                        transform: "translate(0.666667, 2.333333)",
                                                        stroke: "currentColor",
                                                        strokeWidth: "2.4",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                                    className: "transition-all duration-200 ease-out opacity-0 delay-0 group-hover:opacity-100",
                                                                    points: "5.33333333 0 10.8333333 5.5 5.33333333 11"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/PostCard.tsx",
                                                                    lineNumber: 42,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                    className: "transition-all duration-200 ease-out transform -translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 group-hover:ml-0",
                                                                    x1: "10.8333333",
                                                                    y1: "5.5",
                                                                    x2: "0.833333333",
                                                                    y2: "5.16666667"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/PostCard.tsx",
                                                                    lineNumber: 43,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/PostCard.tsx",
                                                            lineNumber: 41,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/PostCard.tsx",
                                                        lineNumber: 40,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/PostCard.tsx",
                                                    lineNumber: 39,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/PostCard.tsx",
                                                lineNumber: 38,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/PostCard.tsx",
                                        lineNumber: 34,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-base text-neutral-600 dark:text-neutral-400 mb-3",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: description
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/PostCard.tsx",
                                            lineNumber: 50,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/PostCard.tsx",
                                        lineNumber: 49,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-4 text-sm font-medium text-neutral-600 dark:text-neutral-400",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    "Posted on ",
                                                    date
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/PostCard.tsx",
                                                lineNumber: 53,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "flex items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        className: "w-4 h-4 mr-1",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        viewBox: "0 0 24 24",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: 2,
                                                            d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/PostCard.tsx",
                                                            lineNumber: 56,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/PostCard.tsx",
                                                        lineNumber: 55,
                                                        columnNumber: 19
                                                    }, this),
                                                    readingTime,
                                                    " min read"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/PostCard.tsx",
                                                lineNumber: 54,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/PostCard.tsx",
                                        lineNumber: 52,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/PostCard.tsx",
                                lineNumber: 33,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative w-64 h-48 rounded-xl overflow-hidden flex-shrink-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: imageUrl,
                                    alt: title,
                                    fill: true,
                                    className: "object-cover"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PostCard.tsx",
                                    lineNumber: 63,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/PostCard.tsx",
                                lineNumber: 62,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/PostCard.tsx",
                        lineNumber: 32,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/PostCard.tsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/PostCard.tsx",
            lineNumber: 26,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/PostCard.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
_c = PostCard;
var _c;
__turbopack_context__.k.register(_c, "PostCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/PostsSearch.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PostsSearch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PostCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/PostCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$posts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/posts.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const POSTS_PER_PAGE = 5;
function PostsSearch() {
    _s();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    // const [searchQuery, setSearchQuery] = useState("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PostsSearch.useEffect": ()=>{
            setMounted(true);
        // Listen for search box changes
        // const searchInput = document.querySelector('input[type="text"]') as HTMLInputElement;
        // if (searchInput) {
        //   const handleInput = (e: Event) => {
        //     const target = e.target as HTMLInputElement;
        //     setSearchQuery(target.value);
        //   };
        //   searchInput.addEventListener('input', handleInput);
        //   return () => searchInput.removeEventListener('input', handleInput);
        // }
        }
    }["PostsSearch.useEffect"], []);
    // Filter posts based on search query
    // const filteredPosts = postsConfig.posts.filter(post =>
    //   post.title.toLowerCase().includes(searchQuery.toLowerCase())
    // );
    const totalPages = Math.ceil(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$posts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["postsConfig"].posts.length / POSTS_PER_PAGE);
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
    const endIndex = startIndex + POSTS_PER_PAGE;
    const currentPosts = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$posts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["postsConfig"].posts.slice(startIndex, endIndex);
    // Reset to first page when search query changes
    // useEffect(() => {
    //   setCurrentPage(1);
    // }, [searchQuery]);
    if (!mounted) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-stretch w-full gap-5",
                children: currentPosts.length > 0 ? currentPosts.map((post, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PostCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        title: post.title,
                        description: post.description,
                        date: post.date,
                        href: `/${post.slug}`,
                        pattern: "dots",
                        imageUrl: post.image,
                        readingTime: parseInt(post.readTime)
                    }, index, false, {
                        fileName: "[project]/src/components/PostsSearch.tsx",
                        lineNumber: 52,
                        columnNumber: 13
                    }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center py-8 text-neutral-600 dark:text-neutral-400",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$posts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["postsConfig"].noPosts
                }, void 0, false, {
                    fileName: "[project]/src/components/PostsSearch.tsx",
                    lineNumber: 64,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/PostsSearch.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            totalPages > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center items-center gap-2 mt-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setCurrentPage((prev)=>Math.max(prev - 1, 1)),
                        disabled: currentPage === 1,
                        className: "px-3 py-1 text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 disabled:opacity-50 disabled:cursor-not-allowed",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$posts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["postsConfig"].pagination.previous
                    }, void 0, false, {
                        fileName: "[project]/src/components/PostsSearch.tsx",
                        lineNumber: 72,
                        columnNumber: 11
                    }, this),
                    [
                        ...Array(totalPages)
                    ].map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setCurrentPage(index + 1),
                            className: `w-8 h-8 flex items-center justify-center rounded-full text-sm font-medium transition-colors ${currentPage === index + 1 ? 'bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900' : 'text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800'}`,
                            children: index + 1
                        }, index, false, {
                            fileName: "[project]/src/components/PostsSearch.tsx",
                            lineNumber: 80,
                            columnNumber: 13
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setCurrentPage((prev)=>Math.min(prev + 1, totalPages)),
                        disabled: currentPage === totalPages,
                        className: "px-3 py-1 text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 disabled:opacity-50 disabled:cursor-not-allowed",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$posts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["postsConfig"].pagination.next
                    }, void 0, false, {
                        fileName: "[project]/src/components/PostsSearch.tsx",
                        lineNumber: 92,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/PostsSearch.tsx",
                lineNumber: 71,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/PostsSearch.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
_s(PostsSearch, "BAiujj3VBYpIV6B3Sig3YkvVrZA=");
_c = PostsSearch;
var _c;
__turbopack_context__.k.register(_c, "PostsSearch");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/PostsContent.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PostsContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$posts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/posts.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PostsSearch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/PostsSearch.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PostCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/PostCard.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const POSTS_PER_PAGE = 5;
function PostsContent() {
    _s();
    const totalPages = Math.ceil(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$posts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["postsConfig"].posts.length / POSTS_PER_PAGE);
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
    const currentPosts = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$posts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["postsConfig"].posts.slice(startIndex, startIndex + POSTS_PER_PAGE);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative z-20 w-[896px] mx-auto mt-32 mb-12",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center mb-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-3xl lg:text-4xl",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$posts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["postsConfig"].title
                }, void 0, false, {
                    fileName: "[project]/src/components/PostsContent.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/PostsContent.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-stretch w-full gap-5",
                children: currentPosts.map((post, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PostCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        title: post.title,
                        description: post.description,
                        date: post.date,
                        href: `/${post.slug}`,
                        pattern: "dots",
                        imageUrl: post.image,
                        readingTime: parseInt(post.readTime)
                    }, post.slug, false, {
                        fileName: "[project]/src/components/PostsContent.tsx",
                        lineNumber: 50,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/PostsContent.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            totalPages > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center items-center gap-2 mt-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        disabled: currentPage === 1,
                        onClick: ()=>setCurrentPage((prev)=>Math.max(1, prev - 1)),
                        className: `px-3 py-1 text-sm font-medium text-neutral-600 dark:text-neutral-400 ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""}`,
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$posts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["postsConfig"].pagination.previous
                    }, void 0, false, {
                        fileName: "[project]/src/components/PostsContent.tsx",
                        lineNumber: 65,
                        columnNumber: 11
                    }, this),
                    [
                        ...Array(totalPages)
                    ].map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setCurrentPage(index + 1),
                            "aria-current": index + 1 === currentPage ? "page" : undefined,
                            className: `w-8 h-8 flex items-center justify-center rounded-full text-sm font-medium ${index + 1 === currentPage ? "bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900" : "text-neutral-600 dark:text-neutral-400"}`,
                            children: index + 1
                        }, index, false, {
                            fileName: "[project]/src/components/PostsContent.tsx",
                            lineNumber: 75,
                            columnNumber: 13
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        disabled: currentPage === totalPages,
                        onClick: ()=>setCurrentPage((prev)=>Math.min(totalPages, prev + 1)),
                        className: `px-3 py-1 text-sm font-medium text-neutral-600 dark:text-neutral-400 ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""}`,
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$posts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["postsConfig"].pagination.next
                    }, void 0, false, {
                        fileName: "[project]/src/components/PostsContent.tsx",
                        lineNumber: 88,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/PostsContent.tsx",
                lineNumber: 64,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PostsSearch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/components/PostsContent.tsx",
                lineNumber: 100,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/PostsContent.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_s(PostsContent, "6xAUoJ2motYJ38x4zeUWisA+X/4=");
_c = PostsContent;
var _c;
__turbopack_context__.k.register(_c, "PostsContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_76e672c2._.js.map