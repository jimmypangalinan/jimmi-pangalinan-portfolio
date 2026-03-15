export const projectsConfig = {
  title: "Our Projects",
  description: "Explore our DevOps projects that demonstrate expertise in automation, cloud infrastructure, CI/CD pipelines, and scalable system architecture. Each project highlights the tools, technologies, and practices used to deliver reliable and efficient deployment workflows.",
  backButton: "Back to Home",
  noProjects: "No projects found.",
  items: [
    {
      title: "Shared-library Jenkins pipeline",
      description: "This project involved creating a shared-library Jenkins pipeline to automate the build and deployment process for multiple applications. The pipeline was designed to be reusable and scalable, allowing for easy integration with various projects. Key features included automated testing, code quality checks, and seamless deployment to staging and production environments.",
      href: "https://www.youtube.com/watch?v=ebbhnn3QJ1o",
      imageUrl: "/assets/images/projects/project1.jpg"
    }
    // {
    //   title: "Project Two",
    //   description: "Describe your second project here. Highlight the key features and your role in development.",
    //   href: "https://edgeone.ai/pages/templates?usecase=portfolio",
    //   imageUrl: "/assets/images/projects/project2.jpg"
    // },
    // {
    //   title: "Project Three",
    //   description: "Share details about your third project. What problems did it solve? What was the outcome?",
    //   href: "https://edgeone.ai/pages/templates?usecase=portfolio",
    //   imageUrl: "/assets/images/projects/project3.png"
    // }
  ]
} as const; 