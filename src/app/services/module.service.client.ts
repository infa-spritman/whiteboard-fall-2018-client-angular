import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable()
export class ModuleServiceClient {
  constructor(private httpClient: HttpClient) {
  }
  MODULE_URL = 'http://localhost:8080/api/course/COURSE_ID/module';
  findModulesForCourse(courseId) {
    // return fetch(this.MODULE_URL.replace('COURSE_ID', courseId))
    //   .then(response => response.json());
    return this.httpClient.get(this.MODULE_URL.replace('COURSE_ID', courseId));
  }
}
