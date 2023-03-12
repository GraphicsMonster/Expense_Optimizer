

class UserService{
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async addNewUser(userModel){
        this.userRepository
            .save(userModel)
            .then(function(savedModel){
                console.log("Entered this model: ", savedModel);
            }).catch((e)=>{
                console.log(e);
        })
    }
}

module.exports = {UserService}