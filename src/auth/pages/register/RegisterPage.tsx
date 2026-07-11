import React from 'react';
import { Link } from 'react-router';
import { AlertCircle } from 'lucide-react';
import { PasswordInput } from '@/components/auth/password-input';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const RegisterPage = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');

  const errorSummaryRef = React.useRef<HTMLDivElement>(null);
  const firstErrorRef = React.useRef<HTMLInputElement>(null);

  const errorList = Object.entries(errors);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrors({});
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;
    const email = formData.get('email') as string;

    // Client-side validation
    const newErrors: Record<string, string> = {};

    if (!firstName.trim()) newErrors.firstName = 'First name is required';
    if (!lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      newErrors.email = 'Invalid email address';

    if (!password) newErrors.password = 'Password is required';
    else if (password.length < 8)
      newErrors.password = 'Password must be at least 8 characters';
    if (password !== confirmPassword)
      newErrors.confirmPassword = 'Passwords do not match';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsLoading(false);

      // Focus first error field
      setTimeout(() => {
        errorSummaryRef.current?.focus();
      }, 100);
      return;
    }

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // router.push('/auth/thank-you');
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight text-balance">
          Crear una cuenta
        </h1>
        <p className="text-muted-foreground">
          Introduce tus datos a continuación para crear tu cuenta.
        </p>
      </div>

      {errorList.length > 0 && (
        <div
          ref={errorSummaryRef}
          tabIndex={-1}
          role="alert"
          aria-labelledby="error-summary-title"
          className="p-4 rounded-lg border border-destructive/50 bg-destructive/10 animate-in fade-in slide-in-from-top-2"
        >
          <div className="flex gap-3">
            <AlertCircle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
            <div className="space-y-1">
              <p
                id="error-summary-title"
                className="font-medium text-destructive"
              >
                Por favor, corrija los siguientes errores:
              </p>
              <ul className="text-sm text-destructive/90 space-y-1">
                {errorList.map(([field, message]) => (
                  <li key={field}>
                    <a
                      href={`#${field}`}
                      className="underline underline-offset-2 hover:text-destructive"
                    >
                      {message}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName">Nombre</Label>
            <Input
              ref={errors.firstName ? firstErrorRef : undefined}
              id="firstName"
              name="firstName"
              placeholder="John"
              autoComplete="given-name"
              className="h-12 bg-input border-border transition-all duration-200 focus:scale-[1.01]"
              disabled={isLoading}
              aria-invalid={!!errors.firstName}
              aria-describedby={
                errors.firstName ? 'firstName-error' : undefined
              }
            />
            {errors.firstName && (
              <p
                id="firstName-error"
                className="text-sm text-destructive animate-in fade-in slide-in-from-top-1"
              >
                {errors.firstName}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">Apellido</Label>
            <Input
              id="lastName"
              name="lastName"
              placeholder="Doe"
              autoComplete="family-name"
              className="h-12 bg-input border-border transition-all duration-200 focus:scale-[1.01]"
              disabled={isLoading}
              aria-invalid={!!errors.lastName}
              aria-describedby={errors.lastName ? 'lastName-error' : undefined}
            />
            {errors.lastName && (
              <p
                id="lastName-error"
                className="text-sm text-destructive animate-in fade-in slide-in-from-top-1"
              >
                {errors.lastName}
              </p>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Correo electrónico</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="john@example.com"
            autoComplete="email"
            className="h-12 bg-input border-border transition-all duration-200 focus:scale-[1.01]"
            disabled={isLoading}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email && (
            <p
              id="email-error"
              className="text-sm text-destructive animate-in fade-in slide-in-from-top-1"
            >
              {errors.email}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">Contraseña</Label>
          <PasswordInput
            id="password"
            name="password"
            placeholder="Crear una contraseña"
            className="h-12 bg-input border-border transition-all duration-200 focus:scale-[1.01]"
            disabled={isLoading}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            aria-invalid={!!errors.password}
            aria-describedby="password-strength password-error"
          />
          {/* <PasswordStrength password={password} /> */}
          {errors.password && (
            <p
              id="password-error"
              className="text-sm text-destructive animate-in fade-in slide-in-from-top-1"
            >
              {errors.password}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="confirmPassword">Confirmar contraseña</Label>
          <PasswordInput
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirma tu contraseña"
            className="h-12 bg-input border-border transition-all duration-200 focus:scale-[1.01]"
            disabled={isLoading}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            aria-invalid={!!errors.confirmPassword}
            aria-describedby="password-match confirmPassword-error"
          />
          {/* <PasswordMatch
            password={password}
            confirmPassword={confirmPassword}
          /> */}
          {errors.confirmPassword && (
            <p
              id="confirmPassword-error"
              className="text-sm text-destructive animate-in fade-in slide-in-from-top-1"
            >
              {errors.confirmPassword}
            </p>
          )}
        </div>

        <Button
          type="submit"
          className="w-full h-12 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          disabled={isLoading}
        >
          {isLoading ? 'Creando cuenta...' : 'Crear una cuenta'}
        </Button>

        {/* <p className="text-xs text-center text-muted-foreground">
          By creating an account, you agree to our{' '}
          <Link
            to="/terms"
            className="underline underline-offset-4 hover:text-foreground"
          >
            Terms of Service
          </Link>{' '}
          and{' '}
          <Link
            to="/privacy"
            className="underline underline-offset-4 hover:text-foreground"
          >
            Privacy Policy
          </Link>
        </p> */}
      </form>

      <p className="text-center text-sm text-muted-foreground">
        ¿Ya tienes una cuenta?{' '}
        <Link
          to="/auth/login"
          className="text-foreground underline underline-offset-4 hover:text-primary"
        >
          Iniciar sesión
        </Link>
      </p>
    </div>
  );
};

export default RegisterPage;
