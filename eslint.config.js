// eslint.config.js
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import prettierConfig from "eslint-config-prettier";

export default [
  // 1. Игнорируемые папки (не линтим сборку и зависимости)
  {
    ignores: ["**/dist/**", "**/build/**", "**/node_modules/**", "**/.next/**"],
  },

  // 2. Базовая конфигурация для всех JS/TS файлов
  js.configs.recommended, // Подключает базовые правила ESLint (no-undef, etc.)

  // 3. Конфигурация для TypeScript (применяется ко всем TS/TSX файлам)
  ...tseslint.configs.recommended, // Подключает рекомендуемые правила TypeScript

  // 4. Конфигурация для React (применяется к файлам с JSX)
  {
    files: ["**/*.{jsx,tsx}"],
    plugins: {
      react,
      "react-hooks": reactHooks,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true, // Включаем поддержку JSX
        },
      },
    },
    rules: {
      // React rules
      ...react.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules, // Правила для нового JSX transform (не требует import React from 'react')

      // React Hooks rules
      ...reactHooks.configs.recommended.rules,

      // Кастомные настройки (примеры)
      "react/prop-types": "off", // Отключаем prop-types, так как используем TypeScript
      "react/react-in-jsx-scope": "off", // Отключаем требование React в области видимости (для нового JSX transform)
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" },
      ], // Предупреждение на неиспользуемые переменные, игнорируя начинающиеся с "_"
    },
    settings: {
      react: {
        version: "detect", // Автоматически определяет версию React
      },
    },
  },

  // 5. Специфичные настройки для тестовых файлов
  {
    files: ["**/*.{test,spec}.{ts,tsx,js,jsx}"],
    rules: {
      "no-console": "off", // Разрешаем console.log в тестах
    },
  },
  prettierConfig,
];
