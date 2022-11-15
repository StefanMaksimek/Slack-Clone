export class User {
  userID: any;
  firstName!: any;
  gender!: any;
  lastName!: any;
  birthdate!: any;
  email!: any;
  phone!: any;
  street!: any;
  zipCode!: any;
  city!: any;
  hobby: any;
  employment: any;
  favColor: any;
  profilePic: any;

  constructor(obj?: any) {
    this.firstName = obj ? obj.firstName : 'firstName';
    this.lastName = obj ? obj.lastName : 'lastName';
    this.gender = obj ? obj.gender : 'gender';
    this.birthdate = obj ? obj.birthdate : 'birthdate';
    this.email = obj ? obj.email : 'email';
    this.phone = obj ? obj.phone : 'phone';
    this.street = obj ? obj.street : 'street';
    this.zipCode = obj ? obj.zipCode : 'zipCode';
    this.city = obj ? obj.city : 'city';
    this.userID = obj ? obj.userID : 'userID';
    this.hobby = obj ? obj.hobby : 'hobby';
    this.employment = obj ? obj.employment : 'employment';
    this.favColor = obj ? obj.favColor : 'favColor';
    this.profilePic = obj ? obj.profilePic : 'profilePic';
  }

  toJson() {
    return {
      firstName: this.firstName,
      lastName: this.lastName,
      gender: this.gender,
      birthdate: this.birthdate,
      email: this.email,
      phone: this.phone,
      street: this.street,
      zipCode: this.zipCode,
      city: this.city,
      userID: this.userID,
      hobby: this.hobby,
      employment: this.employment,
      favColor: this.favColor,
      profilePic: this.profilePic,
    };
  }

  createID(length: number) {
    let result = '';
    let characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength)); // adding one random character of characters to result
    }
    return result;
  }
}
