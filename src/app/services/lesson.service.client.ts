export class LessonServiceClient {
  private Lesson_URL =  'https://java-server-ass-7.herokuapp.com/';
  findLessonsForModule(moduleId) {
    return fetch(this.Lesson_URL + 'api/module/' + moduleId + '/lesson')
      .then(response => response.json());
  }

  findLessonById(LessonId) {
    return fetch(this.Lesson_URL + 'api/lesson/' + LessonId)
      .then(response => response.json());
  }

  findAllLessons() {
    return fetch(this.Lesson_URL + '/api/lesson/all')
      .then(response => response.json());

  }
}
