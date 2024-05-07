class UserModel {
    constructor(id) {
      this.id = id;
      this.firstName = '';
      this.lastName = '';
      this.calories = 0;
      this.proteines = 0;
      this.glucides = 0;
      this.lipides = 0;
      this.score = 0;
    }
  
    async createUserData(data) {
        this.firstName = data.userInfos.firstName;
        this.lastName = data.userInfos.lastName;
        this.calories = data.keyData.calorieCount;
        this.proteines = data.keyData.proteinCount;
        this.glucides = data.keyData.carbohydrateCount;
        this.lipides = data.keyData.lipidCount;
        this.score = data.todayScore || data.score;
    }
    async initialize(data) {
      await this.createUserData(data);
    }
  }
  
  export default UserModel;