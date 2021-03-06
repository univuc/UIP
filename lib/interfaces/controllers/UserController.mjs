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

import resolve from 'iab/lib/di/resolve';
import GetUser from '../../domain/usecases/GetUser';
import AddUser from '../../domain/usecases/AddUser';
import Boom from '@hapi/boom';
import UpdateUser from '../../domain/usecases/UpdateUser';

export default {

    async getUser(request, h) {
        const {id} = request.params;

        const result = await resolve(GetUser).run({id});

        if (result) {
            return h.response(result);
        } else {
            return Boom.notFound();
        }
    },

    async addUser(request, h) {
        const user = request.payload; /* JSON */

        const result = await resolve(AddUser).run({user});

        if (result) {
            return h.response(result).code(201);
        } else {
            return Boom.forbidden();
        }
    },

    async updateUser(request, h) {
        const user = request.payload; /* JSON */

        const result = await resolve(UpdateUser).run({user});

        if (result) {
            return h.response(result).code(201);
        } else {
            return Boom.forbidden();
        }
    },

};
