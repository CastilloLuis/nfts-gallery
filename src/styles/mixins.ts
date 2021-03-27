export const flex = (
  alignItems: string = 'flex-start',
  justifyContent: string = 'flex-start',
  direction: string = 'row'
): string => `
  display: flex;
  align-items: ${alignItems};
  justify-content: ${justifyContent};
  flex-direction: ${direction};
`;
