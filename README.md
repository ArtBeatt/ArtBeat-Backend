<h1> Brevo Email verification script </h1> 
This script uses the brevo API to send email verification and/or password reset emails to pre existing contacts in the brevo database.

<h3>Login to the brevo dashboard</h3>

![image](https://github.com/user-attachments/assets/6d54784e-8d22-46ac-b3e5-998361cd0b57)

<h3>Then click on the drop down menu at the top right and go to smpt and API</h3>

![image-1](https://github.com/user-attachments/assets/c3d6bd6a-f772-498f-b0e9-cfe9e3c3d4ef)

<h3>then click on API keys and generate a new key</h3>

![image-2](https://github.com/user-attachments/assets/42fd23bd-80ad-454a-9416-d4a12dfa0f0a)
![image-3](https://github.com/user-attachments/assets/6eca8f3f-4b03-4525-ba1b-df37fdc315cb)

<h3>Now go to the contacts section from the menu and create a new contact</h3>


![image-4](https://github.com/user-attachments/assets/0f9a3fd2-c682-4f23-a066-8370b1a8d66f)
![image-5](https://github.com/user-attachments/assets/7ff472a3-a1b0-4ec3-869c-6dc8d8713c1d)

<h3>Also go to campaigns -> templates and add a template or import one and make not of the template id</h3>

![image-6](https://github.com/user-attachments/assets/f42224ec-8401-4e0b-adef-6cbdf27f9162)

<h3>After this open the attached script and add the API key, the contact details plus a few other things like the template ID</h3>


![image-7](https://github.com/user-attachments/assets/4e5be8d9-f28f-426a-a023-797bdc7bb6b4)

<h3>run the script and enter the details and your mail will be sent successfully!</h3>


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


<p align="center"><h1>Image Picker Using React-Native </h1></p>

<h3>Start off by downloading expo using the command </h3>
`npm install expo`

<h3>then open the directory using the cd command in your command prompt and run the command</h3>
`npx expo start`
