import type { ComponentProps, ElementType } from "react";

// type Test = ElementType
// const test: Test = "" #all tags

type AsProp<C extends ElementType> = {
  as?: C;
};

type PolymorphicComponentProp<C extends ElementType> = AsProp<C> &
  Omit<ComponentProps<C>, "as">;

const ButtonComponent = <C extends ElementType>({
  as,
  className,
  ...rest
}: PolymorphicComponentProp<C>) => {
  const Component = as || "button";
  return <Component {...rest} className={`custom-class ${className}`} />;
};

export default ButtonComponent;





export const Page = () => {
  return (
    <>
      <ButtonComponent as="a" href="https://a.ir" />
      {/* Link from React-Router-Dom
      <ButtonComponent as={Link} to={"https://a.ir"} /> */}
    </>
  );
};
