import { FormEvent, ReactNode, useCallback } from 'react';

const UploadImage = (): ReactNode => {
  const onSubmit = useCallback(async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const res = await fetch('/api/upload-image', {
      method: 'post',
      body: formData,
    });
    const json = await res.json();
    console.log(json);
  }, []);
  return (
    <form onSubmit={onSubmit}>
      <input type={'file'} name={'image'} />
      <button type={'submit'}>submit</button>
    </form>
  );
};
export default UploadImage;
