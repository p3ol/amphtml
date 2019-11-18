/**
 * Copyright 2019 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {jsonLiteral} from '../../../../src/json';

const NAVEGG_CONFIG = jsonLiteral({
  'requests': {
    'pageview':
      'https://amp.navdmp.com/amp?' +
      'aid=${clientId(navegg_id)}&' +
      'url=${canonicalUrl}&' +
      'ref=${documentReferrer}&' +
      'tit=${title}&' +
      'lan=${browserLanguage}' +
      '&acc=${account}&' +
      'v=7',
  },
  'triggers': {
    'trackpageview': {
      'on': 'visible',
      'request': 'pageview',
    },
  },
  'transport': {
    'beacon': false,
    'xhrpost': false,
    'image': {'suppressWarnings': true},
  },
});

export {NAVEGG_CONFIG};
