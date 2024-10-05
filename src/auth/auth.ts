import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';

export interface IAuthService {
  validateUser();

  create(createAuthDto: CreateAuthDto);

  findAll();

  findOne(id: number);

  update(id: number, updateAuthDto: UpdateAuthDto);

  remove(id: number);
}
