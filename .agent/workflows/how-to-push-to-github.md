---
description: How to push the current project to GitHub
---

# Push Project to GitHub

It looks like `git` might not be installed or configured in your terminal's path. Follow these steps to get your project on GitHub.

## 1. Install Git (if not already installed)

1.  Download Git from [git-scm.com](https://git-scm.com/downloads).
2.  Install it with default settings.
3.  **Restart your terminal** (or VS Code) to make sure the `git` command is recognized.

## 2. Initialize Git in your project

Open a terminal in your project folder (`d:\fast_n_friendly`) and run:

```bash
git init
```

## 3. Stage and Commit your files

Add all your files to the git staging area and commit them:

```bash
git add .
git commit -m "Initial commit of Fast N Friendly"
```

## 4. Create a Repository on GitHub

1.  Go to [github.com/new](https://github.com/new).
2.  Enter a repository name (e.g., `fast-n-friendly`).
3.  Choose **Public** or **Private**.
4.  **Do not** initialize with a README, .gitignore, or License (since you already have code).
5.  Click **Create repository**.

## 5. Connect and Push

Copy the commands shown on GitHub under "…or push an existing repository from the command line" and run them in your terminal. They will look something like this:

```bash
git remote add origin https://github.com/YOUR_USERNAME/fast-n-friendly.git
git branch -M main
git push -u origin main
```

> **Note:** You might be asked to sign in to GitHub in the browser or provide a Personal Access Token.

## Verification

Refresh your GitHub repository page to see your code!
