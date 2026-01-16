
export enum AppStep {
  SELECTION = 'selection',
  DATA_ENTRY = 'data_entry',
  PROTOCOL = 'protocol',
  PROFILE_FOUND = 'profile_found',
  ANALYSIS = 'analysis',
  VSL = 'vsl'
}

export type TargetType = 'husband' | 'wife' | null;

export interface FormData {
  targetName: string;
  targetPhone: string;
}
