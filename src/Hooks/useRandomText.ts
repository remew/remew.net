import React, {useEffect, useState} from 'react';

// TODO: fix randomize logic. use regexp

const alphanum = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
const excludes = ` .,?!'"`; // TODO: use regexp

const noop = () => {};
export default function useRandomText(ref: React.RefObject<HTMLElement>, text: string, duration: number, delay: number = 0, onStart: () => void = noop, onFinish: () => void = noop) {
  const textArray = Array.from(text);
  const totalLength = textArray.length;

  useEffect(() => {
    let flag = true;
    setTimeout(() => {
      onStart();

      const startTime = Date.now();
      const intervalId = setInterval(() => {
        const elapsedTime = Date.now() - startTime;
        const fixedTextLength = Math.floor(elapsedTime / duration * totalLength);
        const renderTextArray = textArray.map((c, i) => i < fixedTextLength || excludes.includes(c) ? c : alphanum[Math.floor(Math.random() * alphanum.length)]);
        if (ref.current) {
          ref.current.innerText = renderTextArray.join('');
        }

        if (!flag || elapsedTime > duration) {
          clearInterval(intervalId);
          onFinish();
        }
      }, 50);
    }, delay);
    return () => {flag = false;};
  }, [text]);
}
