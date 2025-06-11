import { Poppins } from 'next/font/google';
export const poppinsLight = Poppins({
  weight: ['200'], 
  subsets: ['latin'], 
  style: ['normal', 'italic'],
  display: 'swap',
  fallback: ['Arial', 'sans-serif']
})
export const poppins = Poppins({
  weight: ['400'], 
  subsets: ['latin'], 
  style: ['normal', 'italic'],
  display: 'swap',
  fallback: ['Arial', 'sans-serif']
})
export const poppinsBold = Poppins({
  weight: ['600'], 
  subsets: ['latin'], 
  style: ['normal', 'italic'],
  display: 'swap',
  fallback: ['Arial', 'sans-serif']
})

import { Inter } from 'next/font/google';
export const inter = Inter({
  weight: ['400'], 
  subsets: ['latin'], 
  style: ['normal'],
  display: 'swap',
  fallback: ['Arial', 'sans-serif']
})
export const interMedium = Inter({
  weight: ['500'], 
  subsets: ['latin'], 
  style: ['normal'],
  display: 'swap',
  fallback: ['Arial', 'sans-serif']
})
export const interBold = Inter({
  weight: ['700'], 
  subsets: ['latin'], 
  style: ['normal'],
  display: 'swap',
  fallback: ['Arial', 'sans-serif']
})
export const interBlack = Inter({
  weight: ['900'], 
  subsets: ['latin'], 
  style: ['normal'],
  display: 'swap',
  fallback: ['Arial', 'sans-serif']
})

import {Freehand} from 'next/font/google';
export const freehand = Freehand({
  weight:['400'], 
  subsets: ['latin'], 
  style: ['normal'],
  display: 'swap',
  fallback: ['cursive']
})

import {Karla} from 'next/font/google';
export const karla = Karla({
  weight:['400'], 
  subsets: ['latin'], 
  style: ['normal'],
  display: 'swap',
  fallback: ['Arial', 'sans-serif']
})
export const karlaBold = Karla({
  weight: ['700'], 
  subsets: ['latin'], 
  style: ['normal', 'italic'],
  display: 'swap',
  fallback: ['Arial', 'sans-serif']
})
export const karlaExtraBold = Karla({
  weight: ['800'], 
  subsets: ['latin'], 
  style: ['normal', 'italic'],
  display: 'swap',
  fallback: ['Arial', 'sans-serif']
})

import{Roboto_Condensed} from 'next/font/google'; 
export const RobotoCondensed = Roboto_Condensed({
  weight:['900'], 
  subsets:['latin'],
  display: 'swap',
  fallback: ['Arial', 'sans-serif']
})

import{Roboto} from 'next/font/google';
export const robotoBlack = Roboto({
  weight:['900'], 
  subsets:['latin'],
  display: 'swap',
  fallback: ['Arial', 'sans-serif']
})
