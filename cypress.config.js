import { defineConfig } from 'cypress'
import path from 'path'
import { NormalModuleReplacementPlugin } from 'webpack'

export default defineConfig({
  e2e: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setupNodeEvents(on, config) {}
  },

  component: {
    devServer: {
      framework: 'next',
      bundler: 'webpack',
      webpackConfig: {
        plugins: [
          new NormalModuleReplacementPlugin(
            /next\/image/,
            require.resolve(
              path.join(__dirname, 'cypress', 'mocks', 'next', 'image')
            )
          )
        ]
      }
    }
  }
})
