export class TopicServiceClient {
  private Topic_URL = 'https://java-server-ass-7.herokuapp.com/';
  findTopicsForLesson(lessonId) {
    return fetch(this.Topic_URL + 'api/lesson/' + lessonId + '/topic')
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
