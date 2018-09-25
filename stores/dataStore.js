import { decorate, observable, action, computed } from "mobx";
import axios from "axios";
import { AsyncStorage } from "react-native";
// Utils

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000"
});

class dataStore {
  constructor() {
    this.question = [];
    this.id = 1;
  }

  getQuestion() {
    instance
      .get(`/question/${this.id}`)
      .then(response => response.data)
      .then(question => {
        this.question = question;
        // console.log(this.question);
      })
      .catch(error => console.log(error));
  }
}
decorate(dataStore, {
  question: observable
});

export default new dataStore();
