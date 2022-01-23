import {render, screen} from '@testing-library/react'
import Home from '../pages/index'

describe('Home', () => {

    it('should renders homepage unchanged', () => {
        const {container} = render(<Home/>)
        expect(container).toMatchSnapshot()
    })


    it('should renders a heading', () => {
        render(<Home description={'Description'} title={'Carlos'}/>)

        const heading = screen.getByRole('heading', {
            name: /welcome to Carlos!/i,
        })

        expect(heading).toBeInTheDocument()
    })
})
