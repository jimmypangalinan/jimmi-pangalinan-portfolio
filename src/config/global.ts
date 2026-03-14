export const globalConfig = {
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
} as const; 