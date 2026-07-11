import { Link } from 'react-router';
import { ChevronRight, type LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Props {
  title: string;
  Icon: LucideIcon;
  prevHref?: string;
}

export const AdminTitle = ({ title, Icon, prevHref }: Props) => {
  return (
    <div className="flex items-center">
      {prevHref ? (
        <>
          <Button
            variant="ghost"
            size="icon-xs"
            render={() => (
              <Link to={prevHref}>
                <Icon className="size-3.5" />
              </Link>
            )}
          />
          <ChevronRight className="size-3 text-muted-foreground mr-1" />
        </>
      ) : (
        <Button variant="ghost" size="icon-xs" className="mr-0.5 cursor-text">
          <Icon className="size-3.5" />
        </Button>
      )}

      <h1 className="font-semibold text-lg">{title}</h1>
    </div>
  );
};
