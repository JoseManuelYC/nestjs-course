import { Controller, Get } from '@nestjs/common';

@Controller('projects')
export class ProjectsController {
  @Get('/')
  index() {
    return 'Project Page';
  }
}
