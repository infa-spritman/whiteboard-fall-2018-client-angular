import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable()
export class ModuleServiceClient {
  constructor(private httpClient: HttpClient) {
  }
  MODULE_URL = 'https://java-server-ass-7.herokuapp.com/';
  findModulesForCourse(courseId) {
    return fetch(this.MODULE_URL + 'api/course/' + courseId + '/module')
      .then(response => response.json());
  }

  findModuleById(moduleId) {
    return fetch(this.MODULE_URL + 'api/module/' + moduleId)
      .then(response => response.json());
  }

  findAllModules() {
    return fetch(this.MODULE_URL + '/api/module/all')
      .then(response => response.json());

  }
}
