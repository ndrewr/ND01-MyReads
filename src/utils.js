// @flow

export const randomSymbol = () => {
  const symbols = [9997, 10002, 10001, 10022, 10037, 10050, 10070, 10078];
  return String.fromCharCode(
    symbols[Math.floor(Math.random() * symbols.length)]
  );
};
