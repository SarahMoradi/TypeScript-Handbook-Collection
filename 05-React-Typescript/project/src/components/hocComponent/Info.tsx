export const Info = ({ lastSeen }: { lastSeen: string }) => {
  return (
    <div>
      <span>firstName: Sarah</span>
      <span>lastName: Moradi</span>
      <span>lastSeen: {lastSeen}</span>
    </div>
  );
};
