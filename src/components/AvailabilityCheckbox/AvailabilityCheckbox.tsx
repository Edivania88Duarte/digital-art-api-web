import React from 'react';

interface AvailabilityCheckboxProps {
  available: boolean;
  onChange: (newValue: boolean) => void;
}

const AvailabilityCheckbox: React.FC<AvailabilityCheckboxProps> = ({ available, onChange }) => {
  return (
    <label>
      Disponível:
      <input
        type="checkbox"
        checked={available}
        onChange={(e) => onChange(e.target.checked)}
      />
    </label>
  );
};

export default AvailabilityCheckbox;
