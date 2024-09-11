
// Problem-2 Solution

function sendNotification(email) {
    if(email.indexOf("@") === -1){
        return "Invalid Email";
    }

    const [username, domain] = email.split("@");
    const notification = username + " sent you an email from " + domain;
    return notification;
}

console.log(sendNotification("zihad@gmail.com"));
console.log(sendNotification("farhan34@yahoo.com"));
console.log(sendNotification("nadim.naem5@outlook.com"));
console.log(sendNotification("fahim234.hotmail.com"));
console.log(sendNotification("sadia8icloud.com"));