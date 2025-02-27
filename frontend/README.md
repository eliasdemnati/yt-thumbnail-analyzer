## Frontend

This is the front-end for the YouTube Thumbnail Analyzer. It is a React app built with [Vite](https://vite.dev/) and [TypeScript](https://www.typescriptlang.org/). It is styled with [shadcn-ui](https://ui.shadcn.com/) and [tailwindcss](https://tailwindcss.com/).

### Installation

It is recommended to run the front-end alongside the database and back-end using the `docker-compose.yml` provided in the root directory. It is possible however to run the app locally.

You just need to set the `VITE_API_URL` which is the base URL of the API. You can run the app without it but you won't be able to make any API call.

I recommend using [bun](https://bun.sh/) JavaScript runner and packaer manager as it is faster that using regular NodeJS, but you're free to run it in any way you like.

```bash
$ bun install 
$ bun run dev
```

You can check linting errors with [eslint](https://eslint.org/) and fix formatting errors with [prettier](https://prettier.io/).

```bash
$ bun run lint
$ bun run prettier
```

### Project structure

```
├── 📁 src/
│   ├── 📁 api/                 # API calls functions
│   ├── 📁 components/          # UI components and business logic components
│   ├── 📁 hooks/               # Generated by shadncn-ui
│   ├── 📁 lib/                 # Generated by shadncn-ui
│   ├── 📁 types/               # Zod-types schemas
│   ├── App.tsx                 # App entrypoint
│
```

### Features

- Fully-responsive with a modern design
- Gallery feature to see previously uploaded thumbnails
- Asynchronous API calls using [ky](https://github.com/sindresorhus/ky) and [react-query](https://tanstack.com/query/v4)
- Data-structure validation with [zod](https://zod.dev/)
- Forms management using [react-hook-form](https://react-hook-form.com/)


### Known issues and future improvements

- Responsive has some issues and can sometimes be a bit funky at certain breakpoints
- I'm not 100% proud of the design. I think it can be improved, especially the file upload input, which I don't think is very appealing.
- Add [react-router](https://reactrouter.com/en/main) if I were to add another different screen
- The `components` folder is a bit of a mess as some components are directly visible and some are used internally by other components. I would probably reorganize it differently
- The Dockerfile is not production-ready
