import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Photo {

  constructor(body: any){
    if(body){
      this.id = body.id;
      this.name = body.name;
      this.description = body.description;
      this.filename = body.filename;
      this.ispublished = body.ispublished;
      this.views = body.views 
    }
  }

  @PrimaryGeneratedColumn({
    type: "int",
  })
  id: number;

  @Column({
    type: "varchar",
  })
  name: string;

  @Column({
    type: "varchar",
  })
  description: string;

  @Column({
    type: "varchar",
  })
  filename: string;

  @Column({
    type: "varchar",
  })
  views: string;

  @Column({
    type: "varchar",
  })
  ispublished: string;
}
