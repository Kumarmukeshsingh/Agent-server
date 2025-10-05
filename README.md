# AGENT DETAILS NODE JS BACKEND POROJECT:

this project store the agent - member details ,how much mamber have a specific agent

# link

github:
linkedin:
deployed link :

# run command :--

npm num dev

# USE SERVICE:

node.js ,
express.js ,
mongodb :- for data store
jwt : for authentication / it hepl to genrate the token with the help of token we can access the the all protected route ;
bcrypt : for hasing the password and encoding -decoding password
csvtojson : conver csv file to json data
multer:it help me for uploading file
cros : it help connection of backend to frontend

# Agent Route api ::

REGISTER (post request): http://localhost:8081/api/user/register
{
"username":"mukesh kumar singh ",
"email" : " mukesh62030667@gmail.com",
" phone": "9162902883",
"password" :"Mukesh@123 ",
}

LOGIN (post request):http://localhost:8081/ api/user/login
{
"email":"mukesh62030667@gmail.com",
"password":"Mukesh@123",
}

CURRENT USER (get request):http://localhost:6000/api/user/current

# member Route api::

created member (post Request ):http://localhost:8081/api/member/create
{
"name":"ram sing",
"phone":"098765432",
"notes":" success is not easy "
}
getall all member (get request):http://localhost:8081/api/member
get one member (get request): http://localhost:8081/ api/member/:id
update member (put request ):http://localhost:8081/api/member/update/:id
delete contact ( delete request ):http://localhost:8081/api/member/delete/:id

# csv file route api :::

insert into data base (post request ) :http://localhost:8081/csv/file
--- csv file value name, phone , notes
