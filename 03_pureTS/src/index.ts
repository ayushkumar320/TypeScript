class User {
  email: string;
  name: string;
  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
  }
}

const ayush = new User("ayush@example.com", "Ayush");
