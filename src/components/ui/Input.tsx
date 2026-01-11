import React from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { cn } from '@/lib/cn';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label?: string;
  type?:
    | 'text'
    | 'password'
    | 'email'
    | 'number'
    | 'tel'
    | 'url'
    | 'search'
    | 'date';
  error?: boolean;
  errorMsg?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ id, label, type = 'text', error, errorMsg, className, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false);
    const isPassword = type === 'password';

    return (
      <div className="flex flex-col gap-1">
        {label && (
          <label htmlFor={id} className="text-sm font-medium text-gray-700">
            {label}
          </label>
        )}

        <div className="relative">
          <input
            id={id}
            ref={ref}
            type={isPassword && showPassword ? 'text' : type}
            className={cn(
              'w-full rounded border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500',
              error ? 'border-red-500' : 'border-gray-300',
              className
            )}
            {...props}
          />

          {isPassword && (
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500"
            >
              {showPassword ? (
                <Eye className="h-5 w-5" />
              ) : (
                <EyeOff className="h-5 w-5" />
              )}
            </button>
          )}
        </div>

        {error && errorMsg && (
          <span className="text-red-500 text-sm">{errorMsg}</span>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
