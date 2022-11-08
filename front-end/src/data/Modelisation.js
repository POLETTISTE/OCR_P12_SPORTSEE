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

  // composant DiagrammeScore
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
        })
        return data
      }
    }
  }

  formatDataActivity() {
    return {
      //filter ?
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      // amt: 2400,

      day: this.data.map((el) => el.sessions.day),
      kilograms: this.data.map((el) => el.sessions.kilogram),
      calories: this.data.map((el) => el.sessions.calories),
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

  formatDataPerformances() {
    return {
      kind: this.data.map((el) => el.kind),
      data: this.data.map((el) => el.data),
    }
  }
}

// //formatDataScore()
// // console.log(USER_MAIN_DATA)
// const dataApiScore = USER_MAIN_DATA
// // console.log(dataApiScore)
// const maClasseScore = new Modelisation(dataApiScore)
// // console.log(maClasseScore)
// const maClasseformatDataScore = maClasseScore.formatDataScore()
// console.log(maClasseformatDataScore)

// //formatDataSessions()
// // console.log(USER_AVERAGE_SESSIONS)
// const dataApiSessions = USER_AVERAGE_SESSIONS
// // console.log(dataApiSessions)
// const maClasseSessions = new Modelisation(dataApiSessions)
// // console.log(maClasseSessions)
// const maClasseformatDataSessions = maClasseSessions.formatDataSessions()
// console.log(maClasseformatDataSessions)

// //formatDataActivity()
// // console.log(USER_ACTIVITY)
// const dataApiActivity = USER_ACTIVITY
// // console.log(dataApiActivity)
// const maClasseActivity = new Modelisation(dataApiActivity)
// // console.log(maClasseActivity)
// const maClasseformatDataActivity = maClasseActivity.formatDataActivity()
// console.log(maClasseformatDataActivity)

// //formatDataperformances()
// // console.log(USER_PERFORMANCE)
// const dataApiPerformances = USER_PERFORMANCE
// // console.log(dataApiPerformances)
// const maClassePerformances = new Modelisation(dataApiPerformances)
// // console.log(maClassePerformances)
// const maClasseformatDataPerformances =
//   maClassePerformances.formatDataPerformances()
// console.log(maClasseformatDataPerformances)
