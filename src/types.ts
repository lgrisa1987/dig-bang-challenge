import {ChangeEvent, ReactNode} from "react";

export type SingleSlider ={
    label: string,
    id: string,
    inputAttr: {
        maxLength: number,
        min: number,
        max: number,
    }
    currency?: string
}
export type SliderProps = {
  values: SingleSlider;
};

export type ChangeEventHandlerType = (e: ChangeEvent<HTMLInputElement>) => void;

export type ChildrenProps = {
    children: ReactNode
}



export type InitialStateProps = {
    [key: string]: any,
    montoTotal: number,
    plazo: number,
    cuotaFija: number,
    invalid: boolean,
    rotateMain: boolean,
    slidersData: SingleSlider[]
    tableData: string[]
}

export type ActionProps = {
    type: string,
    payload?: any
}
export type ContextProps ={
    state: InitialStateProps;
  dispatch: (action: ActionProps) => void;
}


export type ButtonProps ={
    children: string,
    className: string
    obtenerCredito?: boolean
}
export type PriceAnimationProps = {
    cuotaFija: number;
    modifiers: {
      cuotaFija: (places: number) => number;
    };
    duration: number;
    ease: string;
    onUpdate: () => void;
}
