
export enum AppStep {
  SELECTION = 'selection',
  DATA_ENTRY = 'data_entry',
  LOADING = 'loading',
  VSL = 'vsl'
}

export type TargetType = 'husband' | 'wife' | null;

export interface FormData {
  targetName: string;
  targetPhone: string;
}
