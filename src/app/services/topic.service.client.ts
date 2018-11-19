export class TopicServiceClient {
  private Topic_URL = 'http://localhost:8080/';
  findTopicsForLesson(lessonId) {
    return fetch('http://localhost:8080/api/lesson/' + lessonId + '/topic')
      .then(response => response.json());
  }

  findTopicById(TopicId) {
    return fetch(this.Topic_URL + 'api/topic/' + TopicId)
      .then(response => response.json());
  }

  findAllTopics() {
    return fetch(this.Topic_URL + '/api/topic/all')
      .then(response => response.json());

  }
}
