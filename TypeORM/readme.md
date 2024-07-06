This file connects typeorm and an already existing database. The following steps were followed to setup this project :-

Download postrgeSQL From its download page. Then use psql to create a database using CREATE DATABASE mydatabase
then created a new user throught CREATE USER myuser WITH PASSWORD 'insert-pass' then granted the user priviliges by GRANT ALL PRIVILEGES ON DATABASE mydatabase TO myuser;

Then proceeded to initialize a node.js project using 
mkdir myproject
cd myproject
npm init -y

then installed typeorm and postgresql driver using 
    npm install typeorm pg 
then installed typescript 
    npm install typescript ts-node @types/node 
then created a tsconfig.json file and put in all the config options required for ts 
then created a ormconfig.json for typeorm config options

then created an entity file src/entity/User.ts
then an entry point in src/index.ts
then ran the project using npx ts-node src/index.ts