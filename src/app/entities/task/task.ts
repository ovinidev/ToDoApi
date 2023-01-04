export interface TaskProps {
  id?: string;
  name?: string;
  createdAt?: Date;
  updatedAt?: Date;
  status?: string;
  userId?: string;
}

export class Task {
  private props: TaskProps;

  constructor(props: TaskProps) {
    this.props = props;
  }

  public get id() {
    return this.props.id;
  }

  public get name() {
    return this.props.name;
  }

  public set name(name: string) {
    this.props.name = name;
  }

  public get status() {
    return this.props.status;
  }

  public set status(status: string) {
    this.props.status = status;
  }

  public get createdAt() {
    return this.props.createdAt;
  }

  public get updatedAt() {
    return this.props.createdAt;
  }

  public get userId() {
    return this.props.userId;
  }
}
