import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('information')
export class Information {
    @PrimaryGeneratedColumn("uuid")
    id: string;
    @Column({ name: 'profession', nullable: false })
    profession: string
    @Column({ name: 'name', nullable: false })
    name: string;
    @Column({ name: 'description', nullable: false })
    description: string;
    @Column({ name: 'imageUrl', nullable: true })
    imageUrl: string;
    @Column({ name: 'linkedlnUrl', nullable: true })
    linkedlnUrl: string;
    @Column({ name: 'githubUrl', nullable: true })
    githubUrl: string;
    @Column({ name: 'instagramUrl', nullable: true })
    instagramUrl: string;
    @Column({ name: 'facebookUrl', nullable: true })
    facebookUrl: string;
    @Column({ name: 'phone', nullable: true })
    whatsapp: string;
    @Column({ name: 'email', nullable: false })
    email: string;
}