import { Module } from '@nestjs/common';
import { CourseController } from './courses/course.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CourseService } from './courses/course.service';
import { Course } from './courses/entities/course.entity'; // Ensure you import the Course entity

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'nest_courses',
      entities: [Course], // Add your Course entity here
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Course]), // Add the Course entity to make the repository available
  ],
  controllers: [CourseController],
  providers: [CourseService], // Make sure the CourseService is provided
})
export class AppModule {}
