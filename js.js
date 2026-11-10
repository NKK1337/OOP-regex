let userConfig = {
    role: true,
    loggedIn: true
};

class User {
    constructor(name, email, avatar) {
        this.name = name;
        this.email = email;
        this.avatar = avatar;
        this.role = userConfig.role;
        this.loggedIn = userConfig.loggedIn;
    }

    getRole() {
        if (this.role === true) {
            return "ადმინი";
        } else {
            return "მომხმარებელი";
        }
    }
    checkLogin() {
        return this.loggedIn;
    }
}

class Navbar {
    constructor(bgcolor, position, output) {
        this.bgcolor = bgcolor;
        this.position = position;   
        this.output = output;      
    }

    GetNavbar() {
        let justify = "flex-start";

        if (this.position === "center") {
            justify = "center";
        } else if (this.position === "right") {
            justify = "flex-end";
        }

        let nav = `
            <nav class="navbar" style="background-color: ${this.bgcolor}; justify-content: ${justify};">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        `;

        document.getElementById(this.output).innerHTML = nav;
        return nav;
    }
}


let user = new User(
    "Giorgi Beridze",
    "giorgi@gmail.com",
    "https://i.pravatar.cc/150?img=12"
);


let userDiv = document.getElementById("user");

let circleColor = "red";
if (user.checkLogin() === true) {
    circleColor = "green";
}

userDiv.innerHTML = `
    <div class="user-card">
        <div class="avatar-box">
            <span class="status-circle ${circleColor}"></span>
            <img src="${user.avatar}" alt="avatar">
        </div>
        <h2>${user.name}</h2>
        <p>${user.email}</p>
        <p class="role">${user.getRole()}</p>
    </div>
`;


let navbar = new Navbar("#2c3e50", "center", "navbar");
navbar.GetNavbar();