import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService {
  public prisma: any;

  constructor() {
    this.prisma = new PrismaClient();
  }
}
