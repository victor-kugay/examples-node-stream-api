import React, {ChangeEventHandler} from 'react';

import {useApi} from '../src/ui/hooks/di';

export default function MainPage(): JSX.Element {
  const api = useApi();

  const uploadFile = async (file: File): Promise<void> => {
    try {
      await api.uploadFile(file);
      alert('Uploaded');
    } catch {
      alert('Error');
    } finally {
      alert('Done');
    }
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = ({target: {files}}) => {
    if (!files || !files.length) return;
    uploadFile(files[0]);
  };

  return <input type="file" onChange={handleChange} />;
}
