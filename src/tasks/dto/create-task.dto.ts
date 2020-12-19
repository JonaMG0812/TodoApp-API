enum Status {
  complete = 'complete',
  inProgress = 'inProgress',
  toDo = 'toDo',
  timeOut = 'timeOut',
}

export class CreateTaskDto {
  readonly userId: number;
  readonly title: string;
  readonly description: string;
  readonly dueDate: Date;
  readonly status: Status;
}
