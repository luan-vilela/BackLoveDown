import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule, TypeOrmModuleOptions } from "@nestjs/typeorm";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
// import { PermissaoModule } from './permissao/permissao.module';
import { AuthModule } from "./auth/auth.module";
import { FotoModule } from "./foto/foto.module";
import { PaiModule } from "./pai/pai.module";
import { ForumModule } from "./forum/forum.module";
import { ConteudoModule } from "./conteudo/conteudo.module";
import { ComentariosModule } from './comentarios/comentarios.module';
@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: process.env.DB_TYPE,
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [__dirname + "/**/*.entity{.ts,.js}"],
      synchronize: process.env.DB_SYNCHRONIZE === "true",
    } as TypeOrmModuleOptions),
    AuthModule,
    FotoModule,
    PaiModule,
    ForumModule,
    ConteudoModule,
    ComentariosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
