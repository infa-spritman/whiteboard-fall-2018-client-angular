export class WidgetServiceClient {
  private Widget_URL = 'https://java-server-ass-7.herokuapp.com/';
  findWidgetsForTopic(topicId) {
    return fetch(this.Widget_URL + 'api/topic/' + topicId + '/widget')
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
