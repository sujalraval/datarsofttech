import { z } from 'zod';

// Newsletter subscription validation
export const newsletterSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
});

export type NewsletterFormData = z.infer<typeof newsletterSchema>;

// Contact form validation
export const contactFormSchema = z.object({
  name: z.string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be less than 50 characters')
    .trim(),
  email: z.string().email('Please enter a valid email address'),
  institution: z.string()
    .min(2, 'Institution name must be at least 2 characters')
    .max(100, 'Institution name must be less than 100 characters')
    .trim(),
  phone: z.string()
    .min(10, 'Phone number must be at least 10 digits')
    .max(15, 'Phone number must be less than 15 digits')
    .regex(/^\+?[\d\s\-\(\)]+$/, 'Please enter a valid phone number'),
  service: z.string().min(1, 'Please select a service'),
  message: z.string()
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message must be less than 1000 characters')
    .trim(),
  consent: z.boolean().refine(val => val === true, 'You must agree to receive communications'),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

// Helper function to format validation errors
export const formatErrors = (errors: Record<string, string[]>) => {
  return Object.entries(errors).reduce((acc, [field, messages]) => {
    acc[field] = messages[0];
    return acc;
  }, {} as Record<string, string>);
};

// Validation hook helpers
export const validateField = (schema: z.ZodSchema, field: string, value: unknown) => {
  try {
    schema.parse({ [field]: value });
    return null;
  } catch (error) {
    if (error instanceof z.ZodError) {
      const fieldError = error.issues.find((err: z.ZodIssue) => err.path[0] === field);
      return fieldError?.message || 'Invalid input';
    }
    return 'Invalid input';
  }
};