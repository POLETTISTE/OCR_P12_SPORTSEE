// import { USER_MAIN_DATA } from '../data/mocked-data'
// import { USER_ACTIVITY } from '../data/mocked-data'
// import { USER_AVERAGE_SESSIONS } from '../data/mocked-data'
// import { USER_PERFORMANCE } from '../data/mocked-data'

export class Modelisation {
  constructor(data) {
    this.data = data
  }

  //component Bonjour
  formatUserName(params) {
    for (let element of this.data) {
      if (element.id.toString() === params.id) {
        return {
          name: element.userInfos.firstName,
        }
      }
    }
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
  // composant Diagramme Score
  formatDataScore(params) {
    for (let element of this.data) {
      if (element.id.toString() === params.id) {
        return {
          name: 'score',
          value: element.todayScore * 100,
        }
      }
    }
  }

  // composant Diagramme courbe
  formatDataSessions(params) {
    const data = []
    for (let element of this.data) {
      if (element.userId.toString() === params.id) {
        element.sessions.map((el) => {
          // convertit les nombres en jours
          switch (el.day) {
            case 1:
              el.day = 'L'
              break

            case 2:
              el.day = 'M'
              break
            case 3:
              el.day = 'M'
              break
            case 4:
              el.day = 'J'
              break
            case 5:
              el.day = 'V'
              break
            case 6:
              el.day = 'S'
              break
            case 7:
              el.day = 'D'
              break
            default:
            // console.log(`erreur de jour ${el.day}.`)
          }

          data.push({
            name: el.day,
            // uv: 0,
            pv: el.sessionLength,
            // amt: 0,
          })
          return
        })
        return data
      }
    }
  }

  formatDataActivity(params) {
    const data = []
    const formatDate = (string) => {
      console.log(string)
      let sliced = string.slice(-1)
      // console.log(popped)
      return sliced
    }
    for (let element of this.data) {
      if (element.userId.toString() === params.id) {
        element.sessions.map((el) => {
          data.push({
            name: formatDate(el.day),
            // name: el.day,
            uv: el.kilogram,
            pv: el.calories,
          })
          return
        })
        return data
      }
    }
  }

  // composant diagramme toile
  formatDataRadarChart(params) {
    const data = []

    for (let element of this.data) {
      // console.log(element)
      if (element.userId.toString() === params.id) {
        element.data.map((el) => {
          data.push({
            subject: el.kind,
            A: el.value,
          })
          return (el.kind = element.kind[el.kind])
        })

        // console.log(data)
        return data
      }
    }
  }
}
