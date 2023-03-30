

class UserService{
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async addNewUser(userModel){
         return this.userRepository
            .save(userModel)

    }

    async changeUsername(username, newUsername){
        await this.userRepository
            .createQueryBuilder()
            .update(require('../Entities/User.js'))
            .set([
                {username: newUsername}
            ])
            .where("username = :username", {username: username})
            .execute();
    }

    async checkExistence(username){
        const user = await this.userRepository.findOneBy({username: username});
        if (user == null){
            return false;
        }
        return true;
    }

    async fetchPassword(username){
        const user = await this.userRepository.findOneBy({username: username});
        return user.password;
    }

    async fetchAllData(username){
        const user = await this.userRepository.findOneBy({username: username});
        return user;
    }
}

module.exports = {UserService}