function sendMail(){
    var params ={
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
        phone: document.getElementById("phone").value,
        text:document.getElementById("text").value
    };
    const serviceID = "service_3o50hyw";
const templateID = "template_vz9savh";

emailjs.send(serviceID,templateID,params)
.then(
    res =>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("text").value ="";
        console.log(res);
        alert("Your message sent successfully");
    }
)
.catch((err) => console.log(err));
}