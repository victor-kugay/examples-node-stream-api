import {createInjectionHooks} from 'brandi-react';

import {DI_TOKENS} from '../../di/tokens';

const [useWindow] = createInjectionHooks(DI_TOKENS.window);

export {useWindow};
