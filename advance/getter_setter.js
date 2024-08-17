class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toLowerCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}321`
    }

    set password(value){
        this._password = value
    }
}

const info = new User("anurag5055ver@gmail.com", "Anurag@5055")
console.log(`Email : ${info.email}   Password : ${info.password}`);

console.log(User.email);
