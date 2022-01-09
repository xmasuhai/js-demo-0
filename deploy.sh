#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

rm -rf dist &&

# 生成静态文件
yarn play &&

# 进入生成的文件夹
cd ./dist &&

git init &&
git add -A &&
git commit -m 'deploy' &&

git push -f git@github.com:xmasuhai/js-demo-0.git master:gh-pages &&

# git remote add origin https://gitee.com/xmasuhai/vue-demo-1.git &&
git push -u origin master
cd -
