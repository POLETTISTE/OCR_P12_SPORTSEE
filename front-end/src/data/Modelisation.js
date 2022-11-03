import { USER_MAIN_DATA } from '../data/mocked-data'
import { USER_ACTIVITY } from '../data/mocked-data'
import { USER_AVERAGE_SESSIONS } from '../data/mocked-data'
import { USER_PERFORMANCE } from '../data/mocked-data'

export class Modelisation {
  constructor(data) {
    this.data = data
  }

  formatUserName() {
    return {
      //username
    }
  }

  formatDataScore() {
    return {
      todayScore: this.data.map((el) => el.todayScore),
    }
  }

  formatDataSessions() {
    return {
      sessions: this.data.map((el) => el.sessions),
    }
  }

  formatDataActivity() {
    return {
      day: this.data.map((el) => el.sessions.day),
      kilograms: this.data.map((el) => el.sessions.kilogram),
      calories: this.data.map((el) => el.sessions.calories),
    }
  }

  formatDataPerformances() {
    return {
      kind: this.data.map((el) => el.kind),
      data: this.data.map((el) => el.data),
    }
  }
}

//formatDataScore()
// console.log(USER_MAIN_DATA)
const dataApiScore = USER_MAIN_DATA
// console.log(dataApiScore)
const maClasseScore = new Modelisation(dataApiScore)
// console.log(maClasseScore)
const maClasseformatDataScore = maClasseScore.formatDataScore()
console.log(maClasseformatDataScore)

//formatDataSessions()
// console.log(USER_AVERAGE_SESSIONS)
const dataApiSessions = USER_AVERAGE_SESSIONS
// console.log(dataApiSessions)
const maClasseSessions = new Modelisation(dataApiSessions)
// console.log(maClasseSessions)
const maClasseformatDataSessions = maClasseSessions.formatDataSessions()
console.log(maClasseformatDataSessions)

//formatDataActivity()
// console.log(USER_ACTIVITY)
const dataApiActivity = USER_ACTIVITY
// console.log(dataApiActivity)
const maClasseActivity = new Modelisation(dataApiActivity)
// console.log(maClasseActivity)
const maClasseformatDataActivity = maClasseActivity.formatDataActivity()
console.log(maClasseformatDataActivity)

//formatDataperformances()
// console.log(USER_PERFORMANCE)
const dataApiPerformances = USER_PERFORMANCE
// console.log(dataApiPerformances)
const maClassePerformances = new Modelisation(dataApiPerformances)
// console.log(maClassePerformances)
const maClasseformatDataPerformances =
  maClassePerformances.formatDataPerformances()
console.log(maClasseformatDataPerformances)
