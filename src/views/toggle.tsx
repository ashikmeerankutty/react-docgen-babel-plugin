import React from 'react';

import { EuiToggle }  from '../components/toggle/toggle';
import { PropsInfo } from '../propsinfo';

const ToggleInfo = () => (
  <div>
    <h3>Toggle Info</h3>
    <PropsInfo component={EuiToggle} />
  </div>
);

export default ToggleInfo;
