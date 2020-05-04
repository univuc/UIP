/**
 * This file is part of Univuc/UIP.
 *
 * Copyright (C) 2020 Univuc <potados99@gmail.com>
 *
 * Univuc/UIP is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Univuc/UIP is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import UserRepositoryImpl from '../interfaces/storage/UserRepositoryImpl';
import UserRepository from '../domain/repositories/UserRepository';
import GetUser from '../domain/usecases/GetUser';
import AddUser from '../domain/usecases/AddUser';
import models from '../infrastructure/database/db';
import UpdateUser from '../domain/usecases/UpdateUser';

export default [

    /** Use cases */
    {
        create: async (r) => new GetUser({
            userRepository: await r(UserRepository),
        }),
        as: GetUser,
    },
    {
        create: async (r) => new AddUser({
            userRepository: await r(UserRepository),
        }),
        as: AddUser,
    },
    {
        create: async (r) => new UpdateUser({
            userRepository: await r(UserRepository),
        }),
        as: UpdateUser,
    },

    /** Repositories */
    {
        create: async (r) => new UserRepositoryImpl({
            models: models,
        }),
        as: UserRepository,
    },

];
