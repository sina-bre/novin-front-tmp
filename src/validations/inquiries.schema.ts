import { z } from 'zod';

const cardInputValidation = z.string().length(4).regex(/^\d+$/);

export const creditCardSchema = z
  .object({
    input1: cardInputValidation,
    input2: cardInputValidation,
    input3: cardInputValidation,
    input4: cardInputValidation,
  })
  .refine((data) => {
    const fullCard = Object.values(data).join('');
    return fullCard.length === 16;
  });
export const ibanCardSchema = z
  .object({
    input1: cardInputValidation,
    input2: cardInputValidation,
    input3: cardInputValidation,
    input4: cardInputValidation,
    input5: cardInputValidation,
    input6: cardInputValidation,
  })
  .refine((data) => {
    const fullCard = Object.values(data).join('');
    return fullCard.length === 24;
  });
export const digitSchema = z.object({
  digit: z.string().length(16, 'لطفا مقدار صحیح را وارد کنید').regex(/^\d+$/),
});
