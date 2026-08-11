export interface SearchBarProps {
  placeholder: string;
  buttonText?: string;

  value?: string;

  onChange?: (value: string) => void;

  onSearch?: () => void;
}
