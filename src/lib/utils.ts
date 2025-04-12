import { IGeneralData } from '@/interfaces';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function fetcher<T = IGeneralData, P = unknown>({
  url,
  method = 'GET',
  payload,
  options = {},
  token,
}: {
  url: string;
  token?: string;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  payload?: P;
  options?: RequestInit;
}): Promise<T> {
  const baseUrl: string = process.env.NEXT_PUBLIC_API_BASE_URL!;
  const fullUrl: string = `${baseUrl}${url}`;

  const fetchOptions: RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(options.headers || {}),
    },
    body: payload ? JSON.stringify(payload) : undefined,
    ...options,
  };

  const response = await fetch(fullUrl, fetchOptions);
  const result = await response.json();

  if (!response.ok || !result.success) {
    throw new Error(result.message || 'An error occurred');
  }

  return result;
}
