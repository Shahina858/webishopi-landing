@echo off
echo =============================
echo  Building Webishopi Landing
echo =============================
call npm run build

echo.
echo Cleaning old JS files on server...
ssh root@88.223.94.1 "rm -f /var/www/webishopi-landing/assets/index-*.js && rm -f /var/www/webishopi-landing/index.html"

echo.
echo Uploading new build...
scp dist/index.html root@88.223.94.1:/var/www/webishopi-landing/
scp dist/assets/index-*.js root@88.223.94.1:/var/www/webishopi-landing/assets/
scp dist/assets/index-*.css root@88.223.94.1:/var/www/webishopi-landing/assets/
scp dist/assets/*.png root@88.223.94.1:/var/www/webishopi-landing/assets/

echo.
echo Reloading Nginx...
ssh root@88.223.94.1 "nginx -s reload"

echo.
echo =============================
echo  Done! https://webishopi.com
echo =============================
pause