import { Archivo, Inter } from 'next/font/google';

export const archivo = Archivo({
    subsets: ['latin'],
    weight: "variable",
    variable: '--font-archivo',
    axes: ['wdth']
});

export const inter= Inter({
    subsets: ['latin'],
    weight: "variable",
    variable: '--font-inter',
    axes: ['opsz']
});
