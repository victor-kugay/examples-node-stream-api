import {createInjectionHooks} from 'brandi-react';

import {DI_TOKENS} from '../../di/tokens';

const [useApi] = createInjectionHooks(DI_TOKENS.api);

export {useApi};
