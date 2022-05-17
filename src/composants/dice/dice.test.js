import { Dice } from "./dice";
import { render, screen } from '@testing-library/react'

it('dice welcome message', () => {
    render(<Dice />);
    expect(screen.getByText('Cliquer sur le dé pour le lancer :')).toBeInTheDocument();
});

// it('dice role', () => {
//     const dice = shallow(<Dice/>);
//     expect(dice.state("num")).arrayContaining([1, 2, 3, 4, 5, 6]);
// });

// it('dice rolled message', () => {
//     render(<Dice />);
//     expect(screen.getByText('Vous avez roulé un')).toBeInTheDocument();
// });