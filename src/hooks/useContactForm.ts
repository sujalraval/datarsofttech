import { useState } from 'react';
import { contactFormSchema, ContactFormData } from '@/lib/validation';
import { z } from 'zod';

interface UseContactFormReturn {
  formData: ContactFormData;
  errors: Record<string, string>;
  isSubmitting: boolean;
  handleChange: (field: keyof ContactFormData, value: string | boolean) => void;
  handleSubmit: (e: React.FormEvent) => Promise<boolean>;
  resetForm: () => void;
}

export const useContactForm = (): UseContactFormReturn => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    institution: '',
    phone: '',
    service: '',
    message: '',
    consent: false
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (field: keyof ContactFormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear error for this field when user starts typing
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const validateForm = (): boolean => {
    try {
      contactFormSchema.parse(formData);
      setErrors({});
      return true;
    } catch (error) {
      const newErrors: Record<string, string> = {};
      if (error instanceof z.ZodError) {
        error.issues.forEach((issue) => {
          const field = issue.path[0] as string;
          newErrors[field] = issue.message;
        });
      }
      setErrors(newErrors);
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent): Promise<boolean> => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const isValid = validateForm();
      
      if (isValid) {
        // In a real implementation, this would send data to your backend
        console.log('Form submitted:', formData);
        return true;
      }
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      institution: '',
      phone: '',
      service: '',
      message: '',
      consent: false
    });
    setErrors({});
    setIsSubmitting(false);
  };

  return {
    formData,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
    resetForm
  };
};