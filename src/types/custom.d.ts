declare type ClickHandler = import('@/types/react').ClickHandler;

declare type valueof<T> = T[number];
declare type valueof<T> = T[keyof T];
