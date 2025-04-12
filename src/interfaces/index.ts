import { creditCardSchema, digitSchema, ibanCardSchema } from '@/validations';
import { z } from 'zod';

export * from './auth.interfaces';
export * from './general.interfaces';
export * from './inquiries.interfaces';
export * from './utility';

export type TCreditCard = z.infer<typeof creditCardSchema>;
export type TIbanCard = z.infer<typeof ibanCardSchema>;
export type TDigit = z.infer<typeof digitSchema>;
