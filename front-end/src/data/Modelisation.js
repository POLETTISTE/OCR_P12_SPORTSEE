import { USER_ACTIVITY } from '../data/mocked-data'

class Modelisation {
  constructor(data) {
    this.data = data
  }

  formatDataActivity() {
    return {
      sessions: this.data.sessions,
    }
  }
}
console.log(USER_ACTIVITY)
const dataApi = USER_ACTIVITY
console.log(dataApi)
const maClasse = new Modelisation(dataApi)
console.log(maClasse)
const maClasseformatDataActivity = maClasse.formatDataActivity()
console.log(maClasseformatDataActivity)
