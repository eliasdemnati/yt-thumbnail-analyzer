## Backend

This is the back-end for the YouTube Thumbnail Analyzer. It is a Rest API built with [FastAPI](https://fastapi.tiangolo.com).

### Installation

It is recommended to run the back-end alongside the database and front-end using the `docker-compose.yml` provided in the root directory. It is possible however to run the API locally.

First, you will have to set two environment variables:
- `DATABASE_URI` is the URI used by [sqlalchemy](https://www.sqlalchemy.org/) to connect to the database
- `GROQ_API_KEY` is your API key used to communicate with [Groq](https://groq.com/)

You can run this project like any Python package, but it is recommended to use the [uv](https://github.com/astral-sh/uv) package and project manager.

```bash
$ uv sync --frozen --no-cache # install dependencies
$ uv run fastapi dev # run fastapi
```

You can check linting and formatting errors with [ruff](https://docs.astral.sh/ruff/)

```bash
$ uv run ruff check
```

### Project structure

```
├── 📁 app/
│   ├── 📁 crud/                # CRUD functions used by routes
│   ├── 📁 models/              # SQLAlchemy models
│   ├── 📁 routers/             # Routers that implements business logic
│   ├── 📁 schemas/             # Pydantic schemas
│   ├── database.py             # SQLAlchemy setup and connection to database
│   └── main.py                 # Entry point for the FastAPI app
```

### Features

- Asynchronous API built with FastAPI
- Groq to upload image and get feedback on it
- SQLAlchemy for ORM with MySQL
- Data validation using Pydantic models
- Validation of Groq returned JSON

### Known issues and future improvements

- Groq sometimes hallucinates and doesn't return the right JSON format, resulting in errors
- Improve the prompt engineering to get more relevant feedbacks on the thumbnails
- Improve testing and logging
- Add some kind of authentication to limit API calls to Groq
- Add Swagger documentation
