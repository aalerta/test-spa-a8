export class ApplicationInfo {
  title: string;
  version: string;

  constructor(object) {
    this.title = object.title || 'n.a.';
    this.version = object.version || 'n.a.';
  }
}
