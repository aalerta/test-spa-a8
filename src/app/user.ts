export class User {
  name: string;
  surname: string;
  id: string;
  email: string;

  constructor(object) {
    this.email = object.email || 'n.a.';
    this.id = object.id || 'n.a.';
    this.name = object.name || 'n.a.'
    this.surname = object.surname || 'n.a.';
  }

}
