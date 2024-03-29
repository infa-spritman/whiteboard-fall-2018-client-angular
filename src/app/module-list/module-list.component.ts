import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ModuleServiceClient} from "../services/module.service.client";

@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.css']
})
export class ModuleListComponent implements OnInit {

  constructor(private service: ModuleServiceClient,
              private route: ActivatedRoute) {
    this.route.params.subscribe(
      params => this.setParams(params));
  }

  courseId;
  moduleId;
  modules: Object = [];

  setParams(params) {
    this.courseId = params['courseId'];
    this.moduleId = params['moduleId'];
    return this.loadModules(this.courseId);
  }

  loadModules(courseId) {
    this.courseId = courseId;
    const self = this;
    // @ts-ignore
    this.service.findModulesForCourse(courseId).then( modules => this.modules = modules);
    // console.log("Self" + self.modules);

  }

  ngOnInit() {
  }

}
