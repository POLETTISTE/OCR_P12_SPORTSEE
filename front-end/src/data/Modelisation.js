// import { USER_MAIN_DATA } from '../data/mocked-data'
// import { USER_ACTIVITY } from '../data/mocked-data'
// import { USER_AVERAGE_SESSIONS } from '../data/mocked-data'
// import { USER_PERFORMANCE } from '../data/mocked-data'

export class Modelisation {
  constructor(data) {
    this.data = data
  }

  //component Bonjour
  formatUserName() {
    const dataFormated = this.data.userInfos.firstName

    return dataFormated
  }

  // composant Energie
  formatDataEnergy(params) {
    for (let element of this.data) {
      if (element.id.toString() === params.id) {
        return {
          calorieCount: element.keyData.calorieCount,
          proteinCount: element.keyData.proteinCount,
          carbohydrateCount: element.keyData.carbohydrateCount,
          lipidCount: element.keyData.lipidCount,
        }
      }
    }
  }

  //graphique
  formatDataActivity() {
    const dataFormated = this.data?.sessions.map((item, index) => {
      return {
        name: index + 1,
        uv: item.kilogram,
        pv: item.calories,
      }
    })

    return dataFormated
  }
  // composant Diagramme courbe
  formatDataSessions() {
    const dataFormated = this.data?.sessions.map((item) => {
      // convertit les nombres en jours
      switch (item.day) {
        case 1:
          item.day = 'L'
          break

        case 2:
          item.day = 'M'
          break
        case 3:
          item.day = 'M'
          break
        case 4:
          item.day = 'J'
          break
        case 5:
          item.day = 'V'
          break
        case 6:
          item.day = 'S'
          break
        case 7:
          item.day = 'D'
          break
        default:
        // console.log(`erreur de jour ${el.day}.`)
      }
      return {
        name: item.day,
        // uv: 0,
        pv: item.sessionLength,
        // amt: 0,
      }
    })

    return dataFormated
  }

  // composant diagramme toile
  formatDataRadarChart() {
    const dataFormated = this.data?.data.map((item) => {
      return {
        subject: this.data?.kind[item.kind],
        A: item.value,
      }
    })
    return dataFormated
  }

  // composant Diagramme Score
  formatDataScore() {
    const dataFormated = this.data.todayScore * 100
    return dataFormated
  }
}
