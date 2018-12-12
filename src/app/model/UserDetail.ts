import {Job} from "./Job";
import {Media} from "./Media";
import {Address} from "./Address";
/**
 * Created by sboudfor on 12/12/2018.
 */
export class UserDetail {
  firstName: string;
  lastName: string;
  phone: string;
  socialMedia: Media[];
  address: Address;
  job: Job;
  profile: string;
  constructor() {
    this.firstName = '';
    this.phone = '';
    this.lastName = '';
    this.socialMedia = [];
    this.address = new Address();
    this.job = new Job();
    this.profile = '';
  }
}
