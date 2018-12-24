import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Resume} from "../model/data/Resume";
import {Observable, BehaviorSubject} from "rxjs";
import {NGXLogger} from "ngx-logger";

@Injectable({
  providedIn: 'root'
})
export class CvRouterService {
  public $locations: any = {resume: '/data/cv-v1.json', experience:  '/experiences/1'};
  public $showMenu = new BehaviorSubject<boolean>(null);
  private $currentLocation = new BehaviorSubject<string>(this.$locations.resume);
  private $resumeData = new BehaviorSubject<Resume>(null);

  constructor(private http: HttpClient, private logger: NGXLogger) {
  }

  public fetchData(location: string): Observable<any> {
    return this.http.get(environment.baseURL + location);
  }

  public updateLocation(location: string): void {
    this.logger.debug('[Router Service] update location to: ' + location);
    this.$currentLocation.next(location);
  }

  public updateData(location: string, data: any): void {
    this.logger.debug('[Router Service] update data for location: ' + location);
    switch (location) {
      case this.$locations.resume:
        this.$resumeData.next(data as Resume);
        break;
      default:
        this.logger.error('[Router Service] Error: unknown location, are you sure that location ( ' + location + ' ) exist ?');
    }
  }

  get Resume(): BehaviorSubject<Resume> {
    return this.$resumeData;
  }

  get Currentlocation(): BehaviorSubject<string> {
    return this.$currentLocation;
  }
}
