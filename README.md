# Portfolio Contact Form Backend

This Cloudflare Worker receives the portfolio contact form and saves each
submission as a separate JSON file in a GitHub repository.

## Files

- `src/index.js` - Worker backend
- `wrangler.jsonc` - Worker configuration

## Required secret

`GITHUB_TOKEN`

Use a GitHub fine-grained Personal Access Token with:

- Only the repository used for contact submissions
- Repository permission: Contents = Read and write

## Required variables

- `GITHUB_OWNER` - GitHub username, e.g. `shailendra9955`
- `GITHUB_REPO` - private repository used for submissions
- `GITHUB_BRANCH` - usually `main`
- `ALLOWED_ORIGIN` - exact URL of your portfolio, e.g. `https://shailendra9955.github.io`

Do not put `GITHUB_TOKEN` in your portfolio HTML or JavaScript.

After deployment, copy the Worker URL into `contact.html`:

`const CONTACT_API_URL = "https://YOUR-WORKER-NAME.YOUR-SUBDOMAIN.workers.dev";`
