const logger = (params) => {
  console.log(params)
}

class User {
  constructor(name) {
    this.name = name;
  }

  sayHell() {
    console.log(`${this.name} say hello to u`)
  }
}

module.exports = {logger, User}
