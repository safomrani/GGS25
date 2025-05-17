import { Poppins } from 'next/font/google';
export const poppinsLight = Poppins({weight: ['200'], subsets: ['latin'],  style: ['normal', 'italic']})
export const poppins = Poppins({weight: ['400'], subsets: ['latin'],  style: ['normal', 'italic']})
export const poppinsBold = Poppins({weight: ['600'], subsets: ['latin'],  style: ['normal', 'italic']})


import {Freehand} from 'next/font/google';
export const freehand = Freehand({weight:['400'], subsets: ['latin'],  style: ['normal']})

import {Karla} from 'next/font/google';
export const karla = Karla({weight:['400'], subsets: ['latin'],  style: ['normal']})
export const karlaBold = Karla({weight: ['700'], subsets: ['latin'],  style: ['normal', 'italic']})
export const karlaExtraBold = Karla({weight: ['800'], subsets: ['latin'],  style: ['normal', 'italic']})

import{Roboto_Condensed} from 'next/font/google';
export const RobotoCondensed = Roboto_Condensed({weight:['900'], subsets:['latin']})

import{Roboto} from 'next/font/google';
export const robotoBlack = Roboto({weight:['900'], subsets:['latin']})
