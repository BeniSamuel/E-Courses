import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { CourseController } from './course.controller'
import { Course } from './entities/course.entity'
import { CourseService } from './course.service'


@Module({
    imports: [TypeOrmModule.forFeature([Course])],
    providers: [CourseService],
    controllers: [CourseController]
})

export class CourseModule {}