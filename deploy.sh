#!/usr/bin/env bash
# AppDepot LLC — deploy helper
# Usage: bash deploy.sh "Your commit message"
# Commits all changes and pushes to GitHub. Sevalla auto-deploys from the repo (~60s).
set -e

MSG="${1:-"Update site"}"

cd "$(dirname "$0")"

git add -A
if git diff --cached --quiet; then
  echo "No changes to deploy."
  exit 0
fi

git commit -m "$MSG"
git push origin main

echo ""
echo "Pushed to GitHub. Sevalla will build and deploy automatically (~60s)."
