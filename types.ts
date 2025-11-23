import React from 'react';

export interface FeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}