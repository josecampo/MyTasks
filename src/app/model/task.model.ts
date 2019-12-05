export class Task {
   public id: number;
   public type: string;
   public name: string;
   public description: string;

   constructor(
      id: number,
      type: string,
      name: string,
      description: string
   ) {
      this.id = id;
      this.type = type;
      this.name = name;
      this.description = description;
   }
}
