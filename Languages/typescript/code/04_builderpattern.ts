//builder pattern


export class shop {
    private constructor() {

    }

//return this; // return this line most impotant its give current class object that way its chianing concept
    login(): shop {
        console.log('login done');
        return this; // return this line most impotant its give current   object that way its chianing concept


    }
    Search(): shop {
        console.log('serached product');
        return this;
    }
    addToCart(): shop {
        console.log('add to cart product');
        return this;
    }
    payment(): shop {
        console.log('payment done');
        return this;
    }
    logout(): shop {
        console.log('logout');
        return this;
    }
    static builder(): shop {
        return new shop();
    }


    build(): void {
        console.log('email is sent. shoping done');
    }


}


//usecase 1
shop.builder()
    .login()
    .Search()
    .addToCart()
    .payment()
    .logout()
    .build();


//output
// login done
// serached product
// add to cart product
// payment done
// logout
// email is sent. shoping done
console.log("======================================");


//usecase 2


shop.builder()
    .login()
    .Search()
    .logout()
    .build()
//output
// login done
// serached product
// logout
// email is sent. shoping done
console.log("======================================");
shop.builder()
    .login()
    .logout()
    .build()


//output
// login done
// logout

console.log("==============================================================================");


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
const payload = new UserBuilder()  //if first example we create object by method but here we creted here.
    .setName('Hitesh')
    .setEmail('test@mail.com')
    .setRole('admin')
    .build();




    //output
// name is  Hitesh
// email is  test@mail.com
// role is  admin

