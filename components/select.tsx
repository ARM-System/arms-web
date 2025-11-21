import { cn } from "./utils";

export interface SelectProps extends React.ComponentProps<"select"> {
  children: React.ReactNode;
}

function Select({ className, children, ...props }: SelectProps) {
  return (
    <select
      data-slot="select"
      className={cn(
        "w-full px-3 py-2 border border-neutral-300 rounded-md bg-white text-sm transition-[color,box-shadow] outline-none",
        "focus:outline-none focus:ring-2 focus:ring-[#1F8A34] focus:border-transparent",
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className,
      )}
      {...props}
    >
      {children}
    </select>
  );
}

export { Select };
