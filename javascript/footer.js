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
                <a href="${user.gitHub}"><img class="icon-profiles" src="../assets/img/img-footer/icon/github-sign.png"></a>
            </a>
            <a href="#">
                <a href="${user.linkedin}"><img class="icon-profiles" src="../assets/img/img-footer/icon/linkedin.png"></a>
            </a>
        </div>		
        `;

        containerFooter.append(div); 
    });

    
    
}

loadusers()
        







