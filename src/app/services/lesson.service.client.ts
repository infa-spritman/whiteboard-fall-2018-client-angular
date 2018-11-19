export class LessonServiceClient {
  private Lesson_URL =  'http://localhost:8080/';
  findLessonsForModule(moduleId) {
    return fetch('http://localhost:8080/api/module/' + moduleId + '/lesson')
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
