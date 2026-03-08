import type { ComponentType } from "react";

// export const Container = ({Component}: {Component: ReactNode}) => {

export const Container = ({
  Component,
}: {
  Component: ComponentType<{ lastSeen: string }>;
}) => {
  return <Component lastSeen={"2025-04-02"} />;
};
