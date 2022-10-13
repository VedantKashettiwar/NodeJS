const os =require('os');
console.log(os.arch()) //return architecture
console.log(os.freemem()/1024/1024/1024) //return free ram
console.log(os.totalmem()/1024/1024/1024) //return ram
console.log(os.hostname()) //return system username
console.log(os.platform()) //return os
console.log(os.tmpdir()) //return location of temp folder
console.log(os.type()) //return type of os