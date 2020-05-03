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

import UserRepository from '../../domain/repositories/UserRepository';
import logger from 'iab/lib/utils/logger';
import User from '../../domain/entities/User';

class UserRepositoryImpl extends UserRepository {
    constructor({models}) {
        super();

        this.userModel = models.User;
    }

    async getUser(id) {
        const user = await this._getUser(id);
        if (!user) {
            return null;
        }

        return new User({
            id: user.id,
            password: user.password,
            slackUserId: user.slackUserId,
        });
    }

    async _getUser(id) {
        try {
            const result = await this._findByUserId(id) || await this._findBySlackUserId(id);
            if (result) {
                logger.info(`User ${id} is found`);
            }

            return result;
        } catch (e) {
            logger.error(e);
            return null;
        }
    }

    async _findByUserId(userId) {
        return this.userModel.findOne({id: userId});
    }

    async _findBySlackUserId(slackUserId) {
        return this.userModel.findOne({slackUserId});
    }

    async addUser(user) {
        const newUser = new this.userModel({
           id: user.id,
           password: user.password,
           slackUserId: user.slackUserId,
        });

        return (await this._saveUser(newUser)) ? user : null;
    }

    async _saveUser(newUser) {
        try {
            await newUser.save();
            logger.info(`User ${newUser.id} is added`);

            return true;
        } catch (e) {
            logger.error(e);

            return false;
        }
    }

    async updateUser(user) {
        const updated = await this._updateUser(user);
        if (!updated) {
            return null;
        }

        return new User({
            id: updated.id,
            password: updated.password,
            slackUserId: updated.slackUserId,
        });
    }

    async _updateUser(user) {
        try {
            await this.userModel.update(
                {id: user.id},
                {password: user.password, slackUserId: user.slackUserId},
            );

            logger.info(`User ${user.id} updated`);

            return user;
        } catch (e) {
            logger.error(e);

            return null;
        }
    }
}

export default UserRepositoryImpl;
