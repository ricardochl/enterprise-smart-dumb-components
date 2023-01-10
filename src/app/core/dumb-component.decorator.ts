import { ChangeDetectionStrategy, Component } from "@angular/core";

const dumbComponentArgs: Component = {
  changeDetection: ChangeDetectionStrategy.OnPush
};

export function DumbComponentDecorator(args: Component = {}): (cls: any) => void {

  const compArgs = Object.assign(dumbComponentArgs as Component,args),
    ngCompDecorator = Component(compArgs);

  return function(compType: any) {
    ngCompDecorator(compType);
  };

}
