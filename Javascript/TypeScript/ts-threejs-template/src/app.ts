import * as THREE from 'three';
export type AppOptionType = {
  id: string;
};

export default class App {
  options: AppOptionType | undefined;
  constructor(options?: AppOptionType | undefined) {
    this.options = options;
    console.log(this.options);
    console.log(THREE);
  }
}
