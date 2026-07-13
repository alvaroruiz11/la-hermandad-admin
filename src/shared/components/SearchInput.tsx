import { Search } from 'lucide-react';

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from '@/components/ui/input-group';

interface Props {
  className?: string;
  placeholder?: string;
  query?: string;
  onQueryChange?: (query: string) => void;
}

export const SearchInput = ({
  className,
  placeholder = 'Buscar...',
  query,
  onQueryChange,
}: Props) => {
  return (
    <InputGroup className={className}>
      <InputGroupInput
        type="search"
        placeholder={placeholder}
        value={query}
        onChange={(e) => onQueryChange?.(e.target.value)}
      />
      <InputGroupAddon>
        <Search />
      </InputGroupAddon>
    </InputGroup>
  );
};
