# 终止一个错误
set -e

# 构建
yarn build

# 进入生成的构建文件夹
cd build

# 如果你是要部署到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果你想要部署到 https://<USERNAME>.github.io
# git push -f git@github.com:Wangbaoqi/nate_wang.github.io.git master

# 如果你想要部署到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:Wangbaoqi/trip-site.git master:gh-pages

# 如果你想要部署到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:Wangbaoqi/wangbaoqi.github.io.git master


cd -