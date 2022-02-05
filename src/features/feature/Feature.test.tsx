import { render } from '../../test-utils'
import Feature from './index'

describe('Feature', () => {
  test('Show title', async () => {
    const utils = render(<Feature />)
    const heading = utils.getByRole('heading', { name: /hello world!/i })

    expect(heading).toBeInTheDocument()
  })
})