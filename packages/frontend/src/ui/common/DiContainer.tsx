import React, {PropsWithChildren, useMemo} from 'react';

import {createDiContainer} from '../../di/container';

import {ContainerProvider} from 'brandi-react';

export function DIContainer({children}: PropsWithChildren): JSX.Element {
  const container = useMemo(createDiContainer, []);

  return <ContainerProvider container={container}>{children}</ContainerProvider>;
}
