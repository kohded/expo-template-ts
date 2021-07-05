import { FC, lazy, LazyExoticComponent, useEffect, useState } from 'react';
import { ColorSchemeName, Dimensions, useColorScheme as _useColorScheme } from 'react-native';
import { UseDimensions } from './types';

export const lazyComponent = (
  name: string,
  importer: Promise<Record<string, FC>>
): LazyExoticComponent<FC> =>
  lazy(async () => {
    const component = await importer;
    return { default: component[name] };
  });

// The useColorScheme value is always either light or dark, but the built-in type suggests that it
// can be null. This will not happen in practice, so this makes it a bit easier to work with.
export default function useColorScheme(): NonNullable<ColorSchemeName> {
  return _useColorScheme() as NonNullable<ColorSchemeName>;
}

export const useDimensions = (): UseDimensions => {
  const screenDimensions = Dimensions.get('screen');
  const windowDimensions = Dimensions.get('window');
  const [dimensions, setDimensions] = useState({
    screen: screenDimensions,
    window: windowDimensions,
  });

  const onOrientationChange = ({ screen, window }: UseDimensions) => {
    setDimensions({ screen, window });
  };

  useEffect(() => {
    Dimensions.addEventListener('change', onOrientationChange);
    return () => {
      Dimensions.removeEventListener('change', onOrientationChange);
    };
  });

  return dimensions;
};
