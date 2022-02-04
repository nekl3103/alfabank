import React, { useCallback } from 'react';
import Checkbox, { CheckboxChangeEvent } from 'antd/lib/checkbox';
import cl from './styles.module.scss';


interface TypeFilter {
  checked: boolean;
  onChange: (t: boolean) => void;
}

export const Filter = ({ checked, onChange }: TypeFilter) => {
  const onChangeCheckbox = useCallback((e: CheckboxChangeEvent) => {
    onChange(e.target.checked);
  }, []);

  return (
    <div className={ cl.filter }>
      <div className={ cl.filter_text }>Фильтровать по:</div>
      <Checkbox checked={ checked } onChange={ onChangeCheckbox }>Только с лайками</Checkbox>
    </div>
  );
};
