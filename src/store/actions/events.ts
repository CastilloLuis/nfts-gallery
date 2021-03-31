export const smartContractEventHandler = (
  eventName: string,
): Promise<any> => {
  const event = window.contracts.minter[eventName];
  return new Promise((res, rej) => {
    event({}, async (err, result) => {
      if (err) rej(err);
      res(result);
    });
  })
}
