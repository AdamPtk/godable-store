import { cn } from '@/lib/utils';

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('animate-pulse rounded-md theme-elem-bg', className)}
      {...props}
    />
  );
}

export { Skeleton };
