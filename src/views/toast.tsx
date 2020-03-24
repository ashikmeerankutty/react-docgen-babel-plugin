import React from "react";

import { EuiToast }  from "../components/toast/toast";
import { PropsInfo } from "../propsinfo";

const ToastInfo = () => {
  return (<div>
    <h3>Toast Info</h3>
    <PropsInfo component={EuiToast} />
  </div>)
};

export default ToastInfo;
