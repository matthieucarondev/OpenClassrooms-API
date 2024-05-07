class PerformanceModel {
    constructor(id) {
      this.id = id;
      this.performances = [];
    }
  
    async createPerformanceData(data) {
      // Accéder aux sessions
      const performances = data.data;
      // console.log(data)
      // Parcourir chaque objet session et stocker les valeurs dans le tableau performances
      performances.forEach(performance => {
        const performanceData = {
          value: performance.value,
          kind: performance.kind
        };
        this.performances.push(performanceData); // Ajouter les données de la session au tableau
      });
  
      // Correspondance des valeurs de kind
      const kindMapping = {
        1: "Cardio",
        2: "Énergie",
        3: "Endurance",
        4: "Force",
        5: "Vitesse",
        6: "Intensité"
      };
  
      const replaceKindNbrWithValue = (arrayOfPerf, arrayofKindPerf) => {
        return arrayOfPerf.map(item => ({
          ...item,
          //Soustraire 1 car les indices commencent à 0
          kind: arrayofKindPerf[item.kind - 1]  
        }));
      };
      const performanceDataWithKind = replaceKindNbrWithValue(this.performances, Object.values(kindMapping));
      // console.log(performanceDataWithKind);
      this.performances = performanceDataWithKind;
  
      return data;
    }
  
    initialize(data) {
      this.createPerformanceData(data);
    }
  }
  
  export default PerformanceModel;