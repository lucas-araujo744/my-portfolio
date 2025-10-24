declare module 'react-type-animation' {
  import React from 'react';

  export interface TypeAnimationProps {
    sequence: any[];
    wrapper?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
    cursor?: boolean;
    repeat?: number | Infinity;
    style?: React.CSSProperties;
    className?: string;
    speed?: number | { type: string; value: number };
    deletionSpeed?: number;
    omitDeletionAnimation?: boolean;
    preRenderFirstString?: boolean;
  }

  export const TypeAnimation: React.FC<TypeAnimationProps>;
} 