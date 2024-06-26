import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
} from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger/dist";
import { CreateForumDto } from "./dto/create-forum.dto";
import { UpdateForumDto } from "./dto/update-forum.dto";
import { ForumService } from "./forum.service";
@ApiTags("forum")
@Controller("forum")
export class ForumController {
  constructor(private readonly service: ForumService) {}

  @Get()
  async index() {
    return await this.service.findAll();
  }

  @Post()
  async store(@Body() body: CreateForumDto) {
    return await this.service.store(body);
  }

  @Get(":id")
  async show(@Param("id") id: string) {
    return await this.service.findOneOrFail({ where: { id: id } });
  }

  @Patch(":id")
  async update(@Param("id") id: string, @Body() body: UpdateForumDto) {
    return await this.service.update(id, body);
  }

  @Delete(":id")
  @HttpCode(HttpStatus.NO_CONTENT)
  async destroy(@Param("id") id: string) {
    return await this.service.destroy(id);
  }
}
