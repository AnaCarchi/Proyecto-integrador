export interface User {
    id: number;
    name: string;
    lastname: string;
    email: string;
    phone: string;
    image?: string;
    password: string;
    notificationToken?: string;
    createdAt: Date;
    updatedAt: Date;
    roles: Role[];
  }
  
  export interface Role {
    id: number;
    name: string;
  }
  