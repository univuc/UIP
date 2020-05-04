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

import UserController from '../../../interfaces/controllers/UserController';
import UserModel from '../models/UserModel';
import BoomModel from '../models/BoomModel';
import IdModel from '../models/IdModel';

const getUser = {
    method: 'GET',
    path: '/users/{id}',
    handler: UserController.getUser,

    options: {
        validate: {
            params: IdModel,
        },
        response: {
            status: {
                200: UserModel,
                400: BoomModel,
                404: BoomModel,
                500: BoomModel,
            },
        },
    },
};

const addUser = {
    method: 'POST',
    path: '/add-user',
    handler: UserController.addUser,

    options: {
        validate: {
            payload: UserModel,
        },
        response: {
            status: {
                201: UserModel,
                400: BoomModel,
                403: BoomModel,
                500: BoomModel,
            },
        },
    },
};

const updateUser = {
    method: 'POST',
    path: '/update-user',
    handler: UserController.updateUser,

    options: {
        validate: {
            payload: UserModel,
        },
        response: {
            status: {
                201: UserModel,
                400: BoomModel,
                403: BoomModel,
                500: BoomModel,
            },
        },
    },
};

export default {
    name: 'user',
    register: async (server) => {
        server.route([getUser, addUser, updateUser]);
    },
};
