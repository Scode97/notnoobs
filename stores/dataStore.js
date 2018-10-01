import { decorate, observable, action, computed, observer } from "mobx";
import axios from "axios";
import { AsyncStorage } from "react-native";
// Utils

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000"
});

class dataStore {
  constructor() {
    this.question = [];
    // this.id = 1;
    this.answer = [];
    this.places = [];
    this.events = [];
    this.getQuestion();
    // this.getAnswer();
    this.getPlace();
    this.getEvent();
    this.getAllEvents();
    this.getAllPlaces();
  }

  getQuestion(id) {
    instance
      .get(`/question/${id}`)
      .then(response => response.data)
      .then(question => {
        console.log("hello");
        this.question = question;
        this.answer = [];
        this.question.answers.map(answer => this.getAnswer(answer));
      })
      .catch(error => {
        console.log(error);
        console.log("getting question");
      });
  }

  getAnswer(id) {
    instance
      .get(`/answer/${id}`)
      .then(response => response.data)
      .then(answer => {
        this.answer.push(answer);
      })
      .catch(error => {
        console.log(error);
        console.log("getting answer");
      });
  }

  getPlace(id) {
    instance
      .get(`/filterPlaces/${id}`)
      .then(response => response.data)
      .then(places => {
        this.places = places;
      })
      .catch(error => {
        console.log(error);
        console.log("getting places");
      });
  }

  getEvent(id) {
    instance
      .get(`/filterEvents/${id}`)
      .then(response => response.data)
      .then(events => {
        this.events = events;
      })
      .catch(error => {
        console.log(error);
        console.log("getting events");
      });
  }

  getAllPlaces() {
    instance
      .get("/places/")
      .then(response => response.data)
      .then(places => {
        this.places = places;
      })
      .catch(error => {
        console.log(error);
        console.log("getting places");
      });
  }

  getAllEvents() {
    instance
      .get("/event/")
      .then(response => response.data)
      .then(events => {
        this.events = events;
      })
      .catch(error => {
        console.log(error);
        console.log("getting events");
      });
  }
}
decorate(dataStore, {
  question: observable,
  answer: observable,
  places: observable,
  getQuestion: action
});

export default new dataStore();
