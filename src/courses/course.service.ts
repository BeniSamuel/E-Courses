import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Course } from './entities/course.entity';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourse } from './dto/update-course.dto';

@Injectable()
export class CourseService {
  constructor(
    @InjectRepository(Course) private readonly courseRepository: Repository<Course>,
  ) {}

  // Fetch all courses
  async getCourses(): Promise<Course[]> {
    return this.courseRepository.find();
  }

  // Fetch a single course by id
  async getCourseById(id: number): Promise<Course> {
    return this.courseRepository.findOne({ where: {id} });
  }

  // Create a new course
  async createCourse(createCourseDto: CreateCourseDto): Promise<Course> {
    const course = this.courseRepository.create(createCourseDto);
    return this.courseRepository.save(course);
  }

  // Update an existing course
  async updateCourse(id: number, updateCourseDto: UpdateCourse): Promise<Course> {
    await this.courseRepository.update(id, updateCourseDto);
    return this.courseRepository.findOne({ where: {id} });
  }

  // Delete a course
  async deleteCourse(id: number): Promise<void> {
    await this.courseRepository.delete(id);
  }
}
