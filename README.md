Steps for deployment of react app to github pages.

1. npm install gh-pages --save-dev
2. git inint
3. git status
4. git add .
5. git commit -m "initial commit"
6. git branch -M 'main
7. git remote add origin "url"
8. git push -u origin 'main'
9. In the package.json file : enter :
 "homepage" : "url".
  Also inside "scripts" use "predeploy":"npm run build" and "deploy":"gh-pages -d build"

10.npm run deploy
