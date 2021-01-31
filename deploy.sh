set -e # stop on error

echo bulid client ...
npm run build

echo check out branch gh-pages ...
git checkout -b gh-pages
echo add client-dist folder
git add -f client-dist
echo commit changes
git commit -m "deploy to gh-pages"
echo push to remote gh-pages
git push origin `git subtree split --prefix client-dist`:gh-pages --force
echo checkout branch master
git checkout master
