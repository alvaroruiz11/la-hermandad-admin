import { LogOutIcon, SettingsIcon, UserIcon } from 'lucide-react';
import {
  DropdownMenuItem,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarBadge, AvatarFallback } from '@/components/ui/avatar';

interface Props {
  initials?: string;
  fullName?: string;
  email?: string;
  logout?: () => void;
}

export const ProfileMenu = ({ initials, fullName, email, logout }: Props) => {
  return (
    <>
      <DropdownMenuItem>
        <div className="flex items-center gap-2">
          <Avatar>
            <AvatarFallback>AR</AvatarFallback>
            <AvatarBadge className="bg-green-600 dark:bg-green-800" />
          </Avatar>
          <div>
            <p className="text-sm font-medium">Alvaro Ruiz</p>
            <p className="text-xs text-muted-foreground">alvaro@google.com</p>
          </div>
        </div>
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem>
        <UserIcon />
        Perfil
      </DropdownMenuItem>
      <DropdownMenuItem>
        <SettingsIcon />
        Configuración
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem
        variant="destructive"
        onClick={logout}
        className="cursor-pointer"
      >
        <LogOutIcon />
        Cerrar Sesión
      </DropdownMenuItem>
    </>
  );
};
