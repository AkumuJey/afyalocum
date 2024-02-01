
export interface Job {
    title: string;
    requirements: string;
    description: string;
    location: string;
    rate: null | number;
    start: null | Date;
    stop: null | Date;
    completed: boolean;
  }
  export const submitToFirebase = (job: Job) => {
    console.log(job)
}