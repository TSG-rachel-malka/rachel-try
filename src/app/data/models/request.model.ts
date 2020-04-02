export interface Request {
    user_id: string;
    sys_id: string;
    number: string;
    name: string;
    description: string;
    img: string;
    create: string;
    status: {
      value: number;
      name: string;
    };
    task_type: string;
    details: any;
  }