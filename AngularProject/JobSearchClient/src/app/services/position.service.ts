import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { User } from '../models/User'
import { Observable } from 'rxjs';
import { Job } from '../models/Job';
import { Field } from '../models/Field';
@Injectable({
    providedIn: 'root'
})
export class positionService {
    constructor(private http: HttpClient) {
        this.getJobsFromServer();
    }
    jobList: Job[] = [];

    getJobsFromServer() {
        return this.http.get(`https://localhost:7120/JobSearchServer/GetAllJobs`).subscribe((res: any) => {
            res.forEach((e: any) => {
                this.jobList.push(e)
            });
        })
    }

    filterJobsByField(field:Field){
        return this.jobList.filter(job=>job.jobField==field);
    }
}
