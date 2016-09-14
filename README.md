# Game of Life

A simple WebSocket-based Game of Life build with [django-channels](https://github.com/django/channels) and [React](https://github.com/facebook/react) for exploration or educational purposes.

![preview](/doc/screenshot.png)

## How to run it locally

You need the following requirements installed on your machine:

- [Docker](https://www.docker.com/) and [Docker Compose](https://docs.docker.com/compose/)
- [NodeJS](https://nodejs.org/en/)

Docker wraps all the backend: Python, Django, Redis.

NodeJS serve the frontend through [webpack](https://github.com/webpack/webpack).
I personally use [nvm](https://github.com/creationix/nvm) with a Node 6.

**Run backend**

```bash
# Build and run two docker containers: Redis & the django app
make run-backend
```

The backend will be available at `http://localhost:8000`.

**Run frontend**

```bash
npm install       # Install node dependencies
make run-frontend # Serve the web app
```

The frontend will be available at `http://localhost:8080`.

## Extras

**Redux Devtools**

You can use the [Redux Devtools](https://github.com/gaearon/redux-devtools) on this app.

**Life fixtures**

Different fixtures are available in `src/backend/life/game/fixtures.py`.

You can change the [default Board parameter](https://github.com/Kmaschta/GameOfLife/blob/ae90e531af8d48d70c657d4244073437bc649832/src/backend/life/game/board.py#L9) (replace `eyes` by `generator` or `fleet`).

## License
This piece of code is licensed under [MIT License](/LICENSE).
