# @rn-components-dropdown/dropdown

A lightweight, customizable, and fully typed **Dropdown** and **DropdownController** component for **React Native**.  
Supports **single** & **multiple selection**, custom icons, styling, and easy integration with **React Hook Form**.

---
# Example

<p align="center">
  <img src="https://github.com/Daynight-Himmat/react-components/blob/defcdc886a57e41315aff3424f4944104b5b7de8/src/assets/images/single_select.png" width="250" />
  <img src="https://github.com/Daynight-Himmat/react-components/blob/defcdc886a57e41315aff3424f4944104b5b7de8/src/assets/images/multi_select.png" width="250" />
</p>



---

## 📦 Installation

### Install Package

```bash title="install.sh" copy
npm install @rn-components-dropdown/dropdown
```

### React Hook Form (optional — required only for DropdownController)

```bash title="install.sh" copy
npm install react-hook-form
```

---

## ✨ Components Provided

This package includes two components:

### 🔹 Dropdown  
A standalone dropdown with:
- Single or multi selection  
- Custom icons  
- Full styling customization  
- Works independently  

### 🔹 DropdownController  
A wrapper designed for **React Hook Form**, handling form values automatically.

---

# 🔽 Dropdown Usage

```tsx
import { Dropdown } from "@rn-components-dropdown/dropdown";

export default function MyScreen() {
  return (
    <Dropdown
      data={[
        { id: 1, label: "Apple" },
        { id: 2, label: "Banana" },
      ]}
      labelField="label"
      valueField="id"
      placeholder="Select fruit"
    />
  );
}
```

---

# 🔧 Dropdown Props

| Prop              | Type                    | Description                                      |
|-------------------|-------------------------|--------------------------------------------------|
| data              | Array<any>             | List of dropdown items                           |
| labelField        | string                 | Key used for item label                           |
| valueField        | string                 | Key used for item value                           |
| value             | any                    | Current selected item/value                       |
| placeholder       | string                 | Placeholder text                                  |
| multiple          | boolean                | Enable multi-select                               |
| onChange          | (item) => void         | Callback when value changes                       |
| disable           | boolean                | Disable the dropdown                              |
| renderIcon        | () => JSX.Element      | Custom icon renderer                              |
| style             | ViewStyle              | Wrapper container style                           |
| selectedStyle     | ViewStyle              | Style for selected value display                  |
| dropdownStyle     | ViewStyle              | Dropdown list container style                     |
| placeholderStyle  | TextStyle              | Style for placeholder text                        |
| itemStyle         | ViewStyle              | Style for each dropdown item                      |
| ...others         | any                    | Additional props                                  |

---

# 🎯 DropdownController (React Hook Form Support)

A form-friendly dropdown that automatically:
- updates values  
- handles errors  
- applies validation rules  

---

## 📘 Usage with React Hook Form

```tsx
import { useForm } from "react-hook-form";
import { DropdownController } from "@rn-components-dropdown/dropdown";

export default function FormScreen() {
  const { control } = useForm();

  return (
    <DropdownController
      control={control}
      controller="fruit"
      dropProps={{
        data: [
          { id: 1, label: "Apple" },
          { id: 2, label: "Banana" },
        ],
        labelField: "label",
        valueField: "id",
        placeholder: "Pick a fruit",
      }}
    />
  );
}
```

---

## 🧩 DropdownController Props

| Prop          | Type        | Description                                   |
|---------------|-------------|-----------------------------------------------|
| control       | Control     | React Hook Form control object                |
| controller    | string      | Field name in the form                        |
| rules         | object      | Validation rules (optional)                   |
| dropProps     | object      | All dropdown props                            |
| defaultValue  | any         | Initial/default value                         |

---

## 📝 Notes

- Works on **iOS** and **Android**
- Supports **custom icons**, SVG or any JSX via `renderIcon`
- Fully customizable styles
- TypeScript supported

---

## 📄 License

MIT
