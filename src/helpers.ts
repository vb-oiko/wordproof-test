export const uid = () => {
  return (
    Date.now().toString(36) +
    Math.random()
      .toString(36)
      .substr(2)
  );
};

export const numberOrNullValidator = (value: unknown) =>
  typeof value === "number" || value === null;

export const uniqueLabel = (label: string) =>
  `${label.toLowerCase().replace(/\W/g, "-")}-${uid()}`;
