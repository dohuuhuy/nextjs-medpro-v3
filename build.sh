git stash &&
git fetch &&
git pull &&
yarn build:testing &&
pm2 restart web-srr