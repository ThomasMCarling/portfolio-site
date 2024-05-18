# [thomascarling.com](www.thomascarling.com)

![](https://deploy-badge.vercel.app/?url=https://www.thomascarling.com/&name=thomascarling.com&style=plastic)
![](https://deploy-badge.vercel.app/?url=https://www.thomascarling.co.uk/&name=thomascarling.co.uk&style=plastic)

My portfolio site, written mostly in Typescript.

## Tooling

- [React](https://react.dev/), a declarative javascript framework used to create dynamic web applications
- [NextJs](https://nextjs.org/), a React framework with a focus on [Server Side Rendering](https://nextjs.org/docs/pages/building-your-application/rendering/server-side-rendering)
- [Tailwind CSS](https://tailwindcss.com), an [atomic CSS](https://css-tricks.com/lets-define-exactly-atomic-css/) framework, for styling
- [Typescript](https://www.typescriptlang.org/), a programming language that is a superset of Javascript, plus compile time type-checking
- [pnpm](https://pnpm.io/), a package manager, and better alternative to the widely used [npm](https://www.npmjs.com/)
- [eslint](https://eslint.org/), a static code analysis tool to highlight any problematic javascript patterns, before they cause problems
- [prettier](https://prettier.io/), an opinionated code formatting tool that keeps my formatting consistent
- [playwright](https://playwright.dev/), an end-to-end testing framework
- [radix-ui](https://www.radix-ui.com/primitives), unstyled react primitives to improve the accessibilty of the components
- [shadcn](https://ui.shadcn.com/), a styled component scaffolding tool, built on top of radix primitives and helpful for quick prototyping
- [zod](https://zod.dev/), an expressive schema validation library

## Architecture

This project uses the new [App router](https://nextjs.org/docs/app) model. Routing is file based, inside of src/app. Specific file name conventions can be found [here](https://nextjs.org/docs/app/api-reference/file-conventions), and files named any other way (such as header.tsx) are ignored by the router.

The 'lib' and 'components/ui' directory are used by shadcn, with the components directory containing any generated components, and lib containing the cn utility (a useful function to combine tailwind classes without name clashes, and also simplify the syntax of adding conditional classes). I don't intend to add any additional code to either folder.

Any reusable components that I write will be in the components directory, or subdirectories excluding ui. Most of the jsx components are server components by default, and any client components are explicitly marked with 'use client' at the top of the page, or rendered by a client component.

## Deployment

This project is deployed on Vercel, using the Vercel github integration. Any changes to the main branch will trigger a production build, and no manual steps are required.

## Run Locally

> [!IMPORTANT]  
> These instructions assume you already have git and pnpm installed on your machine. If you don't, then you will need to follow the instructions [here (for git)](https://git-scm.com/) and [here (for pnpm)](https://pnpm.io/installation)

1. Clone the repository

```bash
git clone https://github.com/ThomasMCarling/portfolio-site.git
```

2. Navigate to the cloned project directory from a cli

```bash
cd portfolio-site
```

3. Install the dependencies

```bash
pnpm i
```

4. Run the development server

```bash
pnpm dev
```
