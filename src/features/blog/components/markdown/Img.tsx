import { useMemo } from 'react';
import NextImage from 'next/image';
import { ImageProps } from './MarkdownComponentProps';

export const Img = (props: ImageProps) => {
  const { alt, width, height } = useMemo(() => {
    const match = /(?<alt>.*){(?<width>\d+)x(?<height>\d+)}$/.exec(props.alt || '');
    if (!match || !match.groups) {
      return { alt: props.alt, width: 100, height: 100 };
    }
    const { alt, width, height } = match.groups;
    return { alt, width: Number.parseInt(width, 10), height: Number.parseInt(height, 10) };
  }, [props.alt]);

  const src = useMemo(() => {
    if (!props.src) {
      throw new Error('src is required');
    }
    return props.src;
  }, [props.src]);

  return <NextImage src={src} alt={alt} width={width} height={height} />;
};
