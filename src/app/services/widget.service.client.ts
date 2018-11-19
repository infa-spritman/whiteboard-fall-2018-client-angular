export class WidgetServiceClient {
  private Widget_URL = 'http://localhost:8080/';
  findWidgetsForTopic(topicId) {
    return fetch('http://localhost:8080/api/topic/' + topicId + '/widget')
      .then(response => response.json());
  }

  findWidgetById(WidgetId) {
    return fetch(this.Widget_URL + 'api/widget/' + WidgetId)
      .then(response => response.json());
  }

  findAllWidgets() {
    return fetch(this.Widget_URL + '/api/widget/all')
      .then(response => response.json());

  }
}
