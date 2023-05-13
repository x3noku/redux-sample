## Start
- Create new repository from this template
- Go to `package.json`: change name to your project's name, go to `app.json`: change name and slug as well.
- Add file `.github/workflows/template-sync.yml` :
``` yml
on:
    # cronjob trigger At 00:00 on day-of-month 1. https://crontab.guru/every-month
  schedule:
  - cron:  "0 0 1 * *"
  # manual trigger
  workflow_dispatch:
jobs:
  repo-sync:
    runs-on: ubuntu-latest

    steps:
      # To use this repository's private action, you must check out the repository
      - name: Checkout
        uses: actions/checkout@v3
      - name: actions-template-sync
        uses: AndreasAugustin/actions-template-sync@v0.8.0
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          source_repo_path: Xenous-Inc/ExpoTemplate
          upstream_branch: main # defaults to main
          pr_commit_msg: [Chore] Merge template changes :up:
```
- Add file `.github/.templatesyncignore` with that content:
```
App.tsx
./README.md
```
  - Push these changes
- Add `dev` branch
- Configure security rules for `main` branch:
  - Require a pull request before merging
  - Lock branch

## End
Delete this file after necessary changes done.

> If you want to sync with the template manually: go to Actions and run template-sync workflow
