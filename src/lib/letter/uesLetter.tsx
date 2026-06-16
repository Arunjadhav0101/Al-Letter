import store from "@/store/store";
import { Provider } from "react-redux";
import React, { ComponentType } from "react";

const useLetter = <P extends object>(PageComponent: ComponentType<P>) => {
  const WrappedComponent: React.FC<P> = (props) => {
    return (
      <Provider store={store}>
        <PageComponent {...props} />
      </Provider>
    );
  };

  return WrappedComponent;
};

export default useLetter;