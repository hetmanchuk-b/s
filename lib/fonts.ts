import {IBM_Plex_Sans} from "next/font/google";

export const primaryFont = IBM_Plex_Sans({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-ibm-plex'
});
