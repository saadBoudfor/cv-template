import {environment} from "../../environments/environment";
/**
 * Created by sboudfor on 13/12/2018.
 */
export class Widget {
  public name: string;
  public isEnabled: boolean;
  public image: string;
  public anchor: string;
  public title: string;
  public icon: string;
  private static _widgets: Widget[] = [
    {
      name: 'experiences',
      image: 'experience.jpeg',
      isEnabled: true,
      anchor: 'experiences',
      title: 'Mes experiences',
      icon: 'business_center'
    },
    {
      name: 'header',
      image: 'b4-logo.png',
      isEnabled: true,
      anchor: null,
      title: null,
      icon: ''
    },
    {
      name: 'skills',
      image: 'skills.jpeg',
      isEnabled: true,
      anchor: 'skills',
      title: 'Mes compétences',
      icon: 'style'
    },
    {
      name: 'footer',
      image: 'linkedin-sign.svg',
      isEnabled: true,
      anchor: null,
      title: null,
      icon: ''
    },
    {
      name: 'formations',
      image: 'formations.jpeg',
      isEnabled: true,
      anchor: 'formations',
      title: 'Mes formations',
      icon: 'business'
    },
    {
      name: 'contacts',
      image: null,
      isEnabled: true,
      anchor: 'contacts',
      title: 'Me contacter',
      icon: 'phone_android'
    },
    {
      name: 'description',
      image: null,
      isEnabled: true,
      anchor: 'description',
      title: 'A propos de moi',
      icon: 'person'
    }
  ];

  private static getDefault(): Widget {
    return {name: '', image: '', isEnabled: false, anchor: null, title: null, icon: null} as Widget
  }

  static get(name: string): Widget {
    const found: Widget= Widget._widgets.filter((widget) => widget.name === name)[0];
    let widget: Widget = new Widget();
    if(found) {
      widget.isEnabled = found.isEnabled;
      widget.name =  found.name;
      widget.image = environment.imagesServerURL + '/photos/images/' + found.image;
    }else {
      widget = this.getDefault()
    }
    return widget
  }

  static get AllWithAnchor(): Widget[] {
    return this._widgets.filter(widget => widget.anchor);
  }

}
