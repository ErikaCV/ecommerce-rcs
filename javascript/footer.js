import { Users } from "./dataBase.js";

const containerFooter = document.getElementById ("container-footer")

function loadusers() {  
    containerFooter.innerHTML = "";

    Users.forEach( user =>{

        const div = document.createElement("div"); 
        div.classList.add("cont-items");
        div.innerHTML= `
        <div>
            <p>${user.name}</p>
            <a href="#">
                <a href="${user.gitHub}"><i class="bi bi-github"></i></a>
            </a>
            <a href="#">
                <a href="${user.linkedin}"><i class="bi bi-linkedin"></i></a>
            </a>
        </div>		
        `;

        containerFooter.append(div); 
    });

    
    
}

loadusers()
        







