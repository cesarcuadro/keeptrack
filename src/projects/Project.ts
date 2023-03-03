//this is how we create a new class and export it
export class Project {
  //the data that will be paired with these values can only be the specified types
    id: number | undefined;
    name: string = '';
    description: string = '';
    imageUrl: string = '';
    contractTypeId: number | undefined;
    contractSignedOn: Date = new Date();
    budget: number = 0;
    isActive: boolean = false;
    //getter method called isNew
      //will return if the id property is defined or not
      //if it is undefined, then it will be considered a new object
    get isNew(): boolean {
      return this.id === undefined;
    }
  
    constructor(initializer?: any) {
      //this checks if the initializer objects are defined
      if (!initializer) return;
      if (initializer.id) this.id = initializer.id;
      if (initializer.name) this.name = initializer.name;
      if (initializer.description) this.description = initializer.description;
      if (initializer.imageUrl) this.imageUrl = initializer.imageUrl;
      if (initializer.contractTypeId)
        this.contractTypeId = initializer.contractTypeId;
      if (initializer.contractSignedOn)
        this.contractSignedOn = new Date(initializer.contractSignedOn);
      if (initializer.budget) this.budget = initializer.budget;
      if (initializer.isActive) this.isActive = initializer.isActive;
    }
  }