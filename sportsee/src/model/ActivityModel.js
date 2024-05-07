class DailyActivity {
    constructor(id) {
      this.id = id;
      this.sessions = [];
    }
  
    async fetchDailyData(data) {
      // Accéder aux sessions
      const sessions = data.sessions;
      // Parcourir chaque objet session et stocker les valeurs dans le tableau sessions
      sessions.forEach(session => {
        const sessionData = {
          day: session.day.split('-')[2].split('')[1], // Stocker uniquement le jour
          calories: session.calories,
          kilograms: session.kilogram
        };
        this.sessions.push(sessionData); // Ajouter les données de la session au tableau
      });
      return data;
    }
  
    async initialize(data) {
      await this.fetchDailyData(data);
    }
  }
  
  export default DailyActivity;