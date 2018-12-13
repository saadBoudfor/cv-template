import {environment} from "../../environments/environment";
/**
 * Created by sboudfor on 13/12/2018.
 */
export class Widget {
  public name: string;
  public isEnabled: boolean;
  public image: string;
  private static _widgets: Widget[] = [
    {
      name: 'experiences',
      image: 'experience.jpeg',
      isEnabled: true
    },
    {
      name: 'header',
      image: 'b4-logo.png',
      isEnabled: true
    },
    {
      name: 'skills',
      image: 'skills.jpeg',
      isEnabled: true
    },
    {
      name: 'footer',
      image: 'linkedin-sign.svg',
      isEnabled: true
    },
    {
      name: 'formations',
      image: 'formations.jpeg',
      isEnabled: true
    }
  ];

  static getDefault(): Widget {
    return {name: '', image: '', isEnabled: false}
  }

  static get(name: string): Widget {
    const found: Widget= Widget._widgets.filter((widget) => widget.name === name)[0];
    let widget: Widget = new Widget();
    if(found) {
      widget.isEnabled = found.isEnabled;
      widget.name =  found.name;
      widget.image = environment.imagesServerURL + '/photos/images/' + found.image;
    }else {
      widget = Widget.getDefault()
    }
    return widget
  }

}
