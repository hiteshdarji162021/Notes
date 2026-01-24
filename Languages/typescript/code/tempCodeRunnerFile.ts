class UserBuilder {
    private user: any = {};


    setName(name: string) :UserBuilder {
        this.user.name = name;
        console.log('name is ', name);
        return this;
    }


    setEmail(email: string):UserBuilder {
        this.user.email = email;
        console.log('email is ', email);
        return this;
    }


    setRole(role: string):UserBuilder {
        this.user.role = role;
        console.log('role is ', role);
        return this;
    }


    build() {
       
        return this.user;
    }
}


// usage
const payload = new UserBuilder()
    .setName('Hitesh')
    .setEmail('test@mail.com')
    .setRole('admin')
    .build();
