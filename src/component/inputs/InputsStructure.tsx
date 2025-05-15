import React from "react";

import { fieldTypes } from "assets/constants/fieldTypes";
import CheckboxPlain from "component/inputs/CheckboxPlain";
import DateTimePicker from "component/inputs/DateTimePicker";
import InputPlain from "component/inputs/InputPlain";
import { IInputsStructure } from "component/inputs/interfaces";
import MultilinePlain from "component/inputs/MultilinePlain";
import SelectPlain from "component/inputs/SelectPlain";
import { useInputsStructureStyles } from "component/inputs/styles";
import { getRandomInt } from "utils/Utils";

const InputsStructure = ({
  fields,
  className,
  variant,
  setFieldValue,
}: IInputsStructure): React.ReactElement => {
  const classes = useInputsStructureStyles();

  return (
    <div className={variant === "block" ? classes.block : classes.flex}>
      {fields &&
        fields.map((field) => {
          const commonProps = {
            onChange: (value: any) => setFieldValue(value, field.name),
            size: "small" as const,
            value: field.value,
            label: field.name,
          };
          let element = null;
          switch (field.type) {
            case fieldTypes.TEXT:
              element = <InputPlain {...commonProps} />;
              break;
            case fieldTypes.LARGE_TEXT:
              element = <MultilinePlain {...commonProps} />;
              break;
            case fieldTypes.NUMBER:
              element = <InputPlain {...commonProps} type="number" />;
              break;
            case fieldTypes.DATETIME:
              element = <DateTimePicker {...commonProps} />;
              break;
            case fieldTypes.CHECKBOX:
              element = <CheckboxPlain {...commonProps} />;
              break;
            case fieldTypes.SELECT:
              element = (
                <SelectPlain {...commonProps} options={field.options ?? []} />
              );
              break;
            default:
              element = <InputPlain {...commonProps} />;
              break;
          }

          return (
            <div
              className={`${classes.element} ${className}`}
              key={getRandomInt(0, 99999999)}
            >
              {element}
            </div>
          );
        })}
    </div>
  );
};

export default InputsStructure;
