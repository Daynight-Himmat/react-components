# @rn-components-dropdown/dropdown

A lightweight and customizable dropdown component for React Native. Includes a flexible `Dropdown` component and a simple `AppText` component.

---

## 🚀 Installation

Install the package using npm or yarn:

```bash
npm install @rn-components-dropdown/dropdown
```

or

```bash
yarn add @rn-components-dropdown/dropdown
```

---

## 📦 Importing Components

```js
import { Dropdown, AppText } from '@rn-components-dropdown/dropdown';
```

---

## 🧩 Usage Example

```jsx
import React, { useState } from 'react';
import { View } from 'react-native';
import { Dropdown, AppText } from '@rn-components-dropdown/dropdown';

export default function App() {
  const [value, setValue] = useState(null);

  const data = [
    { label: 'Apple', value: 1 },
    { label: 'Banana', value: 2 },
    { label: 'Mango', value: 3 },
  ];

  return (
    <View style={{ padding: 20 }}>
      <AppText>Choose a fruit:</AppText>

      <Dropdown
        data={data}
        labelField="label"
        valueField="value"
        value={value}
        onChange={(item) => setValue(item.value)}
        placeholder="Select item"
      />
    </View>
  );
}
```

---

## 🛠️ Dropdown Props

| Prop            | Type       | Default         | Description                                           |
| --------------- | ---------- | --------------- | ----------------------------------------------------- |
| `data`          | `array`    | `[]`            | The list of options for the dropdown.                 |
| `labelField`    | `string`   | `'label'`       | The key in each data object for displaying the label. |
| `valueField`    | `string`   | `'value'`       | The key used as the selected value.                   |
| `value`         | `any`      | `null`          | The selected value.                                   |
| `placeholder`   | `string`   | `'Select item'` | Placeholder text.                                     |
| `onChange`      | `function` | `() => {}`      | Callback when a value is selected.                    |
| `style`         | `object`   | `{}`            | Custom style for the dropdown container.              |
| `textStyle`     | `object`   | `{}`            | Custom style for the selected text.                   |
| `dropdownStyle` | `object`   | `{}`            | Style for the dropdown list.                          |

---

## ✨ Features

* Fully customizable dropdown UI
* Simple API
* Works with any React Native project
* Includes reusable `AppText` component

---

## 📄 AppText Component

A simple wrapper around the standard `Text` component.

### Usage

```jsx
<AppText style={{ fontSize: 18 }}>Hello World</AppText>
```

### Props

| Prop       | Type     | Description    |                        |
| ---------- | -------- | -------------- | ---------------------- |
| `children` | `string  | ReactNode`     | Text content to render |
| `style`    | `object` | Custom styling |                        |

---

## 📚 Contributing

Pull requests are welcome! If you want to improve the package, create an issue or PR.

---

## 🪪 License

MIT © 2025 @rn-components-dropdown
