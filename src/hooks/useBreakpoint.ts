import useMediaQuery from '@mui/material/useMediaQuery';

export enum Breakpoint {
  // xsmall = 350,
  // small = 500,
  medium = 767,
  large = 1096,
}

// export const useXSmallBreakpoint = () =>
//   useMediaQuery(`(max-width:${Breakpoint.xsmall}px)`);

// export const useSmallBreakpoint = () =>
//   useMediaQuery(`(max-width:${Breakpoint.small}px)`);

// export const useMediumBreakpoint = () =>
//   useMediaQuery(`(max-width:${Breakpoint.medium}px)`);

// export const useLargeBreakpoint = () =>
//   useMediaQuery(`(max-width:${Breakpoint.large}px)`);

export const useXLargeBreakpoint = () =>
  useMediaQuery(`(min-width:${Breakpoint.large + 1}px)`);

// ???
// export const useMaxWidth = () => {
//   const isMedium = useMediumBreakpoint();
//   const isLarge = useLargeBreakpoint();

//   return isMedium
//     ? `${Breakpoint.medium + 1}px`
//     : isLarge
//       ? `${Breakpoint.large + 1}px`
//       : '1140px';
// };
