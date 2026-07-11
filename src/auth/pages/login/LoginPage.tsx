import React from 'react';
import { Link } from 'react-router';
import { AlertCircle } from 'lucide-react';
import { PasswordInput } from '@/components/auth/password-input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const LoginPage = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [errors, setErrors] = React.useState<Record<string, string>>({});

  const errorSummaryRef = React.useRef<HTMLDivElement>(null);

  const errorList = Object.entries(errors);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrors({});
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    // Client-side validation
    const newErrors: Record<string, string> = {};

    if (!email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      newErrors.email = 'Invalid email address';
    if (!password) newErrors.password = 'Password is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsLoading(false);
      setTimeout(() => {
        errorSummaryRef.current?.focus();
      }, 100);
      return;
    }

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Simulate failed login for demo (in real app, this would check credentials)
    // For now, just redirect to home
    // router.push("/")
  }
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight text-balance">
          Bienvenido de nuevo
        </h1>
        <p className="text-muted-foreground">
          Introduce tus credenciales para acceder a tu cuenta
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
          <div className="flex items-center justify-between">
            <Label htmlFor="password">Contraseña</Label>
            <Link
              to="/auth/forgot-password"
              className="text-sm text-muted-foreground hover:text-foreground underline underline-offset-4 transition-colors"
            >
              ¿Has olvidado tu contraseña?
            </Link>
          </div>
          <PasswordInput
            id="password"
            name="password"
            className="h-12 bg-input border-border transition-all duration-200 focus:scale-[1.01]"
            placeholder="Introduce tu contraseña"
            disabled={isLoading}
            aria-invalid={!!errors.password}
            aria-describedby={errors.password ? 'password-error' : undefined}
          />
          {errors.password && (
            <p
              id="password-error"
              className="text-sm text-destructive animate-in fade-in slide-in-from-top-1"
            >
              {errors.password}
            </p>
          )}
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox
            id="remember"
            name="remember"
            className="transition-all duration-200"
          />
          <Label
            htmlFor="remember"
            className="text-sm font-normal cursor-pointer"
          >
            Recuérdeme durante 30 días
          </Label>
        </div>

        <Button
          type="submit"
          className="w-full h-12 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          disabled={isLoading}
        >
          {isLoading ? 'Iniciando sesión...' : 'Iniciar sesión'}
        </Button>
      </form>

      <p className="text-center text-sm text-muted-foreground">
        ¿No tienes una cuenta?{' '}
        <Link
          to="/auth/register"
          className="text-foreground underline underline-offset-4 hover:text-primary transition-colors"
        >
          Registrarse
        </Link>
      </p>
    </div>
  );
};

export default LoginPage;
