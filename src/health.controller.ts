// src/health.controller.ts
import { Controller, Get } from '@nestjs/common';

@Controller('health')
export class HealthController {
  @Get()
  getStatus() {
    return { status: 'ok' };
  }
}
