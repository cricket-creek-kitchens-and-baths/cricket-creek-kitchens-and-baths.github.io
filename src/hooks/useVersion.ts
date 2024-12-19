import { useOnce } from '@/hooks/useOnce';

export function useVersion() {
  useOnce(() => {
    console.log(`%c\n/\`  /\`  |/  |)\n\\,  \\,  |\\  |)\n`, 'color: green');
    console.info({ mode: import.meta.env.MODE });
    console.info({ version: import.meta.env.APP_VERSION });
  });
}
