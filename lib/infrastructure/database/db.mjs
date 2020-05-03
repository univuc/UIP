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

import mongoose from 'mongoose';
import config from '../../../config';
import logger from 'iab/lib/utils/logger';
import User from '../database/scheme/User';

mongoose.Promise = global.Promise;
mongoose.connect(config.db.uri);

const db = mongoose.connection;
db.on('error', () => logger.error('DB connection error'));
db.once('open', () => logger.info('DB connected successfully'));

const models = {
    User,
};

export default models;
