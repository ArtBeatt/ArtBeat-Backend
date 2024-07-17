<h1>This file connects typeorm and an already existing database. The following steps were followed to setup this project :-</h1>

<h3>1) Download postrgeSQL From its download page.</h3>

![image](https://github.com/user-attachments/assets/56dd354c-dfb1-4274-bd93-ea18d09e5bc2)

<h3>2) Then open psql in command prompt and enter the following commands:</h3>

`CREATE DATABASE mydatabase;`

`CREATE USER myuser WITH PASSWORD 'insert-your-password';`

`GRANT ALL PRIVILEGES ON DATABASE mydatabase TO myuser;`

replace insert-your-password and myuser with your own password and username respectively

<h3>3) Then initialize a node.js project in the command prompt by running the following commands</h3>

![image-2](https://github.com/user-attachments/assets/399c87aa-0f13-4ca1-b385-46a0a4b6b70d)


<h3>4) then install typescript typeorm and postgresql driver using </h3>

![image-3](https://github.com/user-attachments/assets/070199b9-2972-40bb-93d1-66d8711ed65f)


![image-4](https://github.com/user-attachments/assets/f257f0e8-ea3a-429e-8016-ca3257152101)
  

<h3>5) then run the project using npx ts-node src/index.ts in the command prompt</h3>

![image-5](https://github.com/user-attachments/assets/de16168e-dd80-44d6-90db-c5e8eeefbcc0)
