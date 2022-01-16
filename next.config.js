/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  presets: ["next/babel"],
  plugins: [["styled-components", { "ssr": true }]]
};
