//上传文件
 put /Users/liyin/bi-data-view/dist/index.html /usr/local/nginx/html/index.html
 put /Users/liyin/bi-data-view/dist/static.zip /usr/local/nginx/html/static.zip

 put /Users/liyin/bi-data-view/dist.zip  /usr/local/nginx/html/dist.zip
//put /Users/liyin/test/nginx.conf /etc/nginx/nginx.conf
//put /Users/liyin/test/nginx.conf /usr/local/nginx/conf/nginx.conf
//rcp 远端服务器
// sftp root@47.254.154.34

//服务器解压文件

//从服务器下载文件
// scp root@47.254.154.34:/etc/nginx/nginx.conf /Users/liyin/test

// 启动 nginx
 cd /usr/local/nginx/sbin ==> ./nginx

//重启nginx
 cd /usr/local/nginx/sbin ==> ./nginx -s reload
