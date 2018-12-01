/**
 * Created by sboudfor on 28/11/2018.
 * Define model for user experiences.
 */
export class Experience {
  job: string;
  company: string;
  period: string;
  img: string;

  constructor(job: string, company: string, period: string, img: string) {
    this.job = job;
    this.company = company;
    this.period = period;
    this.img = img;
  }
}
