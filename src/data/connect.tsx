import React, { useContext, useEffect, useState, useMemo } from 'react';
import { AppContext } from './AppContext';
import { DispatchObject } from '../util/types';
import { AppState } from './state';

interface ConnectParams<TOwnProps, TStateProps, TDispatchProps> {
  //Store가 가진 state를 어떻게 props에 엮을 지 정한다(이 동작을 정의하는 함수는 mapStateToProps라고 불립니다)
  mapStateToProps?: (state: AppState, props: TOwnProps) => TStateProps,
  //Reducer에 action을 알리는 함수 dispatch를 어떻게 props에 엮을 지 정한다(이 동작을 정의하는 함수는 mapDispatchToProps라고 불립니다)
  mapDispatchToProps?: TDispatchProps,
  //위에 두가지가 적용된 props를 받을 Component를 정한다
  component: React.ComponentType<any>
};

export function connect<TOwnProps = any, TStateProps = any, TDispatchProps = any>({ mapStateToProps = () => ({} as TStateProps), mapDispatchToProps = {} as TDispatchProps, component }: ConnectParams<TOwnProps, TStateProps, TDispatchProps>): React.FunctionComponent<TOwnProps> {

  const Connect = (ownProps: TOwnProps) => {
    const context = useContext(AppContext);

    const dispatchFuncs = useMemo(() => {
      const dispatchFuncs: { [key: string]: any } = {};
      Object.keys(mapDispatchToProps).forEach((key) => {
        const oldFunc = (mapDispatchToProps as any)[key];
        const newFunc = (...args: any) => {
          const dispatchFunc = oldFunc(...args);
          if (typeof dispatchFunc === 'object') {
            context.dispatch(dispatchFunc);
          } else {
            const result = dispatchFunc(context.dispatch)
            if (typeof result === 'object' && result.then) {
              result.then((dispatchObject?: DispatchObject) => {
                if (dispatchObject && dispatchObject.type) {
                  context.dispatch(dispatchObject);
                }
              })
            }
          }
        }
        dispatchFuncs[key] = newFunc
      });
      return dispatchFuncs;
    }, [mapDispatchToProps])


    const props = useMemo(() => {
      return Object.assign({}, ownProps, mapStateToProps(context.state, ownProps), dispatchFuncs);
    }, [ownProps, context.state]);

    return React.createElement<TOwnProps>(component, props);
  }
  return React.memo(Connect as any);
}
