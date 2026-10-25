# 3d-planets — Base44 sandbox notes

Static frontend only: React 19 + Vite 8 + three.js. There is no backend, no
database and no external service, so no credentials are needed to run it.

## Run it here

```bash
docker compose -f docker-compose.base44.yml up -d --build
```

The Vite dev server runs inside the `web` service on container port 5173,
published on host port **3000** (the preview entry point). The source is
bind-mounted from the repo root and dependencies are installed with `npm ci`
from `package-lock.json` into the `web_node_modules` volume on every container
start, so the running app is always the current checkout.

## Verify it works

```bash
curl -sS -o /dev/null -w '%{http_code}\n' http://localhost:3000/          # 200
docker compose -f docker-compose.base44.yml ps                            # web: healthy
```

The healthcheck fetches `/` from inside the container. A dev server serving
unhashed `/src/main.jsx` (rather than a prebuilt bundle) confirms live source
is being served, i.e. edits reload instead of needing an image rebuild.

## Quirks worth knowing

- **Host allowlist.** Vite rejects requests whose `Host` header it doesn't
  recognize. `__VITE_ADDITIONAL_SERVER_ALLOWED_HOSTS` is forwarded into the
  service and Vite appends it to `server.allowedHosts`; that variable is set by
  the platform, so the compose `environment:` entry must stay bare (no
  hardcoded value) — the sandbox hostname rotates per environment.
- **File watching.** The repo is a bind mount, so `CHOKIDAR_USEPOLLING=true` is
  set; without polling, HMR may not fire on some hosts.
- **Node version.** Vite 8 needs Node >= 20.19 / 22.12; the service pins
  `node:22`.
- No `.env` files, secrets or `requiredAtBoot` variables are used by this app.
