
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Image extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({nullable:false})
  imagepath: string;

  @Column({nullable:false})
  result: string;
}