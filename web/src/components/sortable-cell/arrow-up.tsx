import { cn } from '@/lib/utils';

export const ArrowUp = ({ className }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 1024 1024"
      focusable="false"
      data-icon="caret-up"
      width="1em"
      height="1em"
      fill="currentColor"
      aria-hidden="true"
      className={cn('flex-shrink-0', className)}
    >
      <path d="M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z"></path>
    </svg>
  );
};
