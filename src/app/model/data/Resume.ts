import {Skill} from "./Skill";
import {Experience} from "./Experience";
import {Formation} from "./Formation";
import {Service} from "./Service";
import {Certification} from "./Certification";
import {UserDetail} from "./UserDetail";
/**
 * Created by sboudfor on 12/12/2018.
 * @description: Data model for user resume.
 * @author: Saâd Boudfor
 */
export class Resume {
  services: Service[];
  skills: Skill[];
  experience: Experience[];
  formation: Formation[];
  certification: Certification[];
  userDetail: UserDetail;
}
