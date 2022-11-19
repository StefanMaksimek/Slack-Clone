export class User {
  uid!: any;
  displayName!: any;
  email!: any;
  profilePic!: any;
  channels!: any[];
  directMessages!: any[];

  constructor(obj?: any) {
    this.displayName = obj ? obj.displayName : 'displayName';
    this.email = obj ? obj.email : 'email';
    this.uid = obj ? obj.uid : 'uid';
    this.profilePic = obj.profilePic ? obj.profilePic : 'profilePic';
    this.channels = obj ? obj.channels : 'channels';
    this.directMessages = obj ? obj.directMessages : 'directMessages';
  }

  toJson() {
    return {
      displayName: this.displayName,
      email: this.email,
      uid: this.uid,
      profilePic: this.profilePic,
      channels: this.channels,
      directMessages: this.directMessages,
    };
  }
}
