import Address from './Address'
import {Job} from "./Job";
import {Media} from "./Media";
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
}
