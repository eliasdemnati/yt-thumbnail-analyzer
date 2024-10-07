# YouTube Thumbnail Analyzer

<img width="911" alt="Screenshot 2024-10-06 at 14 25 37" src="https://github.com/user-attachments/assets/1ccd7665-22de-435d-8e9d-9525adb95246">

This is a full-stack project using Python and FastAPI for the back-end, React for the frontend, and MySQL for the database. It is an analyzer of YouTube thumbnails to get feedbacks and a score on it, thanks to the Groq AI API.

## Installation

Due to security reasons, the Groq API token has not been set and you will need to provide yours. Add it to to `docker-compose.yml` file in the `backend` service.

Then, simply launch the project using `docker compose`:

```bash
$ docker compose up --build -d
```

The database will be initialized with its seed. The frontend will launch on `http://localhost:5173` and the backend on `http://localhost:8080`

## Probable questions

**Why didn't you include tests?**

➡️ Mostly due to time constraint and I feel like implementing tests don't really showcase my skills. But rest assured, it is well in my capacities to implement tests, whether on the backend or the frontend.

**How long did you take to make this?**

➡️ It took me a Sunday, but not 100% focused all the time.

**What could have you done better?**

➡️ I provided `README.md` in the `frontend` and `backend` folders which details the implementations for these services. There is a section regarding improvements in it.

**I still have more questions for you!**

➡️ I'll be more than happy to make a call to talk about it! 👀
