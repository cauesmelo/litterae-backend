import { container } from 'tsyringe';

import './providers';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

import IEmailsRepository from '@modules/emails/repositories/IEmailsRepository';
import EmailsRepository from '@modules/emails/infra/typeorm/repositories/EmailsRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<IEmailsRepository>(
  'EmailsRepository',
  EmailsRepository,
);
