import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CourseService } from './course.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourse } from './dto/update-course.dto';

@Controller('courses')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @Get()
  async getCourses() {
    return await this.courseService.getCourses();
  }

  @Get(':id')
  async getCourse(@Param('id') id: string) {
    const course = await this.courseService.getCourseById(Number(id));
    return course ? course : { message: 'Course not found!' };
  }

  @Post()
  async createCourse(@Body() createCourseDto: CreateCourseDto) {
    if (createCourseDto.name && createCourseDto.description) {
      const course = await this.courseService.createCourse(createCourseDto);
      return { message: 'Course created successfully!', course };
    } else {
      return { message: 'Provide all content!' };
    }
  }

  @Put(':id')
  async updateCourse(@Param('id') id: string, @Body() updateCourseDto: UpdateCourse) {
    const updatedCourse = await this.courseService.updateCourse(Number(id), updateCourseDto);
    return updatedCourse
      ? { message: 'Course updated successfully', course: updatedCourse }
      : { message: 'Course doesn\'t exist!' };
  }

  @Delete(':id')
  async deleteCourse(@Param('id') id: string) {
    await this.courseService.deleteCourse(Number(id));
    return { message: 'Course removed successfully!' };
  }
}
