import type { ComponentProps } from "react";

type ConfirmButtonProps = Omit<ComponentProps<"button">, "title"> & {
  title: string;
};

// # with ref:
// type ConfirmButtonProps = Omit<ComponentPropsWithRef<"button">, "title"> & {
//   title: string;
// };

// # without ref:
// type ConfirmButtonProps = Omit<ComponentPropsWithoutRef<"button">, "title"> & {
//   title: string;
// };

// # typeof other component:
// type InheritedProps = ComponentProps<typeof SimpleComponent>;

export const ConfirmButton = ({ className, ...rest }: ConfirmButtonProps) => {
  return (
    <button className={`btn ${className}`} {...rest}>
      Submission
    </button>
  );
};
