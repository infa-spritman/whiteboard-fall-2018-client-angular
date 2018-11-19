export class CourseServiceClient {
  COURSE_URL = 'https://java-server-ass-7.herokuapp.com';
  findAllCourses() {
    return fetch(this.COURSE_URL + '/api/course/all')
      .then(response => response.json());
  }
  findCourseById(courseId) {
    return fetch(this.COURSE_URL + '/api/course/' + courseId)
      .then(response => response.json());
  }
}
