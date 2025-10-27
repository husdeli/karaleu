import { join } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = join(__filename, '..')

const config = {
  plugins: {
    '@tailwindcss/postcss': {
      config: join(__dirname, 'tailwind.config.ts'),
    },
    'postcss-preset-mantine': {},
    'postcss-simple-vars': {},
  },
}

export default config
