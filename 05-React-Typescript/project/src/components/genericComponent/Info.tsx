// export const Info = ({ skill }: { skill: string[] | number[] | {name: string, title: string, percent: number}[] }) => {
// function Info = <T>({ skill }: { skill: T[]}) {

type InfoType<T> = {
  skill: T[];
};

export const Info = <T extends { id: number }>({ skill }: InfoType<T>) => {
  console.log(skill);
  return (
    <div>
      <span>firstName: Sarah</span>
      <span>lastName: Moradi</span>
    </div>
  );
};

export const Card = () => {
  return (
    <Info
      skill={[
        { name: "sarah", id: 1 },
        { name: "mammad", id: 2 },
      ]}
    />
  );
};
