/**
 * ZENPULSAR Brand Guidelines and Constants
 * 
 * This file contains all brand-related constants including colors,
 * typography, and usage guidelines for the ZENPULSAR brand.
 */

// Brand Colors
export const BRAND_COLORS = {
  fuchsia: 'rgb(201, 38, 212)',      // #C926D4
  electricBlue: 'rgb(41, 38, 207)',   // #2926CF
  white: 'rgb(255, 255, 255)',       // #FFFFFF
  black: 'rgb(0, 0, 0)',             // #000000
} as const;

// CSS Custom Properties
export const BRAND_CSS_VARS = {
  fuchsia: 'var(--zp-fuchsia)',
  electricBlue: 'var(--zp-electric-blue)',
  white: 'var(--zp-white)',
  black: 'var(--zp-black)',
} as const;

// Brand Gradients
export const BRAND_GRADIENTS = {
  primary: 'linear-gradient(135deg, #C926D4 0%, #2926CF 100%)',
  primaryReverse: 'linear-gradient(135deg, #2926CF 0%, #C926D4 100%)',
  vertical: 'linear-gradient(180deg, #C926D4 0%, #2926CF 100%)',
  radial: 'radial-gradient(circle, #C926D4 0%, #2926CF 100%)',
} as const;

// Typography
export const BRAND_TYPOGRAPHY = {
  primary: 'Texta Alt',      // For printed and digital artwork
  secondary: 'Century Gothic', // For Microsoft Office Suite
  web: 'Inter',              // Web optimized font
} as const;

// Logo Variants
export const LOGO_VARIANTS = {
  primary: '/logo.png',           // Main logo for light backgrounds
  negative: '/brand/logo-white.png',  // White logo for dark backgrounds
  positive: '/brand/logo-contrast.png', // High contrast version
} as const;

// Logo Usage Guidelines
export const LOGO_GUIDELINES = {
  safeArea: '1x logo height minimum',
  minSize: '24px',
  maxSize: '200px',
  formats: ['PNG', 'SVG', 'PDF'],
  restrictions: [
    'Do not change logo colors',
    'Do not distort proportions', 
    'Do not rotate the logo',
    'Do not add effects or shadows',
    'Use appropriate variant for background'
  ]
} as const;

// Imagery Guidelines
export const IMAGERY_GUIDELINES = {
  style: 'Black and white or mild color',
  subjects: ['Architecture', 'People', 'Data visualization', 'Technology'],
  theme: 'Movement and online data circulation',
  restrictions: [
    'Avoid overly saturated colors',
    'Maintain professional appearance',
    'Focus on clean, modern aesthetics'
  ]
} as const;

// Wave Element
export const WAVE_ELEMENT = {
  purpose: 'Data wave representation and brand identifier',
  usage: 'Can be used in brand colors or gradients',
  implementation: 'Available as SVG component',
  variants: ['fuchsia', 'electric-blue', 'gradient', 'white', 'black'],
  sizes: ['sm', 'md', 'lg']
} as const;

// Utility function to get brand color
export function getBrandColor(color: keyof typeof BRAND_COLORS): string {
  return BRAND_COLORS[color];
}

// Utility function to get brand gradient
export function getBrandGradient(gradient: keyof typeof BRAND_GRADIENTS): string {
  return BRAND_GRADIENTS[gradient];
} 